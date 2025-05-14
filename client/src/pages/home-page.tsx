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
      <div className="flex-1 p-8">
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
                      Average Package
                    </CardTitle>
                    <Trophy className="h-4 w-4 text-teal-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-teal-700">
                      ₹{averages.avgPackage} LPA
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-indigo-100 border-t-4">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Highest Package
                    </CardTitle>
                    <Building className="h-4 w-4 text-indigo-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-indigo-700">
                      ₹{averages.highestPackage} LPA
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-orange-100 border-t-4">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Placement Rate
                    </CardTitle>
                    <Users className="h-4 w-4 text-orange-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-700">
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
