import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Target, 
  Award,
  Lightbulb,
  Star,
  ArrowRight
} from "lucide-react";

export function CareerGuidance() {
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");
  const [guidance, setGuidance] = useState<{
    recommendation: string;
    nextSteps: string[];
    learningPath: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const careerPaths = [
    {
      title: "Software Development",
      match: 95,
      description: "Full-stack development, mobile apps, web applications",
      skills: ["JavaScript", "React", "Node.js", "Python", "AWS"],
      avgSalary: "₹8-25 LPA",
      growth: "High",
      companies: ["Google", "Microsoft", "Amazon", "Flipkart"]
    },
    {
      title: "Data Science & AI",
      match: 88,
      description: "Machine learning, data analysis, AI research",
      skills: ["Python", "Machine Learning", "SQL", "Statistics", "TensorFlow"],
      avgSalary: "₹10-30 LPA",
      growth: "Very High",
      companies: ["Netflix", "Uber", "Zomato", "Paytm"]
    },
    {
      title: "DevOps Engineering",
      match: 82,
      description: "Cloud infrastructure, automation, CI/CD",
      skills: ["Docker", "Kubernetes", "AWS", "Linux", "Jenkins"],
      avgSalary: "₹12-28 LPA",
      growth: "High",
      companies: ["Amazon", "Microsoft", "Google", "Adobe"]
    },
    {
      title: "Product Management",
      match: 78,
      description: "Strategy, roadmap planning, stakeholder management",
      skills: ["Analytics", "Strategy", "Leadership", "Communication"],
      avgSalary: "₹15-35 LPA",
      growth: "Very High",
      companies: ["Swiggy", "Zomato", "Flipkart", "Paytm"]
    }
  ];

  const skillAssessment = [
    { category: "Technical Skills", score: 85, color: "bg-blue-500" },
    { category: "Problem Solving", score: 92, color: "bg-green-500" },
    { category: "Communication", score: 78, color: "bg-purple-500" },
    { category: "Leadership", score: 65, color: "bg-orange-500" },
    { category: "Creativity", score: 88, color: "bg-pink-500" }
  ];

  const generateGuidance = async () => {
    setLoading(true);
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setGuidance({
      recommendation: "Based on your profile, Software Development and Data Science are your strongest matches.",
      nextSteps: [
        "Build 2-3 portfolio projects showcasing full-stack development",
        "Learn advanced React patterns and state management",
        "Gain experience with cloud platforms (AWS/Azure)",
        "Contribute to open-source projects",
        "Practice system design and algorithm questions"
      ],
      learningPath: "Focus on JavaScript ecosystem → Learn backend frameworks → Master cloud deployment"
    });
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">AI Career Guidance</h2>
        <p className="text-gray-600">Get personalized career recommendations based on your skills and interests</p>
      </div>

      {/* Input Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-blue-500" />
              Your Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Enter your technical skills (e.g., React, Python, Machine Learning, etc.)"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="min-h-[100px]"
            />
          </CardContent>
        </Card>

        <Card className="bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-green-500" />
              Your Interests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="What type of work excites you? (e.g., building apps, analyzing data, solving problems, etc.)"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              className="min-h-[100px]"
            />
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button 
          onClick={generateGuidance} 
          disabled={loading || !skills || !interests}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
        >
          {loading ? "Analyzing..." : "Get AI Career Guidance"}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Skill Assessment */}
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-purple-500" />
            Your Skill Assessment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {skillAssessment.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">{skill.category}</span>
                  <span className="text-gray-600">{skill.score}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${skill.color}`}
                    style={{ width: `${skill.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Career Path Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {careerPaths.map((path, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{path.title}</CardTitle>
                <Badge className="bg-green-100 text-green-800">
                  {path.match}% Match
                </Badge>
              </div>
              <p className="text-gray-600 text-sm">{path.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Required Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {path.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Avg Salary</p>
                    <p className="font-semibold text-green-600">{path.avgSalary}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Growth</p>
                    <p className="font-semibold text-blue-600">{path.growth}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Top Companies:</p>
                  <p className="text-sm font-medium">{path.companies.join(", ")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Guidance Results */}
      {guidance && (
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              AI Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Recommendation</h4>
                <p className="text-gray-700">{guidance.recommendation}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Next Steps</h4>
                <ul className="space-y-1">
                  {guidance.nextSteps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Learning Path</h4>
                <p className="text-gray-700">{guidance.learningPath}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}