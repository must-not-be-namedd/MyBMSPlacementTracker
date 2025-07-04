import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Department } from "@shared/schema";

interface EnhancedPlacementStatsProps {
  data: Department[];
  title: string;
}

const COLORS = [
  '#8B5CF6', // Purple
  '#3B82F6', // Blue  
  '#10B981', // Green
  '#F59E0B', // Orange
  '#EF4444', // Red
];

export function EnhancedPlacementStats({ data, title }: EnhancedPlacementStatsProps) {
  // Group data by year for trends
  const yearlyData = data.reduce((acc, item) => {
    const existingYear = acc.find(y => y.year === item.year);
    if (existingYear) {
      existingYear.totalStudents = (existingYear.totalStudents || 0) + 1;
      existingYear.avgPackage = Math.round((existingYear.avgPackage + item.avgPackage) / 2);
      existingYear.highestPackage = Math.max(existingYear.highestPackage, item.highestPackage);
      existingYear.placementRate = Math.round((existingYear.placementRate + item.placementRate) / 2);
    } else {
      acc.push({
        year: item.year,
        avgPackage: item.avgPackage,
        highestPackage: item.highestPackage,
        placementRate: item.placementRate,
        totalStudents: 1
      });
    }
    return acc;
  }, [] as any[]).sort((a, b) => a.year - b.year);

  // Latest year data for pie chart
  const latestYear = Math.max(...data.map(d => d.year));
  const latestYearData = data
    .filter(d => d.year === latestYear)
    .map(d => ({
      name: d.name,
      value: d.placementRate,
      package: d.avgPackage
    }));

  // Department comparison data
  const departmentComparison = data
    .filter(d => d.year === latestYear)
    .map(d => ({
      department: d.name.length > 15 ? d.name.substring(0, 15) + '...' : d.name,
      highest: d.highestPackage,
      average: d.avgPackage,
      placement: d.placementRate
    }));

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      
      <Tabs defaultValue="trends" className="w-full">
        <TabsList className="grid w-full grid-cols-6 bg-gray-100 dark:bg-gray-700">
          <TabsTrigger value="trends" className="text-gray-700 data-[state=active]:text-white data-[state=active]:bg-gray-800">Year Trends</TabsTrigger>
          <TabsTrigger value="comparison" className="text-gray-700 data-[state=active]:text-white data-[state=active]:bg-gray-800">Department Comparison</TabsTrigger>
          <TabsTrigger value="distribution" className="text-gray-700 data-[state=active]:text-white data-[state=active]:bg-gray-800">Placement Distribution</TabsTrigger>
          <TabsTrigger value="packages" className="text-gray-700 data-[state=active]:text-white data-[state=active]:bg-gray-800">Package Analysis</TabsTrigger>
          <TabsTrigger value="detailed" className="text-gray-700 data-[state=active]:text-white data-[state=active]:bg-gray-800">Detailed Analytics</TabsTrigger>
          <TabsTrigger value="insights" className="text-gray-700 data-[state=active]:text-white data-[state=active]:bg-gray-800">Market Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="trends" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Placement Rate Trends (2010-2025)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={yearlyData}>
                      <defs>
                        <linearGradient id="placementGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="year" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          border: 'none',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="placementRate"
                        stroke="#8B5CF6"
                        fillOpacity={1}
                        fill="url(#placementGradient)"
                        strokeWidth={3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Package Trends (LPA)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={yearlyData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="year" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          border: 'none',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="highestPackage"
                        stroke="#3B82F6"
                        strokeWidth={3}
                        name="Highest Package"
                        dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="avgPackage"
                        stroke="#10B981"
                        strokeWidth={3}
                        name="Average Package"
                        dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-4">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Department Performance Comparison ({latestYear})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={departmentComparison} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis 
                      dataKey="department" 
                      className="text-xs"
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="highest"
                      name="Highest Package (LPA)"
                      fill="#8B5CF6"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="average"
                      name="Average Package (LPA)"
                      fill="#3B82F6"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="distribution" className="space-y-4">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Placement Rate Distribution by Department ({latestYear})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={latestYearData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {latestYearData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="packages" className="space-y-4">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Package Analysis by Department ({latestYear})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={departmentComparison} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis 
                      dataKey="department" 
                      className="text-xs"
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="placement"
                      name="Placement Rate (%)"
                      fill="#10B981"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="detailed" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Multi-Year Department Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={yearlyData}>
                      <defs>
                        <linearGradient id="studentGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="year" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          border: 'none',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="totalStudents"
                        name="Total Students"
                        stroke="#10B981"
                        fillOpacity={1}
                        fill="url(#studentGradient)"
                        strokeWidth={2}
                      />
                      <Area
                        type="monotone"
                        dataKey="placementRate"
                        name="Placement Rate %"
                        stroke="#8B5CF6"
                        fillOpacity={0.3}
                        fill="#8B5CF6"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Package Range Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={departmentComparison}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis 
                        dataKey="department" 
                        className="text-xs"
                        angle={-45}
                        textAnchor="end"
                        height={80}
                      />
                      <YAxis className="text-xs" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          border: 'none',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Legend />
                      <Bar
                        dataKey="highest"
                        name="Highest Package (LPA)"
                        fill="#EF4444"
                        radius={[2, 2, 0, 0]}
                      />
                      <Bar
                        dataKey="average"
                        name="Average Package (LPA)"
                        fill="#3B82F6"
                        radius={[2, 2, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Comprehensive Department Performance Matrix</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={departmentComparison} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis 
                      dataKey="department" 
                      className="text-xs"
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis yAxisId="left" className="text-xs" orientation="left" />
                    <YAxis yAxisId="right" className="text-xs" orientation="right" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Legend />
                    <Bar
                      yAxisId="left"
                      dataKey="placement"
                      name="Placement Rate (%)"
                      fill="#10B981"
                      radius={[2, 2, 0, 0]}
                    />
                    <Bar
                      yAxisId="right"
                      dataKey="average"
                      name="Average Package (LPA)"
                      fill="#8B5CF6"
                      radius={[2, 2, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Top Performing Departments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departmentComparison
                    .sort((a, b) => b.placement - a.placement)
                    .slice(0, 5)
                    .map((dept, index) => (
                      <div key={dept.department} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                            index === 0 ? 'bg-yellow-500' : 
                            index === 1 ? 'bg-gray-400' : 
                            index === 2 ? 'bg-amber-600' : 'bg-gray-300'
                          }`}>
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{dept.department}</p>
                            <p className="text-sm text-gray-600">{dept.placement}% placement rate</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-purple-600">₹{dept.average}L</p>
                          <p className="text-xs text-gray-500">avg package</p>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Market Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800">Growth Trend</h4>
                    <p className="text-sm text-green-700">
                      Average package increased by {Math.round(
                        ((yearlyData[yearlyData.length - 1]?.avgPackage || 0) - 
                         (yearlyData[yearlyData.length - 2]?.avgPackage || 0)) / 
                         (yearlyData[yearlyData.length - 2]?.avgPackage || 1) * 100
                      )}% this year
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800">Placement Rate</h4>
                    <p className="text-sm text-blue-700">
                      Overall placement rate: {Math.round(
                        departmentComparison.reduce((sum, dept) => sum + dept.placement, 0) / 
                        departmentComparison.length
                      )}%
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-800">Peak Performance</h4>
                    <p className="text-sm text-purple-700">
                      Highest package: ₹{Math.max(...departmentComparison.map(d => d.highest))}L
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Statistical Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">
                        {departmentComparison.length}
                      </p>
                      <p className="text-sm text-gray-600">Departments</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">
                        ₹{Math.round(
                          departmentComparison.reduce((sum, dept) => sum + dept.average, 0) / 
                          departmentComparison.length
                        )}L
                      </p>
                      <p className="text-sm text-gray-600">Avg Package</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Insights</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• {departmentComparison.filter(d => d.placement > 90).length} departments with 90%+ placement</li>
                      <li>• {departmentComparison.filter(d => d.average > 15).length} departments with 15+ LPA average</li>
                      <li>• {yearlyData.length} years of historical data</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}