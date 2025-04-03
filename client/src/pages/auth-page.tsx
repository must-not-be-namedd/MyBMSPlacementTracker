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
      <div className="flex-1 flex items-center justify-center">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Welcome to BMSCE Placements</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login">
              <TabsList className="grid w-full grid-cols-2">
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
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={loginMutation.isPending}>
                      {loginMutation.isPending ? "Logging in..." : "Login"}
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
                              <SelectTrigger>
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
                    <Button type="submit" className="w-full" disabled={registerMutation.isPending}>
                      {registerMutation.isPending ? "Creating account..." : "Create Account"}
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      <div className="hidden lg:flex flex-1 bg-primary items-center justify-center text-primary-foreground">
        <div className="max-w-2xl mx-8 text-center">
          <h1 className="text-4xl font-bold mb-6">BMSCE Placement Portal</h1>
          <p className="text-xl mb-4">
            Your gateway to career opportunities at BMS College of Engineering
          </p>
          <ul className="text-lg space-y-2">
            <li>✓ Track department-wise placement statistics</li>
            <li>✓ Build professional resumes</li>
            <li>✓ Schedule mock interviews</li>
            <li>✓ Access placement resources</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
