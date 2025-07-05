import { Sidebar } from "@/components/navigation/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Department, Company } from "@shared/schema";
import { EnhancedPlacementStats } from "@/components/charts/enhanced-placement-stats";
import { RealTimeDashboard } from "@/components/analytics/real-time-dashboard";
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
    avgPackage: 18, // Fixed authentic data as requested
    highestPackage: 52, // Fixed authentic data as requested
    placementRate: 89, // Fixed authentic data as requested
  };
  const totalCompaniesCount = 56; // Fixed authentic data as requested

  const topCompanies = companies?.sort((a, b) => (b.visitCount || 0) - (a.visitCount || 0)).slice(0, 5) || [];

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-800">
      <Sidebar />
      <div className="flex-1 lg:ml-80 p-4 lg:p-8">
        <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="pt-12 lg:pt-0">
              <h1 className="text-2xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-600 to-purple-600 bg-clip-text text-transparent">
                BMSCE Placement Dashboard
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground mt-2">
                Real-time placement analytics for BMS College of Engineering
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="text-xs lg:text-sm bg-slate-100 dark:bg-slate-800">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                <Card className="bg-gradient-to-br from-slate-50 to-purple-50 text-gray-800 shadow-lg border border-gray-200">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700">
                      Average Package
                    </CardTitle>
                    <Trophy className="h-5 w-5 text-gray-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-1 text-gray-800">
                      ₹{averages.avgPackage} LPA
                    </div>
                    <p className="text-xs text-gray-600">
                      +12% from last year
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-800 shadow-lg border border-gray-200">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700">
                      Highest Package
                    </CardTitle>
                    <Award className="h-5 w-5 text-gray-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-1 text-gray-800">
                      ₹{averages.highestPackage} LPA
                    </div>
                    <p className="text-xs text-gray-600">
                      Record achievement this year
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-teal-50 text-gray-800 shadow-lg border border-gray-200">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700">
                      Placement Rate
                    </CardTitle>
                    <TrendingUp className="h-5 w-5 text-gray-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-1 text-gray-800">
                      {averages.placementRate}%
                    </div>
                    <p className="text-xs text-gray-600">
                      Excellent success rate
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-orange-50 to-red-50 text-gray-800 shadow-lg border border-gray-200">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700">
                      Total Companies
                    </CardTitle>
                    <Building className="h-5 w-5 text-gray-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-1 text-gray-800">
                      {totalCompaniesCount}
                    </div>
                    <p className="text-xs text-gray-600">
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
                        title="Computer Science & Engineering - Year Trends (2018-2025)"
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

              {/* Real-time Analytics Dashboard */}
              <div className="mb-12">
                <RealTimeDashboard />
              </div>

              {/* BMS College Showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* College Excellence */}
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-800">
                      BMS College of Engineering Excellence
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        BMS College of Engineering stands as a beacon of academic excellence and innovation in Karnataka. 
                        Our institution has consistently produced exceptional engineering talent that has made significant 
                        contributions to the technology industry across India and globally.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        With a remarkable track record of <span className="font-semibold text-purple-600">89% placement rate</span> and 
                        an impressive <span className="font-semibold text-blue-600">highest package of ₹52 LPA</span>, 
                        our students continue to showcase their expertise and secure positions in top-tier companies.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        The college's commitment to fostering innovation, research, and industry collaboration has resulted in 
                        year-on-year growth in placement statistics, with our graduates being recruited by over 
                        <span className="font-semibold text-slate-600"> 56 premier companies</span> annually.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Achievement Image */}
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-800">
                      Recent Achievement Recognition
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg overflow-hidden">
                        <img 
                          src="/bms-college-image.png" 
                          alt="BMS College Achievement Recognition Ceremony" 
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <p className="text-sm text-gray-600">
                        Our faculty and students being recognized for outstanding achievements in engineering education 
                        and industry partnerships at our Bengaluru campus.
                      </p>
                    </div>
                  </CardContent>
                </Card>
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
                          <Badge variant="outline" className="text-xs bg-slate-100">
                            {stat.placementRate}%
                          </Badge>
                        </div>
                        <Progress value={stat.placementRate} className="h-2" />
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-center p-2 bg-slate-50 rounded">
                            <div className="font-semibold text-slate-600">₹{stat.highestPackage}</div>
                            <div className="text-xs text-gray-600">Highest</div>
                          </div>
                          <div className="text-center p-2 bg-purple-50 rounded">
                            <div className="font-semibold text-purple-600">₹{stat.avgPackage}</div>
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