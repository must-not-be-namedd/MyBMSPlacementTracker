import { Sidebar } from "@/components/navigation/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageSquare,
  ArrowUp,
  BrainCircuit,
  FileCheck,
  Briefcase,
} from "lucide-react";
import { useState } from "react";

// Sample messages for AI chat (will be replaced with real API in future)
const initialMessages = [
  {
    role: "assistant",
    content: "Hello! I'm your AI placement assistant. How can I help you today?",
    timestamp: new Date(),
  },
];

export default function AIAssistant() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle sending a new message
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      role: "user",
      content: inputMessage,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate AI response (this would be replaced with an actual API call)
    setTimeout(() => {
      const aiResponses = {
        default: "I'm analyzing your question. As an AI placement assistant, I can help with interview preparation, resume feedback, and placement strategies. What specific aspect would you like guidance on?",
        interview: "For technical interviews, focus on data structures, algorithms, and system design. For HR interviews, prepare your introduction, strengths/weaknesses, and project explanations thoroughly. Would you like more specific guidance?",
        resume: "Your resume should highlight relevant projects, internships, and skills. Keep it to one page, quantify achievements, and tailor it to each job application. Would you like me to analyze your resume format?",
        company: "When researching companies, look at their culture, recent projects, tech stack, and interview process. This shows genuine interest during interviews and helps you prepare targeted questions.",
        salary: "For entry-level positions in tech at Bangalore-based companies, the average salary ranges from 6-12 LPA depending on the role and company tier. Top companies may offer 15-25 LPA for exceptional candidates.",
      };

      // Very simple keyword matching to simulate intelligence
      let responseContent = aiResponses.default;
      const lowercaseInput = inputMessage.toLowerCase();
      
      if (lowercaseInput.includes("interview") || lowercaseInput.includes("question")) {
        responseContent = aiResponses.interview;
      } else if (lowercaseInput.includes("resume") || lowercaseInput.includes("cv")) {
        responseContent = aiResponses.resume;
      } else if (lowercaseInput.includes("company") || lowercaseInput.includes("research")) {
        responseContent = aiResponses.company;
      } else if (lowercaseInput.includes("salary") || lowercaseInput.includes("package") || lowercaseInput.includes("offer")) {
        responseContent = aiResponses.salary;
      }

      const aiResponse = {
        role: "assistant",
        content: responseContent,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">AI Placement Assistant</h1>
            <p className="text-muted-foreground">
              Get personalized placement guidance, interview tips, and career advice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="pb-2">
                <BrainCircuit className="h-6 w-6 text-blue-500" />
                <CardTitle className="text-blue-800">Placement Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm">Get personalized advice on placement preparation strategies</p>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-50 border-purple-200">
              <CardHeader className="pb-2">
                <FileCheck className="h-6 w-6 text-purple-500" />
                <CardTitle className="text-purple-800">Resume Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-sm">Get feedback on your resume and improvement suggestions</p>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200">
              <CardHeader className="pb-2">
                <Briefcase className="h-6 w-6 text-green-500" />
                <CardTitle className="text-green-800">Interview Prep</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm">Practice with common interview questions and get feedback</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border shadow-md">
            <CardHeader>
              <CardTitle>Chat with AI Assistant</CardTitle>
              <CardDescription>
                Ask questions about placements, companies, interviews or career advice
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[400px] overflow-y-auto p-2">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === "assistant" ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.role === "assistant"
                          ? "bg-muted text-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg p-3 bg-muted">
                      <div className="flex space-x-2 items-center">
                        <div className="h-2 w-2 rounded-full bg-primary animate-bounce"></div>
                        <div className="h-2 w-2 rounded-full bg-primary animate-bounce delay-75"></div>
                        <div className="h-2 w-2 rounded-full bg-primary animate-bounce delay-150"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-center space-x-2">
                <Textarea
                  placeholder="Type your question here..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-1"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || !inputMessage.trim()}
                  onClick={handleSendMessage}
                >
                  <ArrowUp className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}