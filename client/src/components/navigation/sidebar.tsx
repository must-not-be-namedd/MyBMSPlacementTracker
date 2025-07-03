import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  FileText,
  Home,
  LogOut,
  MessageSquare,
  Menu,
  Users,
  Bot,
  Calendar,
  TrendingUp,
  Badge,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/hooks/use-auth";
import { useIsMobile } from "@/hooks/use-mobile";

type NavItem = {
  name: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
};

const navigation: NavItem[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "Departments", href: "/departments", icon: BarChart },
  { name: "Resume Builder", href: "/resume", icon: FileText },
  { name: "Mock Interview", href: "/interviews", icon: MessageSquare },
  { name: "Alumni Network", href: "/alumni", icon: Users },
];

export function Sidebar() {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();
  const isMobile = useIsMobile();

  const SidebarContent = () => (
    <div className="flex h-full flex-col gap-4">
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-semibold">BMSCE Placements</h2>
        <p className="text-sm text-muted-foreground">Welcome, {user?.username}</p>
      </div>

      <div className="flex-1 px-4">
        <div className="space-y-2">
          {navigation.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-2",
                    isActive && "bg-secondary"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="flex-1">{item.name}</span>
                  {item.badge && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  )}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="px-4 py-4 border-t">
        <Button
          variant="outline"
          className="w-full justify-start gap-2"
          onClick={() => logoutMutation.mutate()}
          disabled={logoutMutation.isPending}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="hidden lg:flex h-screen w-72 border-r flex-col">
      <SidebarContent />
    </div>
  );
}