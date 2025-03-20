import { Sidebar } from "@/components/navigation/sidebar";
import { PlacementStats } from "@/components/charts/placement-stats";
import { useQuery } from "@tanstack/react-query";
import { Department, departmentsList } from "@shared/schema";
import { Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function DepartmentPage() {
  const [selectedDept, setSelectedDept] = useState<string>(departmentsList[0]);

  const { data: stats, isLoading } = useQuery<Department[]>({
    queryKey: ["/api/departments", selectedDept],
    queryFn: async ({ queryKey }) => {
      const [_, department] = queryKey;
      const response = await fetch(
        `/api/departments?department=${encodeURIComponent(department)}`
      );
      if (!response.ok) throw new Error("Failed to fetch department stats");
      return response.json();
    },
  });

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
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
            <PlacementStats
              data={stats || []}
              title={`${selectedDept} Placement Statistics`}
            />
          )}
        </div>
      </div>
    </div>
  );
}
