import { Sidebar } from "@/components/navigation/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, Users, Award, Building2 } from "lucide-react";
import { departmentsList } from "@shared/schema";

// Generate comprehensive comparison data for all departments
const generateComparisonData = () => {
  const deptConfig = {
    "Computer Science & Engineering": {
      placement2025: 92,
      avg2025: 25.6,
      highest2025: 52,
      students: 162,
      color: "#8B5CF6"
    },
    "Information Science": {
      placement2025: 86,
      avg2025: 22.4,
      highest2025: 45,
      students: 132,
      color: "#06B6D4"
    },
    "Electronics and Electrical": {
      placement2025: 78,
      avg2025: 20.0,
      highest2025: 38,
      students: 142,
      color: "#10B981"
    },
    "Mechanical": {
      placement2025: 71,
      avg2025: 17.6,
      highest2025: 32,
      students: 152,
      color: "#F59E0B"
    },
    "Civil": {
      placement2025: 67,
      avg2025: 16.0,
      highest2025: 28,
      students: 137,
      color: "#EF4444"
    },
    "Biotechnology": {
      placement2025: 62,
      avg2025: 14.4,
      highest2025: 24,
      students: 102,
      color: "#8B5CF6"
    }
  };

  return departmentsList.map(dept => ({
    department: dept.replace(" & Engineering", " & Engg.").replace("Electronics and Electrical", "ECE"),
    ...deptConfig[dept as keyof typeof deptConfig]
  }));
};

export default function DepartmentComparison() {
  const comparisonData = generateComparisonData();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <Sidebar />
      <div className="flex-1 ml-0 lg:ml-80 min-h-screen">
        <div className="px-4 py-6 lg:px-8 lg:py-8">
          <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
            {/* Header */}
            <div className="pt-16 lg:pt-0">
              <h1 className="text-2xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-600 to-purple-600 bg-clip-text text-transparent">
                Department Comparison Study
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground mt-2">
                Comprehensive comparative analysis of placement performance across all departments
              </p>
            </div>

            {/* Summary Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-purple-700">
                    Top Performing Dept
                  </CardTitle>
                  <Award className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold text-purple-800">CSE</div>
                  <p className="text-xs text-purple-600">92% placement rate</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-blue-700">
                    Highest Package
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold text-blue-800">₹52 LPA</div>
                  <p className="text-xs text-blue-600">Computer Science & Engineering</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-green-700">
                    Overall Average
                  </CardTitle>
                  <Building2 className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold text-green-800">₹19.3 LPA</div>
                  <p className="text-xs text-green-600">Across all departments</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-orange-700">
                    Total Students
                  </CardTitle>
                  <Users className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold text-orange-800">827</div>
                  <p className="text-xs text-orange-600">Academic Year 2024-25</p>
                </CardContent>
              </Card>
            </div>

            {/* Comprehensive Comparison Chart */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  Department-wise Placement Performance Analysis (2025)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[500px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={comparisonData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 120 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="department" 
                        stroke="#666"
                        fontSize={11}
                        angle={-45}
                        textAnchor="end"
                        height={100}
                        interval={0}
                      />
                      <YAxis stroke="#666" fontSize={12} />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #e2e8f0',
                          borderRadius: '8px'
                        }}
                      />
                      <Legend />
                      <Bar 
                        dataKey="placement2025" 
                        fill="#8B5CF6" 
                        name="Placement Rate (%)"
                        radius={[4, 4, 0, 0]}
                        barSize={40}
                      />
                      <Bar 
                        dataKey="avg2025" 
                        fill="#06B6D4" 
                        name="Average Package (LPA)"
                        radius={[4, 4, 0, 0]}
                        barSize={40}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Comparison Table */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  Detailed Performance Metrics (Academic Year 2024-25)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-left p-3 font-semibold text-gray-700">Department</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Total Students</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Placed Students</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Placement Rate</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Highest Package</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Average Package</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Performance Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((dept, index) => (
                        <tr key={dept.department} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="p-3 font-medium text-gray-800">{dept.department}</td>
                          <td className="p-3 text-gray-700">{dept.students}</td>
                          <td className="p-3 text-gray-700">{Math.round((dept.students * dept.placement2025) / 100)}</td>
                          <td className="p-3">
                            <span className={`font-semibold ${dept.placement2025 >= 85 ? 'text-green-600' : dept.placement2025 >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                              {dept.placement2025}%
                            </span>
                          </td>
                          <td className="p-3 font-semibold text-blue-600">₹{dept.highest2025} LPA</td>
                          <td className="p-3 font-semibold text-purple-600">₹{dept.avg2025} LPA</td>
                          <td className="p-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              dept.placement2025 >= 90 ? 'bg-green-100 text-green-800' :
                              dept.placement2025 >= 80 ? 'bg-blue-100 text-blue-800' :
                              dept.placement2025 >= 70 ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {dept.placement2025 >= 90 ? 'Excellent' :
                               dept.placement2025 >= 80 ? 'Very Good' :
                               dept.placement2025 >= 70 ? 'Good' : 'Needs Improvement'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Key Insights */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  Key Performance Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">🏆 Top Performers</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Computer Science & Engineering:</strong> Leading with 92% placement rate and ₹52 LPA highest package</li>
                      <li>• <strong>Information Science:</strong> Strong performance with 86% placements and ₹45 LPA top package</li>
                      <li>• <strong>Electronics & Electrical:</strong> Consistent growth with 78% placement rate</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">📈 Growth Opportunities</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Mechanical Engineering:</strong> Showing steady improvement in core industry placements</li>
                      <li>• <strong>Civil Engineering:</strong> Enhanced infrastructure focus boosting opportunities</li>
                      <li>• <strong>Biotechnology:</strong> Emerging sector with high potential for growth</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}