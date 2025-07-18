import { QueryClientProvider } from "@tanstack/react-query";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "./hooks/use-auth";
import { ProtectedRoute } from "./lib/protected-route";

import HomePage from "@/pages/home-page";
import AuthPage from "@/pages/auth-page";
import DepartmentPage from "@/pages/department-page";
import DepartmentComparison from "@/pages/department-comparison";
import ResumeBuilder from "@/pages/resume-builder";
import MockInterview from "@/pages/mock-interview";
import AlumniNetwork from "@/pages/alumni-network";
import Resources from "@/pages/resources";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <ProtectedRoute path="/" component={HomePage} />
      <ProtectedRoute path="/departments" component={DepartmentPage} />
      <ProtectedRoute path="/department-comparison" component={DepartmentComparison} />
      <ProtectedRoute path="/resume" component={ResumeBuilder} />
      <ProtectedRoute path="/interviews" component={MockInterview} />
      <ProtectedRoute path="/alumni" component={AlumniNetwork} />
      <ProtectedRoute path="/resources" component={Resources} />
      <Route path="/auth" component={AuthPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
