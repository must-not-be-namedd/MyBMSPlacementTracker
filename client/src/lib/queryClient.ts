import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    let errorMessage;
    
    try {
      // Try to parse response as JSON first
      const errorData = await res.json();
      errorMessage = errorData.message || JSON.stringify(errorData);
    } catch (e) {
      // If not JSON, get as text
      try {
        errorMessage = await res.text() || res.statusText;
      } catch {
        // If we can't even get text, use status code
        errorMessage = `Request failed with status code ${res.status}`;
      }
    }
    
    // Create a more descriptive error based on status code
    if (res.status === 401) {
      throw new Error(errorMessage || "Authentication required. Please log in.");
    } else if (res.status === 403) {
      throw new Error(errorMessage || "You don't have permission to access this resource.");
    } else if (res.status === 404) {
      throw new Error(errorMessage || "The requested resource was not found.");
    } else if (res.status >= 500) {
      throw new Error(errorMessage || "Server error. Please try again later.");
    } else {
      throw new Error(errorMessage || `Error: ${res.status} ${res.statusText}`);
    }
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  try {
    // Create request options with the appropriate headers
    const options: RequestInit = {
      method,
      headers: data ? { "Content-Type": "application/json" } : {},
      body: data ? JSON.stringify(data) : undefined,
      credentials: "include", // Always include credentials for session cookies
    };
    
    // Make the fetch request
    const res = await fetch(url, options);
    
    // Check if response is OK
    await throwIfResNotOk(res);
    return res;
  } catch (error) {
    // Log error to console for debugging but rethrow to be handled by the caller
    console.error(`API Request Error (${method} ${url}):`, error);
    throw error; 
  }
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    try {
      const url = queryKey[0] as string;
      
      const res = await fetch(url, {
        method: 'GET',
        credentials: "include",
        headers: {
          'Accept': 'application/json',
        },
      });

      // Handle 401 based on configuration
      if (unauthorizedBehavior === "returnNull" && res.status === 401) {
        console.log(`Auth required for ${url}, returning null as configured`);
        return null;
      }

      await throwIfResNotOk(res);
      
      // Parse response as JSON
      return await res.json();
    } catch (error) {
      // Log the error to console
      console.error(`Query Error (${queryKey[0]}):`, error);
      throw error;
    }
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
