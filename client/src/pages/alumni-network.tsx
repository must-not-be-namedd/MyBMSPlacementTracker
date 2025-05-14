import { Sidebar } from "@/components/navigation/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Building, MapPin, BookOpen, User, Award } from "lucide-react";

// Alumni data with success stories
const alumni = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "/alumni/priya.jpg",
    batch: "2018",
    department: "Computer Science",
    company: "Google",
    position: "Senior Software Engineer",
    location: "Bangalore",
    story: "Started as an intern at a small startup and worked my way up to Google. The key was constantly upskilling and focusing on system design fundamentals. BMS College prepared me with a solid foundation in data structures and algorithms.",
    tips: [
      "Focus on data structures and algorithms",
      "Build projects that solve real problems",
      "Network with alumni and industry professionals",
      "Prepare for system design interviews",
    ],
    achievements: ["Google's Peer Bonus Award 2022", "Published research paper on distributed systems"],
  },
  {
    id: 2,
    name: "Akash Patel",
    image: "/alumni/akash.jpg",
    batch: "2019",
    department: "Information Science",
    company: "Amazon",
    position: "SDE-2",
    location: "Hyderabad",
    story: "Got placed during campus placements in a mid-tier company, then switched to Amazon after 1.5 years. Campus placements were competitive, but I focused on having strong fundamentals and communication skills.",
    tips: [
      "Be thorough with core CS subjects",
      "Practice coding on platforms like LeetCode",
      "Work on communication skills",
      "Document your projects well on GitHub",
    ],
    achievements: ["Youngest SDE-2 in team", "Led development of key service components"],
  },
  {
    id: 3,
    name: "Rohit Nair",
    image: "/alumni/rohit.jpg",
    batch: "2020",
    department: "Electronics and Electrical",
    company: "Microsoft",
    position: "Software Engineer",
    location: "Bangalore",
    story: "As an Electronics student, I had to put in extra effort to pivot to software. I did several online courses and built projects to demonstrate my skills. The mock interviews organized by the placement cell were extremely helpful.",
    tips: [
      "Don't be limited by your branch",
      "Focus on practical skills over theoretical knowledge",
      "Prepare for behavioral interviews",
      "Explore internship opportunities early",
    ],
    achievements: ["Hackathon winner at Microsoft", "Open source contributor"],
  },
  {
    id: 4,
    name: "Ananya Desai",
    image: "/alumni/ananya.jpg",
    batch: "2017",
    department: "Computer Science",
    company: "Adobe",
    position: "Lead Developer",
    location: "Noida",
    story: "I was an average student but excelled in project work. I built a portfolio of projects that demonstrated my skills. The placement committee at BMS helped me prepare for interviews and improve my resume.",
    tips: [
      "Quality of projects matters more than quantity",
      "Understand the companies you're applying to",
      "Practice mock interviews extensively",
      "Have a standout resume with quantifiable achievements",
    ],
    achievements: ["Led team that launched major product feature", "Mentored 15+ junior developers"],
  },
  {
    id: 5,
    name: "Karthik Reddy",
    image: "/alumni/karthik.jpg",
    batch: "2021",
    department: "Mechanical",
    company: "Infosys",
    position: "Digital Specialist Engineer",
    location: "Bangalore",
    story: "Coming from Mechanical Engineering, I had to learn programming from scratch. I used the college's resources and online platforms to build my skills. Perseverance and consistent practice were key to my success.",
    tips: [
      "Utilize training period effectively",
      "Learn fundamentals of programming regardless of your branch",
      "Be adaptable to different technologies",
      "Stay positive during the placement season",
    ],
    achievements: ["Fastest promotion in department", "Developed automation tool used company-wide"],
  },
];

// Common interview questions for various companies
const interviewQuestions = {
  technical: [
    "Explain the difference between process and thread.",
    "How does a hash table work? Explain collision resolution strategies.",
    "What is time complexity? Analyze the time complexity of common sorting algorithms.",
    "Explain OOPS concepts with examples.",
    "What is recursion? Write a recursive function to find factorial.",
    "How do you reverse a linked list?",
    "Explain database normalization and its forms.",
    "What is the difference between stack and queue?",
    "How does HTTP work? What are the different HTTP methods?",
    "Explain REST API principles.",
  ],
  hr: [
    "Tell me about yourself.",
    "Why do you want to work at our company?",
    "Describe a challenging project you worked on.",
    "How do you handle deadlines and pressure?",
    "What are your strengths and weaknesses?",
    "Where do you see yourself in 5 years?",
    "Describe a situation where you had to work in a team.",
    "How do you stay updated with the latest technologies?",
    "What do you know about our company?",
    "Do you have any questions for us?",
  ],
  companies: {
    google: [
      "Design a system like Google Maps.",
      "Implement an LRU Cache.",
      "Write an algorithm to find the kth largest element in an array.",
      "How would you design Google Search?",
      "Explain the working of PageRank algorithm.",
    ],
    microsoft: [
      "Write code to check if a binary tree is balanced.",
      "Design a URL shortening service.",
      "Implement a function to check if a string is a palindrome.",
      "How would you design Xbox Live's matchmaking service?",
      "Explain virtual memory concepts.",
    ],
    amazon: [
      "Design Amazon's product recommendation system.",
      "Write an algorithm to find if two rectangles overlap.",
      "How would you handle a database that needs to scale to millions of users?",
      "Implement a service to track Amazon delivery packages in real-time.",
      "Explain how you would ensure high availability in a distributed system.",
    ],
    infosys: [
      "What are the different types of software development methodologies?",
      "Explain the SDLC phases.",
      "What is normalization in databases?",
      "Write a program to find the second highest salary from a table.",
      "How would you optimize a slow-running SQL query?",
    ],
  },
};

export default function AlumniNetwork() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Alumni Network & Mentorship</h1>
            <p className="text-muted-foreground">
              Learn from the success stories of BMS College alumni and get valuable placement tips
            </p>
          </div>

          <Tabs defaultValue="alumni" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="alumni">Alumni Success Stories</TabsTrigger>
              <TabsTrigger value="interview">Interview Preparation</TabsTrigger>
              <TabsTrigger value="resources">Educational Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="alumni" className="space-y-6 mt-6">
              {alumni.map((alum) => (
                <Card key={alum.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12 border">
                          <AvatarFallback>{alum.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-xl">{alum.name}</CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-1">
                            <Building className="h-3.5 w-3.5" />
                            <span>
                              {alum.position} at <span className="font-medium">{alum.company}</span>
                            </span>
                            <span className="text-gray-300">•</span>
                            <MapPin className="h-3.5 w-3.5" />
                            {alum.location}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-300">
                          {alum.department}
                        </Badge>
                        <Badge variant="outline" className="bg-purple-50 text-purple-800 border-purple-300">
                          {alum.batch} Batch
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium flex items-center gap-1 mb-1">
                          <User className="h-4 w-4" /> Success Story
                        </h4>
                        <p className="text-gray-700 text-sm">{alum.story}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium flex items-center gap-1 mb-2">
                          <BookOpen className="h-4 w-4" /> Placement Tips
                        </h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {alum.tips.map((tip, i) => (
                            <li key={i} className="text-gray-700 text-sm flex items-start gap-1">
                              <span className="text-blue-500 mt-1">•</span> {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 border-t bg-gray-50 px-6">
                    <div className="w-full">
                      <h4 className="text-sm font-medium flex items-center gap-1 mb-2">
                        <Award className="h-4 w-4" /> Key Achievements
                      </h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {alum.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-700 text-sm flex items-start gap-1">
                            <span className="text-green-500 mt-1">•</span> {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="interview" className="space-y-6 mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Interview Questions</CardTitle>
                    <CardDescription>Common technical questions asked in placement interviews</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {interviewQuestions.technical.map((question, i) => (
                        <AccordionItem key={i} value={`technical-${i}`}>
                          <AccordionTrigger className="text-left">{question}</AccordionTrigger>
                          <AccordionContent>
                            <div className="p-4 bg-blue-50 rounded-md text-blue-800 text-sm">
                              <p>Practice answering this question thoroughly. Consider all edge cases and be prepared to discuss different approaches.</p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>HR Interview Questions</CardTitle>
                    <CardDescription>Common HR and behavioral questions asked in interviews</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {interviewQuestions.hr.map((question, i) => (
                        <AccordionItem key={i} value={`hr-${i}`}>
                          <AccordionTrigger className="text-left">{question}</AccordionTrigger>
                          <AccordionContent>
                            <div className="p-4 bg-green-50 rounded-md text-green-800 text-sm">
                              <p>Prepare a structured response that highlights your strengths and experiences. Practice your delivery to sound confident but not rehearsed.</p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Company-Specific Questions</CardTitle>
                  <CardDescription>Questions frequently asked by specific companies</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="google">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="google">Google</TabsTrigger>
                      <TabsTrigger value="microsoft">Microsoft</TabsTrigger>
                      <TabsTrigger value="amazon">Amazon</TabsTrigger>
                      <TabsTrigger value="infosys">Infosys</TabsTrigger>
                    </TabsList>
                    {Object.entries(interviewQuestions.companies).map(([company, questions]) => (
                      <TabsContent key={company} value={company} className="mt-4">
                        <Accordion type="single" collapsible className="w-full">
                          {questions.map((question, i) => (
                            <AccordionItem key={i} value={`${company}-${i}`}>
                              <AccordionTrigger className="text-left">{question}</AccordionTrigger>
                              <AccordionContent>
                                <div className="p-4 bg-purple-50 rounded-md text-purple-800 text-sm">
                                  <p>This is a common question for {company.charAt(0).toUpperCase() + company.slice(1)}. Research the company's products and technologies to provide a comprehensive answer.</p>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="space-y-6 mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                {/* Technical Skills Resources */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Technical Skills
                    </CardTitle>
                    <CardDescription>Enhance your programming and technical knowledge</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">FreeCodeCamp</a>
                        <p className="text-sm text-gray-600">Full stack development courses with certifications</p>
                      </li>
                      <li>
                        <a href="https://www.coursera.org/specializations/data-science-python" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Data Science with Python</a>
                        <p className="text-sm text-gray-600">Comprehensive data science specialization on Coursera</p>
                      </li>
                      <li>
                        <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">LeetCode</a>
                        <p className="text-sm text-gray-600">Practice coding problems and algorithms</p>
                      </li>
                      <li>
                        <a href="https://www.edx.org/learn/computer-science" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">CS50 by Harvard</a>
                        <p className="text-sm text-gray-600">Introduction to computer science and programming</p>
                      </li>
                      <li>
                        <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Web Development Bootcamp</a>
                        <p className="text-sm text-gray-600">Comprehensive web development course</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Interview Preparation */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Interview Preparation
                    </CardTitle>
                    <CardDescription>Resources to ace your technical interviews</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="https://www.geeksforgeeks.org/company-interview-corner/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">GeeksforGeeks Company Interviews</a>
                        <p className="text-sm text-gray-600">Company-specific interview questions and experiences</p>
                      </li>
                      <li>
                        <a href="https://www.interviewbit.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">InterviewBit</a>
                        <p className="text-sm text-gray-600">Structured interview preparation platform</p>
                      </li>
                      <li>
                        <a href="https://www.pramp.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Pramp</a>
                        <p className="text-sm text-gray-600">Practice mock interviews with peers</p>
                      </li>
                      <li>
                        <a href="https://www.hackerrank.com/interview/interview-preparation-kit" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">HackerRank Interview Prep Kit</a>
                        <p className="text-sm text-gray-600">Comprehensive interview preparation resources</p>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/c/SystemDesignInterview" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">System Design Interview YouTube</a>
                        <p className="text-sm text-gray-600">Learn system design concepts through videos</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Soft Skills and Career Development */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Soft Skills & Career
                    </CardTitle>
                    <CardDescription>Develop communication and professional skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="https://www.linkedin.com/learning/paths/master-in-demand-professional-soft-skills" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">LinkedIn Learning</a>
                        <p className="text-sm text-gray-600">In-demand professional soft skills courses</p>
                      </li>
                      <li>
                        <a href="https://www.coursera.org/learn/career-success" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Career Success Specialization</a>
                        <p className="text-sm text-gray-600">Project management and communication skills</p>
                      </li>
                      <li>
                        <a href="https://www.toastmasters.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Toastmasters International</a>
                        <p className="text-sm text-gray-600">Improve public speaking and leadership skills</p>
                      </li>
                      <li>
                        <a href="https://www.hubspot.com/resources/courses/business-writing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Business Writing Course</a>
                        <p className="text-sm text-gray-600">Effective business communication skills</p>
                      </li>
                      <li>
                        <a href="https://www.mindtools.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">MindTools</a>
                        <p className="text-sm text-gray-600">Career skills, leadership and management training</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Industry Specific Resources */}
              <Card>
                <CardHeader>
                  <CardTitle>Industry-Specific Learning Paths</CardTitle>
                  <CardDescription>Specialized resources based on your career interests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Software Development</h3>
                      <ul className="space-y-2">
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://github.com/kamranahmedse/developer-roadmap" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Web Developer Roadmap</a>
                            <p className="text-sm text-gray-600">Step-by-step guide to becoming a developer</p>
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://fullstackopen.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Full Stack Open</a>
                            <p className="text-sm text-gray-600">Modern web development with JavaScript</p>
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://roadmap.sh/backend" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Backend Development</a>
                            <p className="text-sm text-gray-600">Complete roadmap for backend developers</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-3">Data Science & AI</h3>
                      <ul className="space-y-2">
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://www.kaggle.com/learn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Kaggle Courses</a>
                            <p className="text-sm text-gray-600">Free courses on machine learning and data science</p>
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://www.fast.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Fast.ai</a>
                            <p className="text-sm text-gray-600">Practical deep learning for coders</p>
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://www.tensorflow.org/resources/learn-ml" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">TensorFlow Learning Resources</a>
                            <p className="text-sm text-gray-600">Official ML and AI learning resources</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Cybersecurity</h3>
                      <ul className="space-y-2">
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://tryhackme.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">TryHackMe</a>
                            <p className="text-sm text-gray-600">Learn cybersecurity through hands-on exercises</p>
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://www.cybrary.it/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Cybrary</a>
                            <p className="text-sm text-gray-600">Free cybersecurity training and career development</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-3">Cloud Computing</h3>
                      <ul className="space-y-2">
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://aws.amazon.com/training/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">AWS Training</a>
                            <p className="text-sm text-gray-600">Amazon Web Services learning resources</p>
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://cloud.google.com/training" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Google Cloud Training</a>
                            <p className="text-sm text-gray-600">Google Cloud Platform learning resources</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* BMSCE-Specific Resources */}
              <Card>
                <CardHeader>
                  <CardTitle>BMSCE Placement Cell Resources</CardTitle>
                  <CardDescription>Exclusive resources for BMSCE students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-4 rounded-md mb-6">
                    <p className="text-blue-800 text-sm">
                      The following resources are provided by the BMSCE Placement Cell to help students prepare for their placement journey.
                      Login with your college credentials to access these resources.
                    </p>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Previous Year Question Papers
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">Access previous years' technical and aptitude questions from top companies that visited BMSCE.</p>
                      <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Access Resource</a>
                    </div>
                    
                    <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        Resume Templates
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">Specially curated resume templates approved by the placement cell for different roles and industries.</p>
                      <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Access Resource</a>
                    </div>
                    
                    <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Recorded Mock Interviews
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">Watch recorded mock interviews of senior students with feedback from recruiters and faculty.</p>
                      <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Access Resource</a>
                    </div>
                    
                    <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Placement Calendar
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">Upcoming placement drives, pre-placement talks, and company-specific preparation workshops.</p>
                      <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Access Resource</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}