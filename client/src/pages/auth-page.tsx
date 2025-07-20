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
  
  // Debug logging
  console.log("Auth page - user:", user);
  console.log("Auth page - isLoading:", loginMutation.isPending || registerMutation.isPending);
  
  const loginForm = useForm({
    defaultValues: { username: "", password: "" },
    mode: "onSubmit"
  });

  const registerForm = useForm({
    defaultValues: { username: "", password: "", department: "" },
    mode: "onSubmit"
  });

  // Redirect authenticated users to dashboard
  if (user) {
    console.log("User is authenticated, redirecting to dashboard");
    return <Redirect to="/" />;
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100 dark:bg-gray-800">
      {/* Left Side - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-8 min-h-screen lg:min-h-0">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-purple-700 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Welcome</h1>
            <p className="text-gray-600 dark:text-gray-300">Sign in to your BMSCE Placement Portal account</p>
          </div>

          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
            <CardContent className="p-6">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100 dark:bg-gray-700">
                  <TabsTrigger value="login">Sign In</TabsTrigger>
                  <TabsTrigger value="register">Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <Form {...loginForm}>
                    <form onSubmit={loginForm.handleSubmit(data => {
                      console.log("Login form submitted with:", data);
                      loginMutation.mutate(data);
                    })} className="space-y-4">
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
                            <FormLabel className="text-gray-700 dark:text-gray-300">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                autoComplete="username"
                                placeholder="Enter your email"
                                className="h-11 bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600"
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
                            <FormLabel className="text-gray-700 dark:text-gray-300">Password</FormLabel>
                            <FormControl>
                              <Input 
                                type="password" 
                                {...field} 
                                autoComplete="current-password"
                                placeholder="Enter your password"
                                className="h-11 bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-gray-200"
                                required
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full h-11 bg-gradient-to-r from-slate-600 to-purple-700 hover:from-slate-700 hover:to-purple-800 text-white font-medium"
                        disabled={loginMutation.isPending}
                      >
                        {loginMutation.isPending ? "Signing In..." : "Sign In"}
                      </Button>
                    </form>
                  </Form>
                </TabsContent>

                <TabsContent value="register">
                  <Form {...registerForm}>
                    <form onSubmit={registerForm.handleSubmit(data => {
                      console.log("Register form submitted with:", data);
                      registerMutation.mutate(data);
                    })} className="space-y-4">
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
                            <FormLabel className="text-gray-700 dark:text-gray-300">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                autoComplete="username"
                                placeholder="Enter your email"
                                className="h-11 bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-gray-200"
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
                            <FormLabel className="text-gray-700 dark:text-gray-300">Password</FormLabel>
                            <FormControl>
                              <Input 
                                type="password" 
                                {...field} 
                                autoComplete="new-password"
                                placeholder="Create a password"
                                className="h-11 bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 text-gray-800 dark:text-gray-200"
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
                            <FormLabel className="text-gray-700 dark:text-gray-300">Department</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-11 bg-white border-gray-200 focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600">
                                  <SelectValue placeholder="Select your department" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {departmentsList.map((dept) => (
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
                        className="w-full h-11 bg-gradient-to-r from-slate-600 to-purple-700 hover:from-slate-700 hover:to-purple-800 text-white font-medium"
                        disabled={registerMutation.isPending}
                      >
                        {registerMutation.isPending ? "Creating Account..." : "Create Account"}
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Side - Info Panel */}
      <div className="flex lg:flex flex-1 bg-gradient-to-br from-slate-600 to-purple-700 p-4 lg:p-8 items-center justify-center min-h-screen lg:min-h-0">
        <div className="max-w-md text-white">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">BMSCE Placement Portal</h2>
              <p className="text-slate-200 leading-relaxed">
                Your gateway to exceptional career opportunities at BMS College of Engineering
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-white" />
                <div className="text-xl font-bold">89%</div>
                <div className="text-sm text-slate-200">Placement Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Award className="w-8 h-8 mx-auto mb-2 text-white" />
                <div className="text-xl font-bold">₹52L</div>
                <div className="text-sm text-slate-200">Highest Package</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-white" />
                <div className="text-xl font-bold">₹18L</div>
                <div className="text-sm text-slate-200">Average Package</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <GraduationCap className="w-8 h-8 mx-auto mb-2 text-white" />
                <div className="text-xl font-bold">56+</div>
                <div className="text-sm text-slate-200">Companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}