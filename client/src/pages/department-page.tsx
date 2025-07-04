import { Sidebar } from "@/components/navigation/sidebar";
import { EnhancedPlacementStats } from "@/components/charts/enhanced-placement-stats";
import { useQuery } from "@tanstack/react-query";
import { Department, departmentsList } from "@shared/schema";
import { Loader2, Building2, Users, TrendingUp, Award } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function DepartmentPage() {
  const [selectedDept, setSelectedDept] = useState<string>(departmentsList[0]);

  const { data: stats, isLoading } = useQuery<Department[]>({
    queryKey: ["/api/departments", selectedDept],
    queryFn: async ({ queryKey }) => {
      const [_, department] = queryKey;
      const response = await fetch(
        `/api/departments?department=${encodeURIComponent(department as string)}`
      );
      if (!response.ok) throw new Error("Failed to fetch department stats");
      return response.json();
    },
  });

  // Calculate department insights
  const latestStats = stats?.filter(stat => stat.year === 2025)?.[0];
  const previousStats = stats?.filter(stat => stat.year === 2024)?.[0];
  const averagePackage = stats ? Math.round(stats.reduce((acc, stat) => acc + stat.avgPackage, 0) / stats.length) : 0;
  const trend = latestStats && previousStats ? 
    ((latestStats.placementRate - previousStats.placementRate) / previousStats.placementRate * 100) : 0;

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-800">
      <Sidebar />
      <div className="flex-1 p-8 lg:pl-8 pl-20">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-600 to-purple-600 bg-clip-text text-transparent">
                Department Analytics
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                Comprehensive placement insights for {selectedDept}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="text-sm">
                <Building2 className="h-3 w-3 mr-1" />
                {selectedDept}
              </Badge>
              <Select value={selectedDept} onValueChange={setSelectedDept}>
                <SelectTrigger className="w-[280px] bg-white shadow-lg">
                  <SelectValue placeholder="Select a department" />
                </SelectTrigger>
                <SelectContent>
                  {departmentsList.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
            </div>
          ) : (
            <>
              {/* Key Metrics for Selected Department */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700">
                      Current Placement Rate
                    </CardTitle>
                    <Users className="h-4 w-4 text-purple-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600">
                      {latestStats?.placementRate || 0}%
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {trend > 0 ? `+${trend.toFixed(1)}%` : `${trend.toFixed(1)}%`} from last year
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700">
                      Highest Package
                    </CardTitle>
                    <Award className="h-4 w-4 text-blue-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">
                      ₹{latestStats?.highestPackage || 0} LPA
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Record for this department
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700">
                      Average Package
                    </CardTitle>
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">
                      ₹{latestStats?.avgPackage || 0} LPA
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Current academic year
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700">
                      Historical Average
                    </CardTitle>
                    <Building2 className="h-4 w-4 text-orange-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-600">
                      ₹{averagePackage} LPA
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Overall department performance
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Interactive Charts */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <EnhancedPlacementStats
                    data={stats || []}
                    title={`${selectedDept} - Comprehensive Analytics (2010-2025)`}
                  />
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
}