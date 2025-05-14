import { Sidebar } from "@/components/navigation/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Department } from "@shared/schema";
import { PlacementStats } from "@/components/charts/placement-stats";
import { Loader2, Trophy, Users, Building } from "lucide-react";

export default function HomePage() {
  const { data: stats, isLoading } = useQuery<Department[]>({
    queryKey: ["/api/departments"],
  });

  const latestStats = stats?.filter((stat) => stat.year === 2023) || [];
  const averages = {
    avgPackage: Math.round(
      latestStats.reduce((acc, curr) => acc + curr.avgPackage, 0) /
        latestStats.length
    ),
    highestPackage: Math.max(...latestStats.map((s) => s.highestPackage)),
    placementRate: Math.round(
      latestStats.reduce((acc, curr) => acc + curr.placementRate, 0) /
        latestStats.length
    ),
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome to BMSCE Placement Portal
            </p>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            <>
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="border-teal-100 border-t-4">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Highest Package
                    </CardTitle>
                    <Trophy className="h-4 w-4 text-teal-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-teal-700">
                      ₹{averages.highestPackage} LPA
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-t-4" style={{ borderTopColor: "#8BDFD1" }}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Average Package
                    </CardTitle>
                    <Building className="h-4 w-4" style={{ color: "#8BDFD1" }} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold" style={{ color: "#38B2AC" }}>
                      ₹{averages.avgPackage} LPA
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-t-4" style={{ borderTopColor: "#B390D4" }}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Placement Rate
                    </CardTitle>
                    <Users className="h-4 w-4" style={{ color: "#B390D4" }} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold" style={{ color: "#8A63B1" }}>
                      {averages.placementRate}%
                    </div>
                  </CardContent>
                </Card>
              </div>

              {stats && (
                <PlacementStats
                  data={stats}
                  title="Overall Placement Statistics"
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
