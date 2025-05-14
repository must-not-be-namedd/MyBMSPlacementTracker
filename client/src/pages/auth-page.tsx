import { useAuth } from "@/hooks/use-auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema, departmentsList } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Redirect } from "wouter";
import { z } from "zod";
import { BookOpen, BarChart2, FileText, Users, Award, Briefcase } from "lucide-react";

export default function AuthPage() {
  const { user, loginMutation, registerMutation } = useAuth();
  
  const loginForm = useForm({
    defaultValues: { username: "", password: "" },
    mode: "onChange" // Validate fields as user changes them
  });

  const registerForm = useForm({
    resolver: zodResolver(
      insertUserSchema.extend({
        password: z.string()
          .min(6, "Password must be at least 6 characters")
          .max(100, "Password is too long")
      })
    ),
    defaultValues: { username: "", password: "", department: "" },
    mode: "onChange" // Validate fields as user changes them
  });

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-700">
                BMSCE Placement Portal
              </span>
            </h1>
            <p className="text-gray-500 mt-2">Access your placement journey with a single login</p>
          </div>
        
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Welcome Back</CardTitle>
              <CardDescription>Sign in to your account to continue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <p className="text-lg font-medium text-teal-600">BMSCE College of Engineering</p>
                <p className="text-sm text-teal-500 mt-1">Excellence in Engineering Education Since 1946</p>
              </div>
              <Tabs defaultValue="login">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <Form {...loginForm}>
                    <form onSubmit={loginForm.handleSubmit(data => loginMutation.mutate(data))} className="space-y-4">
                      {loginMutation.error && (
                        <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-600 text-sm mb-4">
                          {loginMutation.error.message || "Login failed. Please check your credentials."}
                        </div>
                      )}
                      <FormField
                        control={loginForm.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                autoComplete="username"
                                placeholder="Enter your username"
                                required
                                className="h-11"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={loginForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input 
                                type="password" 
                                {...field} 
                                autoComplete="current-password"
                                placeholder="Enter your password"
                                required
                                className="h-11"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full h-11 text-base mt-2 bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800" 
                        disabled={loginMutation.isPending}
                      >
                        {loginMutation.isPending ? "Logging in..." : "Sign In"}
                      </Button>
                    </form>
                  </Form>
                </TabsContent>

                <TabsContent value="register">
                  <Form {...registerForm}>
                    <form onSubmit={registerForm.handleSubmit(data => registerMutation.mutate(data))} className="space-y-4">
                      {registerMutation.error && (
                        <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-600 text-sm mb-4">
                          {registerMutation.error.message || "Registration failed. Please try again."}
                        </div>
                      )}
                      <FormField
                        control={registerForm.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                autoComplete="username"
                                placeholder="Choose a username"
                                required
                                className="h-11"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={registerForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input 
                                type="password" 
                                {...field} 
                                autoComplete="new-password"
                                placeholder="Create a password (min 6 characters)"
                                required
                                className="h-11"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={registerForm.control}
                        name="department"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Department</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-11">
                                  <SelectValue placeholder="Select your department" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {departmentsList.map(dept => (
                                  <SelectItem key={dept} value={dept}>
                                    {dept}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full h-11 text-base mt-2 bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800" 
                        disabled={registerMutation.isPending}
                      >
                        {registerMutation.isPending ? "Creating account..." : "Create Account"}
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>© 2024 BMS College of Engineering. All rights reserved.</p>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block flex-1 bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white">
        <div className="h-full flex flex-col justify-center px-12 xl:px-24">
          <div className="mb-12">
            <h1 className="text-4xl font-bold leading-tight">
              Your Gateway to <span className="text-teal-200">Career Excellence</span>
            </h1>
            <p className="text-lg text-teal-100 mt-4 max-w-lg">
              Track statistics, build resumes, schedule interviews, and access resources 
              all in one place.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
              <BarChart2 className="h-6 w-6 text-teal-200 mb-3" />
              <h3 className="font-medium text-lg">Department Analytics</h3>
              <p className="text-teal-100 text-sm mt-1">Track real-time placement statistics across departments</p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
              <FileText className="h-6 w-6 text-teal-200 mb-3" />
              <h3 className="font-medium text-lg">Resume Builder</h3>
              <p className="text-teal-100 text-sm mt-1">Create and export professional resumes with our templates</p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
              <Users className="h-6 w-6 text-teal-200 mb-3" />
              <h3 className="font-medium text-lg">Mock Interviews</h3>
              <p className="text-teal-100 text-sm mt-1">Schedule practice interviews to sharpen your skills</p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
              <BookOpen className="h-6 w-6 text-teal-200 mb-3" />
              <h3 className="font-medium text-lg">Learning Resources</h3>
              <p className="text-teal-100 text-sm mt-1">Access expert guides and alumni insights</p>
            </div>
          </div>
          
          <div className="mt-14 border-t border-white/10 pt-10 text-center">
            <p className="text-lg font-medium text-teal-100">Transform Your Career Path</p>
            <p className="text-sm text-teal-200 mt-1">Join thousands of successful BMSCE alumni in top companies</p>
          </div>
        </div>
      </div>
    </div>
  );
}
