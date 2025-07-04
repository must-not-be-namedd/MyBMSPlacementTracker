import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  TrendingUp, 
  Users, 
  Building2,
  Clock,
  MapPin,
  IndianRupee,
  Zap
} from "lucide-react";

export function RealTimeDashboard() {
  const [liveData, setLiveData] = useState({
    activeStudents: 245,
    ongoingInterviews: 12,
    todayPlacements: 8,
    liveOffersValue: 2850000
  });

  const recentActivity = [
    {
      id: 1,
      type: "placement",
      student: "Rahul K.",
      company: "Microsoft",
      package: "₹28 LPA",
      time: "2 minutes ago",
      location: "Bangalore"
    },
    {
      id: 2,
      type: "interview",
      student: "Priya S.",
      company: "Google",
      status: "ongoing",
      time: "5 minutes ago",
      location: "Mumbai"
    },
    {
      id: 3,
      type: "placement",
      student: "Arjun M.",
      company: "Amazon",
      package: "₹35 LPA",
      time: "8 minutes ago",
      location: "Hyderabad"
    },
    {
      id: 4,
      type: "offer",
      student: "Sneha R.",
      company: "Flipkart",
      package: "₹22 LPA",
      time: "12 minutes ago",
      location: "Bangalore"
    }
  ];

  const trending = [
    { company: "Microsoft", applications: 45, trend: "+12%" },
    { company: "Google", applications: 38, trend: "+8%" },
    { company: "Amazon", applications: 52, trend: "+15%" },
    { company: "Flipkart", applications: 29, trend: "+5%" },
    { company: "Accenture", applications: 67, trend: "+20%" }
  ];

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        activeStudents: prev.activeStudents + Math.floor(Math.random() * 3 - 1),
        ongoingInterviews: Math.max(0, prev.ongoingInterviews + Math.floor(Math.random() * 3 - 1)),
        todayPlacements: prev.todayPlacements + (Math.random() > 0.8 ? 1 : 0),
        liveOffersValue: prev.liveOffersValue + (Math.random() > 0.7 ? Math.floor(Math.random() * 500000) : 0)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">Live Placement Analytics</h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Live</span>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Real-time
          </Badge>
        </div>
      </div>

      {/* Live Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Active Students</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-800">{liveData.activeStudents}</div>
            <div className="flex items-center gap-1 text-xs text-blue-600">
              <Activity className="h-3 w-3" />
              Currently online
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Live Interviews</CardTitle>
            <Zap className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-800">{liveData.ongoingInterviews}</div>
            <div className="flex items-center gap-1 text-xs text-green-600">
              <Clock className="h-3 w-3" />
              In progress
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Today's Placements</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-800">{liveData.todayPlacements}</div>
            <div className="flex items-center gap-1 text-xs text-purple-600">
              <TrendingUp className="h-3 w-3" />
              +{Math.floor(Math.random() * 3) + 1} since morning
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-700">Live Offers Value</CardTitle>
            <IndianRupee className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-800">
              {formatCurrency(liveData.liveOffersValue)}
            </div>
            <div className="flex items-center gap-1 text-xs text-orange-600">
              <TrendingUp className="h-3 w-3" />
              Total value today
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity Feed */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-500" />
              Live Activity Feed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'placement' ? 'bg-green-500' :
                    activity.type === 'interview' ? 'bg-blue-500' : 'bg-purple-500'
                  } animate-pulse`}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-gray-800">{activity.student}</p>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Building2 className="h-3 w-3" />
                      {activity.company}
                      {activity.package && (
                        <>
                          <span>•</span>
                          <span className="font-semibold text-green-600">{activity.package}</span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <MapPin className="h-3 w-3" />
                      {activity.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trending Companies */}
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Trending Companies Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trending.map((company, index) => (
                <div key={company.company} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                      index === 0 ? 'bg-yellow-500' : 
                      index === 1 ? 'bg-gray-400' : 
                      index === 2 ? 'bg-amber-600' : 'bg-gray-300'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{company.company}</p>
                      <p className="text-sm text-gray-600">{company.applications} applications</p>
                    </div>
                  </div>
                  <Badge className={`${
                    company.trend.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {company.trend}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}