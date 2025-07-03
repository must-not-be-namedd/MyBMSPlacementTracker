import { Sidebar } from "@/components/navigation/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { Resource } from "@shared/schema";
import { ExternalLink, Code, BookOpen, Users, Trophy, Loader2, Star } from "lucide-react";

export default function Resources() {
  const { data: resources, isLoading } = useQuery<Resource[]>({
    queryKey: ["/api/resources"],
  });

  const codingPractice = resources?.filter(r => r.category === "Coding Practice") || [];
  const learningPlatforms = resources?.filter(r => r.category === "Learning Platform") || [];
  const interviewPrep = resources?.filter(r => r.category === "Interview Preparation") || [];
  const competitiveProgramming = resources?.filter(r => r.category === "Competitive Programming") || [];
  const systemDesign = resources?.filter(r => r.category === "System Design") || [];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
      case "beginner to advanced":
        return "bg-green-100 text-green-800 border-green-200";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "advanced":
      case "beginner to expert":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  };

  const ResourceCard = ({ resource }: { resource: Resource }) => (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg text-gray-800 mb-2">{resource.title}</CardTitle>
            <CardDescription className="text-gray-600 leading-relaxed">
              {resource.description}
            </CardDescription>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge className={getDifficultyColor(resource.difficulty)}>
            {resource.difficulty}
          </Badge>
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            {resource.category}
          </Badge>
        </div>

        <Button 
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
          onClick={() => window.open(resource.url, '_blank')}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Visit Platform
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
      <Sidebar />
      <div className="flex-1 p-8 lg:pl-8 pl-20">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Placement Resources
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Essential platforms and resources to help you crack top IT companies
            </p>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
            </div>
          ) : (
            <Tabs defaultValue="coding" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="coding">Coding Practice</TabsTrigger>
                <TabsTrigger value="learning">Learning</TabsTrigger>
                <TabsTrigger value="interview">Interview Prep</TabsTrigger>
                <TabsTrigger value="competitive">Competitive</TabsTrigger>
                <TabsTrigger value="system">System Design</TabsTrigger>
              </TabsList>

              <TabsContent value="coding" className="space-y-6 mt-6">
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                      <Code className="h-5 w-5 text-purple-600" />
                      Coding Practice Platforms
                    </CardTitle>
                    <CardDescription>
                      Master data structures and algorithms with these popular coding platforms
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {codingPractice.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="learning" className="space-y-6 mt-6">
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      Learning Platforms
                    </CardTitle>
                    <CardDescription>
                      Comprehensive learning resources for computer science fundamentals
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {learningPlatforms.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="interview" className="space-y-6 mt-6">
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                      <Users className="h-5 w-5 text-green-600" />
                      Interview Preparation
                    </CardTitle>
                    <CardDescription>
                      Specialized platforms for technical interview preparation and mock interviews
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {interviewPrep.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="competitive" className="space-y-6 mt-6">
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                      <Trophy className="h-5 w-5 text-orange-600" />
                      Competitive Programming
                    </CardTitle>
                    <CardDescription>
                      Advanced algorithmic challenges and programming contests
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {competitiveProgramming.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="system" className="space-y-6 mt-6">
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                      <Code className="h-5 w-5 text-indigo-600" />
                      System Design
                    </CardTitle>
                    <CardDescription>
                      Resources for learning system design concepts and architecture patterns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {systemDesign.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}

          {/* Additional Tips Section */}
          <Card className="shadow-lg border-0 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            <CardHeader>
              <CardTitle className="text-xl">💡 Success Tips for Placement Preparation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Study Plan (6 Months)</h4>
                  <ul className="space-y-2 text-purple-100">
                    <li>• Month 1-2: Master data structures (Arrays, Linked Lists, Stacks, Queues)</li>
                    <li>• Month 3-4: Advanced structures (Trees, Graphs, Heaps)</li>
                    <li>• Month 5: Dynamic Programming and Complex Algorithms</li>
                    <li>• Month 6: System Design and Mock Interviews</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Daily Practice Routine</h4>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Solve 2-3 coding problems daily on LeetCode/GeeksforGeeks</li>
                    <li>• Read 1 technical article or concept daily</li>
                    <li>• Practice 1 system design question weekly</li>
                    <li>• Take mock interviews bi-weekly</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}