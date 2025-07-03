import { useAuth } from "@/hooks/use-auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema, departmentsList } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Redirect } from "wouter";
import { z } from "zod";
import { GraduationCap, Users, TrendingUp, Award } from "lucide-react";

export default function AuthPage() {
  const { user, loginMutation, registerMutation } = useAuth();
  
  const loginForm = useForm({
    defaultValues: { username: "", password: "" },
    mode: "onChange"
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
    mode: "onChange"
  });

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Left Side - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome</h1>
            <p className="text-gray-600">Sign in to your BMSCE Placement Portal account</p>
          </div>

          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Sign In</TabsTrigger>
                  <TabsTrigger value="register">Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <Form {...loginForm}>
                    <form onSubmit={loginForm.handleSubmit(data => loginMutation.mutate(data))} className="space-y-4">
                      {loginMutation.error && (
                        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                          {loginMutation.error.message || "Login failed. Please check your credentials."}
                        </div>
                      )}
                      <FormField
                        control={loginForm.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                autoComplete="username"
                                placeholder="Enter your email"
                                className="h-11 bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                                required
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
                            <FormLabel className="text-gray-700">Password</FormLabel>
                            <FormControl>
                              <Input 
                                type="password" 
                                {...field} 
                                autoComplete="current-password"
                                placeholder="Enter your password"
                                className="h-11 bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                                required
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full h-11 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium rounded-lg" 
                        disabled={loginMutation.isPending}
                      >
                        {loginMutation.isPending ? "Signing in..." : "Sign In"}
                      </Button>
                    </form>
                  </Form>
                </TabsContent>

                <TabsContent value="register">
                  <Form {...registerForm}>
                    <form onSubmit={registerForm.handleSubmit(data => registerMutation.mutate(data))} className="space-y-4">
                      {registerMutation.error && (
                        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                          {registerMutation.error.message || "Registration failed. Please try again."}
                        </div>
                      )}
                      <FormField
                        control={registerForm.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                autoComplete="username"
                                placeholder="Enter your email"
                                className="h-11 bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                                required
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
                            <FormLabel className="text-gray-700">Password</FormLabel>
                            <FormControl>
                              <Input 
                                type="password" 
                                {...field} 
                                autoComplete="new-password"
                                placeholder="Create a password (min 6 characters)"
                                className="h-11 bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500"
                                required
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
                            <FormLabel className="text-gray-700">Department</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-11 bg-white border-gray-200 focus:border-teal-500 focus:ring-teal-500">
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
                        className="w-full h-11 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium rounded-lg" 
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
        </div>
      </div>

      {/* Right Side - Branding and Features */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-teal-600 to-emerald-600 items-center justify-center p-8">
        <div className="max-w-lg text-white">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">BMSCE Placement Portal</h1>
            <p className="text-xl text-teal-100 leading-relaxed">
              Your gateway to career opportunities at BMS College of Engineering, Bangalore
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Track Placement Statistics</h3>
                <p className="text-teal-100">Monitor department-wise placement rates, salary packages, and hiring trends in real-time.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Connect with Alumni</h3>
                <p className="text-teal-100">Network with successful alumni working at top companies and get career guidance.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Interview Preparation</h3>
                <p className="text-teal-100">Access mock interviews, coding practice, and comprehensive placement resources.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <div className="text-center">
              <p className="text-2xl font-bold mb-2">95%</p>
              <p className="text-teal-100">Average Placement Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}