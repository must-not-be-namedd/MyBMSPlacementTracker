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
  BookOpen,
  Brain,
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
  { name: "Resources", href: "/resources", icon: BookOpen },
  { name: "AI Career Guidance", href: "/career-guidance", icon: Brain, badge: "New" },
];

export function Sidebar() {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();
  const isMobile = useIsMobile();

  const SidebarContent = () => (
    <div className="flex h-full flex-col gap-4 bg-gray-800 text-gray-100">
      <div className="px-6 py-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold text-white">BMSCE Placements</h2>
        <p className="text-sm text-gray-300">Welcome, {user?.username}</p>
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
                    "w-full justify-start gap-2 text-gray-200",
                    isActive && "bg-gray-700 text-white"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="flex-1">{item.name}</span>
                  {item.badge && (
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  )}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="px-4 py-4 border-t border-gray-700">
        <Button
          variant="outline"
          className="w-full justify-start gap-2 text-gray-200 border-gray-600"
          onClick={() => logoutMutation.mutate()}
          disabled={logoutMutation.isPending}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile hamburger menu */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="bg-white shadow-lg">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72 bg-gray-800">
            <div className="sr-only">
              <h2>Navigation Menu</h2>
              <p>Main navigation for the BMSCE Placement Portal</p>
            </div>
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex min-h-screen w-72 border-r border-gray-700 flex-col bg-gray-800">
        <SidebarContent />
      </div>
    </>
  );
}