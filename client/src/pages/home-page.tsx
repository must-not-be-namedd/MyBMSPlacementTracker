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

              <div className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Placement Achievements</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                    <img 
                      src="/images/placement-achievements.jpg" 
                      alt="BMSCE Students receiving placement offer" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Recognition of Excellence</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Our students consistently receive prestigious job offers from top companies across Karnataka and India.
                      The image showcases our Computer Science department's students receiving recognition during our annual placement drive.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      With a legacy of excellence in placement, BMSCE continues to be one of the premier institutions 
                      in Karnataka for graduate recruitment, preparing students for successful careers in the technology sector.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">Frequent Recruiters in Karnataka</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <span className="text-lg font-semibold">Infosys</span>
                        <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">Visits: 15</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm font-medium">Type: IT Services & Consulting</p>
                      <p className="text-sm font-medium">Avg. Package: ₹8.5 LPA</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Headquartered in Bengaluru, Infosys is one of India's largest IT companies providing business consulting, 
                        information technology and outsourcing services. They regularly recruit from BMSCE for various technology roles.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-teal-500">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <span className="text-lg font-semibold">Wipro</span>
                        <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">Visits: 12</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm font-medium">Type: IT, Consulting & Business Services</p>
                      <p className="text-sm font-medium">Avg. Package: ₹7.8 LPA</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Based in Bengaluru, Wipro is a leading global information technology company offering integrated business, 
                        technology and process solutions. They offer challenging roles to BMSCE graduates in software development and consulting.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <span className="text-lg font-semibold">Bosch</span>
                        <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">Visits: 8</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm font-medium">Type: Engineering & Technology</p>
                      <p className="text-sm font-medium">Avg. Package: ₹10.2 LPA</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        With a major development center in Bengaluru, Bosch is a global supplier of technology and services in mobility, 
                        industrial tech, and consumer goods. They recruit BMSCE students for roles in embedded systems and automotive electronics.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-teal-500">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <span className="text-lg font-semibold">Mindtree</span>
                        <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">Visits: 10</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm font-medium">Type: IT Services & Digital Transformation</p>
                      <p className="text-sm font-medium">Avg. Package: ₹9.0 LPA</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Founded in Bengaluru, Mindtree delivers digital transformation and technology services from design to execution. 
                        They actively recruit BMSCE students for software engineering and digital solutions roles.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <span className="text-lg font-semibold">Accenture</span>
                        <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">Visits: 14</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm font-medium">Type: Professional Services & Consulting</p>
                      <p className="text-sm font-medium">Avg. Package: ₹8.2 LPA</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        With a strong presence in Bengaluru, Accenture provides strategy, consulting, digital, technology, and operations services. 
                        They are one of the most consistent recruiters from BMSCE, offering diverse roles across multiple domains.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-teal-500">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <span className="text-lg font-semibold">Mphasis</span>
                        <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">Visits: 7</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm font-medium">Type: IT Services & Solutions</p>
                      <p className="text-sm font-medium">Avg. Package: ₹7.5 LPA</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Based in Bengaluru, Mphasis applies next-generation technology to help enterprises transform their businesses. 
                        They regularly recruit BMSCE graduates for roles in cloud services, digital solutions, and application development.
                      </p>
                    </CardContent>
                  </Card>
                  
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
