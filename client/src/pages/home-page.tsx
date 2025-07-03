import { Sidebar } from "@/components/navigation/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Department, Company } from "@shared/schema";
import { EnhancedPlacementStats } from "@/components/charts/enhanced-placement-stats";
import { Loader2, Trophy, Users, Building, TrendingUp, Calendar, Award, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function HomePage() {
  const { data: stats, isLoading } = useQuery<Department[]>({
    queryKey: ["/api/departments"],
  });

  const { data: companies, isLoading: companiesLoading } = useQuery<Company[]>({
    queryKey: ["/api/companies"],
  });

  const latestStats = stats?.filter((stat) => stat.year === 2025) || [];
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

  const topCompanies = companies?.sort((a, b) => (b.visitCount || 0) - (a.visitCount || 0)).slice(0, 5) || [];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                BMSCE Placement Dashboard
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                Real-time placement analytics for BMS College of Engineering
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="text-sm">
                <Calendar className="h-3 w-3 mr-1" />
                Academic Year 2024-25
              </Badge>
            </div>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
            </div>
          ) : (
            <>
              {/* Key Metrics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-purple-100">
                      Average Package
                    </CardTitle>
                    <Trophy className="h-5 w-5 text-purple-200" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-1">
                      ₹{averages.avgPackage} LPA
                    </div>
                    <p className="text-xs text-purple-100">
                      +12% from last year
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-blue-100">
                      Highest Package
                    </CardTitle>
                    <Award className="h-5 w-5 text-blue-200" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-1">
                      ₹{averages.highestPackage} LPA
                    </div>
                    <p className="text-xs text-blue-100">
                      Record achievement this year
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-green-100">
                      Placement Rate
                    </CardTitle>
                    <TrendingUp className="h-5 w-5 text-green-200" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-1">
                      {averages.placementRate}%
                    </div>
                    <p className="text-xs text-green-100">
                      Excellent success rate
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-orange-100">
                      Total Companies
                    </CardTitle>
                    <Building className="h-5 w-5 text-orange-200" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-1">
                      {companies?.length || 0}
                    </div>
                    <p className="text-xs text-orange-100">
                      Recruiting partners
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Department Statistics */}
                <div className="lg:col-span-2">
                  <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-gray-800">
                        Department-wise Placement Statistics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <EnhancedPlacementStats
                        data={stats || []}
                        title="Interactive Department Analytics"
                      />
                    </CardContent>
                  </Card>
                </div>

                {/* Top Companies */}
                <div>
                  <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-gray-800 flex items-center">
                        <Star className="h-5 w-5 mr-2 text-yellow-500" />
                        Top Recruiting Companies
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {companiesLoading ? (
                        <div className="flex items-center justify-center h-48">
                          <Loader2 className="h-6 w-6 animate-spin text-purple-600" />
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {topCompanies.map((company, index) => (
                            <div key={company.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                                  index === 0 ? 'bg-yellow-500' : 
                                  index === 1 ? 'bg-gray-400' : 
                                  index === 2 ? 'bg-amber-600' : 'bg-purple-500'
                                }`}>
                                  {index + 1}
                                </div>
                                <div>
                                  <h3 className="font-semibold text-gray-800">{company.name}</h3>
                                  <p className="text-sm text-gray-600">{company.sector}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-semibold text-purple-600">
                                  {company.visitCount} visits
                                </div>
                                <div className="text-sm text-gray-600">
                                  ₹{Math.round(company.avgPackage / 100000)} LPA avg
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Department Progress Indicators */}
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    Department Performance Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {latestStats.map((stat) => (
                      <div key={stat.id} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-800">{stat.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {stat.placementRate}%
                          </Badge>
                        </div>
                        <Progress value={stat.placementRate} className="h-2" />
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-center p-2 bg-purple-50 rounded">
                            <div className="font-semibold text-purple-600">₹{stat.highestPackage}</div>
                            <div className="text-xs text-gray-600">Highest</div>
                          </div>
                          <div className="text-center p-2 bg-blue-50 rounded">
                            <div className="font-semibold text-blue-600">₹{stat.avgPackage}</div>
                            <div className="text-xs text-gray-600">Average</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
}