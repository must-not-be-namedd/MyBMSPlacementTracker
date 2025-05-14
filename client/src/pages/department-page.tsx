import { Sidebar } from "@/components/navigation/sidebar";
import { PlacementStats } from "@/components/charts/placement-stats";
import { GrowthTrend } from "@/components/charts/growth-trend";
import { useQuery } from "@tanstack/react-query";
import { Department, departmentsList } from "@shared/schema";
import { Loader2, BarChart3, LineChart, TrendingUp, Percent } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function DepartmentPage() {
  const [selectedDept, setSelectedDept] = useState<string>(departmentsList[0]);

  const { data: stats, isLoading } = useQuery<Department[]>({
    queryKey: ["/api/departments", selectedDept] as const,
    queryFn: async ({ queryKey }) => {
      const department = queryKey[1];
      const response = await fetch(
        `/api/departments?department=${encodeURIComponent(department as string)}`
      );
      if (!response.ok) throw new Error("Failed to fetch department stats");
      return response.json();
    },
  });

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Departments</h1>
              <p className="text-muted-foreground">
                View department-wise placement statistics
              </p>
            </div>

            <Select value={selectedDept} onValueChange={setSelectedDept}>
              <SelectTrigger className="w-[240px]">
                <SelectValue placeholder="Select department" />
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

          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="overview" className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="trends" className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Year-on-Year Trends
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <PlacementStats
                  data={stats || []}
                  title={`${selectedDept} Placement Statistics (2021-2024)`}
                />
              </TabsContent>
              
              <TabsContent value="trends" className="mt-6 space-y-8">
                <GrowthTrend
                  data={stats || []}
                  title={`${selectedDept} Highest Package Trend`}
                  metric="highestPackage"
                  metricName="Highest Package (LPA)"
                  lineColor="#38B2AC" /* Teal/Aquamarine */
                />
                
                <GrowthTrend
                  data={stats || []}
                  title={`${selectedDept} Average Package Trend`}
                  metric="avgPackage"
                  metricName="Average Package (LPA)"
                  lineColor="#8BDFD1" /* Light Teal */
                />
                
                <GrowthTrend
                  data={stats || []}
                  title={`${selectedDept} Placement Rate Trend`}
                  metric="placementRate"
                  metricName="Placement Rate (%)"
                  lineColor="#B390D4" /* Purple */
                />
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
    </div>
  );
}
