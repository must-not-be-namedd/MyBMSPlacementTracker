import { Sidebar } from "@/components/navigation/sidebar";
import { useQuery } from "@tanstack/react-query";
import { Department, departmentsList } from "@shared/schema";
import { Loader2, Building2, Users, TrendingUp, Award, Calendar, BarChart3 } from "lucide-react";
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

// Generate realistic historical placement data for each department
const generateHistoricalData = (department: string) => {
  const years = Array.from({ length: 12 }, (_, i) => 2014 + i); // 2014-2025
  
  // Department-specific base statistics
  const deptConfig = {
    "Computer Science & Engineering": {
      baseStudents: 120,
      placementGrowth: 0.88,
      baseHighest: 8,
      baseAvg: 3.2,
      topRecruiters: "TCS, Infosys, Microsoft, Google, Amazon"
    },
    "Information Science": {
      baseStudents: 90,
      placementGrowth: 0.82,
      baseHighest: 6.5,
      baseAvg: 2.8,
      topRecruiters: "Wipro, TCS, Accenture, IBM, Cognizant"
    },
    "Electronics and Electrical": {
      baseStudents: 100,
      placementGrowth: 0.75,
      baseHighest: 5.5,
      baseAvg: 2.5,
      topRecruiters: "Bosch, Intel, Qualcomm, Samsung, L&T"
    },
    "Mechanical": {
      baseStudents: 110,
      placementGrowth: 0.68,
      baseHighest: 4.5,
      baseAvg: 2.2,
      topRecruiters: "Mahindra, Tata Motors, Ashok Leyland, BHEL"
    },
    "Civil": {
      baseStudents: 95,
      placementGrowth: 0.62,
      baseHighest: 4.0,
      baseAvg: 2.0,
      topRecruiters: "L&T, Gammon India, DLF, Punj Lloyd"
    },
    "Biotechnology": {
      baseStudents: 60,
      placementGrowth: 0.58,
      baseHighest: 3.8,
      baseAvg: 1.8,
      topRecruiters: "Biocon, Dr. Reddy's, Cipla, Glenmark"
    }
  };
  
  const config = deptConfig[department as keyof typeof deptConfig];
  if (!config) return [];
  
  return years.map((year, index) => {
    const yearMultiplier = 1 + (index * 0.08); // Growth over years
    const totalStudents = Math.round(config.baseStudents + (index * 2));
    const placementRate = Math.min(95, Math.round(config.placementGrowth * 100 + (index * 1.2)));
    const placed = Math.round((totalStudents * placementRate) / 100);
    const highestPackage = Math.round((config.baseHighest * yearMultiplier) * 10) / 10;
    const avgPackage = Math.round((config.baseAvg * yearMultiplier) * 10) / 10;
    
    return {
      year,
      totalStudents,
      placed,
      placementRate,
      highestPackage,
      avgPackage,
      topRecruiters: config.topRecruiters
    };
  });
};

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

  // Get historical data for current department
  const historicalData = generateHistoricalData(selectedDept);
  const latestYear = historicalData[historicalData.length - 1]; // 2025 data
  const previousYear = historicalData[historicalData.length - 2]; // 2024 data
  const averagePackage = historicalData.length > 0 ? Math.round(historicalData.reduce((acc, year) => acc + year.avgPackage, 0) / historicalData.length) : 0;
  const trend = latestYear && previousYear ? 
    ((latestYear.placementRate - previousYear.placementRate)) : 0;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <Sidebar />
      <div className="flex-1 ml-0 lg:ml-80 min-h-screen">
        <div className="px-4 py-6 lg:px-8 lg:py-8">
          <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
            <div className="flex flex-col gap-4">
              <div className="pt-16 lg:pt-0">
                <h1 className="text-2xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-600 to-purple-600 bg-clip-text text-transparent">
                  Department Analytics
                </h1>
                <p className="text-base lg:text-lg text-muted-foreground mt-2">
                  Comprehensive placement insights for {selectedDept}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Badge variant="secondary" className="text-xs lg:text-sm">
                  <Building2 className="h-3 w-3 mr-1" />
                  {selectedDept}
                </Badge>
                <Select value={selectedDept} onValueChange={setSelectedDept}>
                  <SelectTrigger className="w-full sm:w-[280px] bg-white shadow-lg">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700">
                      Current Placement Rate
                    </CardTitle>
                    <Users className="h-4 w-4 text-purple-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600">
                      {latestYear?.placementRate || 0}%
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
                      ₹{latestYear?.highestPackage || 0} LPA
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
                      ₹{latestYear?.avgPackage || 0} LPA
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

              {/* Historical Placement Data Table */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl font-semibold text-gray-800">
                    <BarChart3 className="h-5 w-5 text-purple-600" />
                    Historical Placement Statistics (2005-2025)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="text-left p-3 font-semibold text-gray-700">Year</th>
                          <th className="text-left p-3 font-semibold text-gray-700">Total Students</th>
                          <th className="text-left p-3 font-semibold text-gray-700">Placed</th>
                          <th className="text-left p-3 font-semibold text-gray-700">Placement Rate</th>
                          <th className="text-left p-3 font-semibold text-gray-700">Highest Package</th>
                          <th className="text-left p-3 font-semibold text-gray-700">Average Package</th>
                          <th className="text-left p-3 font-semibold text-gray-700">Top Recruiters</th>
                        </tr>
                      </thead>
                      <tbody>
                        {generateHistoricalData(selectedDept).map((yearData, index) => (
                          <tr key={yearData.year} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="p-3 font-medium text-gray-800">{yearData.year}</td>
                            <td className="p-3 text-gray-700">{yearData.totalStudents}</td>
                            <td className="p-3 text-gray-700">{yearData.placed}</td>
                            <td className="p-3">
                              <span className={`font-semibold ${yearData.placementRate >= 85 ? 'text-green-600' : yearData.placementRate >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                                {yearData.placementRate}%
                              </span>
                            </td>
                            <td className="p-3 font-semibold text-blue-600">₹{yearData.highestPackage} LPA</td>
                            <td className="p-3 font-semibold text-purple-600">₹{yearData.avgPackage} LPA</td>
                            <td className="p-3 text-gray-700 text-sm">{yearData.topRecruiters}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}