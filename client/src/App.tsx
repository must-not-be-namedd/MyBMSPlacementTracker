import { QueryClientProvider } from "@tanstack/react-query";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "./hooks/use-auth";
import { ProtectedRoute } from "./lib/protected-route";

import HomePage from "@/pages/home-page";
import AuthPage from "@/pages/auth-page";
import DepartmentPage from "@/pages/department-page";
import ResumeBuilder from "@/pages/resume-builder";
import MockInterview from "@/pages/mock-interview";
import AlumniNetwork from "@/pages/alumni-network";
import NotFound from "@/pages/not-found";

// Lazy-load the AI-powered pages to improve initial load performance
import { lazy, Suspense } from "react";
import { Loader2 } from "lucide-react";

const AIAssistant = lazy(() => import("@/pages/ai-assistant"));
const PlacementCalendar = lazy(() => import("@/pages/placement-calendar"));
const SalaryPredictions = lazy(() => import("@/pages/salary-predictions"));

// Loading component for lazy-loaded pages
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
);

function Router() {
  return (
    <Switch>
      <ProtectedRoute path="/" component={HomePage} />
      <ProtectedRoute path="/departments" component={DepartmentPage} />
      <ProtectedRoute path="/resume" component={ResumeBuilder} />
      <ProtectedRoute path="/interviews" component={MockInterview} />
      <ProtectedRoute path="/alumni" component={AlumniNetwork} />
      
      {/* AI-powered features (lazy loaded) */}
      <ProtectedRoute 
        path="/ai-assistant" 
        component={() => (
          <Suspense fallback={<PageLoader />}>
            <AIAssistant />
          </Suspense>
        )} 
      />
      <ProtectedRoute 
        path="/calendar" 
        component={() => (
          <Suspense fallback={<PageLoader />}>
            <PlacementCalendar />
          </Suspense>
        )} 
      />
      <ProtectedRoute 
        path="/predictions" 
        component={() => (
          <Suspense fallback={<PageLoader />}>
            <SalaryPredictions />
          </Suspense>
        )} 
      />
      
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
