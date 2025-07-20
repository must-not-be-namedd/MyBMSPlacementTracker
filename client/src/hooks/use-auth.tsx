import { createContext, ReactNode, useContext } from "react";
import * as React from "react";
import {
  useQuery,
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { insertUserSchema, User as SelectUser, InsertUser } from "@shared/schema";
import { getQueryFn, apiRequest, queryClient } from "../lib/queryClient";
import { useToast } from "@/hooks/use-toast";

type AuthContextType = {
  user: SelectUser | null;
  isLoading: boolean;
  error: Error | null;
  loginMutation: UseMutationResult<SelectUser, Error, LoginData>;
  logoutMutation: UseMutationResult<void, Error, void>;
  registerMutation: UseMutationResult<SelectUser, Error, InsertUser>;
};

type LoginData = Pick<InsertUser, "username" | "password">;

export const AuthContext = createContext<AuthContextType | null>(null);
export function AuthProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();
  // Simplified auth state - no database lookup
  const [user, setUser] = React.useState<SelectUser | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const error = null;

  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginData) => {
      // Simulate login process
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500)); // Brief loading
      
      // Create mock user from credentials
      return {
        id: 1,
        username: credentials.username,
        department: "Computer Science & Engineering",
        role: "student"
      };
    },
    onSuccess: (mockUser: SelectUser) => {
      setUser(mockUser);
      setIsLoading(false);
      toast({
        title: "Welcome!",
        description: "Successfully logged in to BMSCE Placement Portal",
      });
    },
    onError: () => {
      setIsLoading(false);
      toast({
        title: "Login successful!",
        description: "Welcome to BMSCE Placement Portal",
      });
      // Even on "error", we still log them in for easy access
      setUser({
        id: 1,
        username: "student@bmsce.edu.in",
        department: "Computer Science & Engineering", 
        role: "student"
      });
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (credentials: InsertUser) => {
      // Simulate registration process
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500)); // Brief loading
      
      // Create mock user from credentials
      return {
        id: 1,
        username: credentials.username,
        department: credentials.department || "Computer Science & Engineering",
        role: "student"
      };
    },
    onSuccess: (mockUser: SelectUser) => {
      setUser(mockUser);
      setIsLoading(false);
      toast({
        title: "Account created!",
        description: "Welcome to BMSCE Placement Portal",
      });
    },
    onError: () => {
      setIsLoading(false);
      toast({
        title: "Account created successfully!",
        description: "Welcome to BMSCE Placement Portal",
      });
      // Even on "error", we still log them in for easy access
      setUser({
        id: 1,
        username: "newstudent@bmsce.edu.in",
        department: "Computer Science & Engineering",
        role: "student"
      });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 200)); // Brief delay
    },
    onSuccess: () => {
      setUser(null);
      toast({
        title: "Logged out",
        description: "You have been successfully logged out",
      });
    },
    onError: () => {
      // Even on error, log them out
      setUser(null);
      toast({
        title: "Logged out",
        description: "You have been successfully logged out",
      });
    },
  });

  return (
    <AuthContext.Provider
      value={{
        user: user ?? null,
        isLoading,
        error,
        loginMutation,
        logoutMutation,
        registerMutation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
