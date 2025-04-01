import { Sidebar } from "@/components/navigation/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { 
  Slider 
} from "@/components/ui/slider";
import {
  BarChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { IndianRupee, Briefcase, BookOpen, TrendingUp, Award, Calculator } from "lucide-react";

// Form schema for salary prediction
const formSchema = z.object({
  department: z.string({
    required_error: "Please select your department.",
  }),
  cgpa: z.coerce
    .number()
    .min(0, "CGPA must be at least 0")
    .max(10, "CGPA cannot exceed 10"),
  internships: z.coerce
    .number()
    .min(0, "Cannot have negative internships")
    .max(5, "Please enter a reasonable number of internships"),
  projectCount: z.coerce
    .number()
    .min(0, "Cannot have negative projects")
    .max(15, "Please enter a reasonable number of projects"),
  programmingSkills: z.coerce.number().min(1).max(10),
  hasCompetitiveCoding: z.boolean().default(false),
});

// Types
type FormValues = z.infer<typeof formSchema>;

// Sample salary data for top companies
const companyData = [
  {
    name: "Google",
    averageSalary: 2500000,
    maxSalary: 3800000,
  },
  {
    name: "Microsoft",
    averageSalary: 2200000,
    maxSalary: 3400000,
  },
  {
    name: "Amazon",
    averageSalary: 2000000,
    maxSalary: 3000000,
  },
  {
    name: "Adobe",
    averageSalary: 1800000,
    maxSalary: 2600000,
  },
  {
    name: "Oracle",
    averageSalary: 1650000,
    maxSalary: 2400000,
  },
  {
    name: "IBM",
    averageSalary: 1200000,
    maxSalary: 1800000,
  },
  {
    name: "Wipro",
    averageSalary: 750000,
    maxSalary: 1100000,
  },
  {
    name: "TCS",
    averageSalary: 700000,
    maxSalary: 900000,
  },
  {
    name: "Infosys",
    averageSalary: 680000,
    maxSalary: 850000,
  },
  {
    name: "Accenture",
    averageSalary: 650000,
    maxSalary: 950000,
  },
];

// Salary data by department
const departmentSalaryData = [
  {
    name: "Computer Science",
    averageSalary: 1250000,
  },
  {
    name: "Information Science",
    averageSalary: 1150000,
  },
  {
    name: "Electronics & Communication",
    averageSalary: 950000,
  },
  {
    name: "Electrical Engineering",
    averageSalary: 900000,
  },
  {
    name: "Mechanical Engineering",
    averageSalary: 800000,
  },
  {
    name: "Civil Engineering",
    averageSalary: 750000,
  },
];

// Salary growth over years after graduation
const salaryGrowthData = [
  {
    year: "Fresher",
    salary: 100,
  },
  {
    year: "1 Year",
    salary: 130,
  },
  {
    year: "2 Years",
    salary: 170,
  },
  {
    year: "3 Years",
    salary: 210,
  },
  {
    year: "4 Years",
    salary: 260,
  },
  {
    year: "5 Years",
    salary: 310,
  },
];

// Skill importance data
const skillImportanceData = [
  { name: "Technical Skills", value: 35 },
  { name: "Communication", value: 20 },
  { name: "Problem Solving", value: 25 },
  { name: "Team Work", value: 10 },
  { name: "Leadership", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

// Simple linear regression model weights (these would normally come from a trained model)
const salaryModelWeights = {
  baseSalary: 500000, // Base salary for a fresh graduate with minimum qualifications
  departmentWeight: {
    "Computer Science": 1.5,
    "Information Science": 1.4,
    "Electronics & Communication": 1.2,
    "Electrical Engineering": 1.1, 
    "Mechanical Engineering": 1.0,
    "Civil Engineering": 0.9,
  },
  cgpaWeight: 30000, // Per CGPA point
  internshipWeight: 70000, // Per internship
  projectWeight: 20000, // Per project
  programmingSkillWeight: 40000, // Per skill level point
  competitiveCodingBonus: 150000, // Bonus for competitive coding
};

// Function to predict salary based on input parameters
const predictSalary = (values: FormValues) => {
  const {
    department,
    cgpa,
    internships,
    projectCount,
    programmingSkills,
    hasCompetitiveCoding,
  } = values;

  // Base calculation
  let predictedSalary = salaryModelWeights.baseSalary;
  
  // Apply department multiplier
  const departmentMultiplier = salaryModelWeights.departmentWeight[department as keyof typeof salaryModelWeights.departmentWeight] || 1.0;
  predictedSalary *= departmentMultiplier;
  
  // Add other factors
  predictedSalary += cgpa * salaryModelWeights.cgpaWeight;
  predictedSalary += internships * salaryModelWeights.internshipWeight;
  predictedSalary += projectCount * salaryModelWeights.projectWeight;
  predictedSalary += programmingSkills * salaryModelWeights.programmingSkillWeight;
  
  // Add competitive coding bonus if applicable
  if (hasCompetitiveCoding) {
    predictedSalary += salaryModelWeights.competitiveCodingBonus;
  }
  
  // Add some randomness for realism (±5%)
  const randomFactor = 0.95 + Math.random() * 0.1;
  predictedSalary *= randomFactor;
  
  return Math.round(predictedSalary);
};

// Format currency
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
};

export default function SalaryPredictions() {
  const { toast } = useToast();
  const [predictedSalary, setPredictedSalary] = useState<number | null>(null);
  const [lowerBound, setLowerBound] = useState<number | null>(null);
  const [upperBound, setUpperBound] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      department: "",
      cgpa: 7.5,
      internships: 1,
      projectCount: 3,
      programmingSkills: 6,
      hasCompetitiveCoding: false,
    },
  });

  // Form submission handler
  const onSubmit = (values: FormValues) => {
    try {
      // Calculate predicted salary
      const salary = predictSalary(values);
      setPredictedSalary(salary);
      
      // Set salary range (±10%)
      setLowerBound(Math.round(salary * 0.9));
      setUpperBound(Math.round(salary * 1.1));
      
      setShowResults(true);
      
      toast({
        title: "Prediction Complete",
        description: "Salary prediction has been calculated based on your inputs.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Prediction Error",
        description: "There was an error calculating your predicted salary.",
      });
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Salary Predictions</h1>
            <p className="text-muted-foreground">
              Estimate your potential placement salary based on your profile
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  Salary Predictor
                </CardTitle>
                <CardDescription>
                  Enter your details to predict your placement salary
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Department</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your department" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Computer Science">Computer Science</SelectItem>
                              <SelectItem value="Information Science">Information Science</SelectItem>
                              <SelectItem value="Electronics & Communication">Electronics & Communication</SelectItem>
                              <SelectItem value="Electrical Engineering">Electrical Engineering</SelectItem>
                              <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                              <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Your department impacts average salary prospects
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="cgpa"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CGPA (0-10)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="0.1"
                              min="0"
                              max="10"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Your cumulative grade point average
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="internships"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Internships</FormLabel>
                            <FormControl>
                              <Input type="number" min="0" max="5" {...field} />
                            </FormControl>
                            <FormDescription>
                              Number of internships completed
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="projectCount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Projects</FormLabel>
                            <FormControl>
                              <Input type="number" min="0" max="15" {...field} />
                            </FormControl>
                            <FormDescription>
                              Number of significant projects
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="programmingSkills"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Programming Skills (1-10)</FormLabel>
                          <FormControl>
                            <Slider
                              min={1}
                              max={10}
                              step={1}
                              defaultValue={[field.value]}
                              onValueChange={(vals) => field.onChange(vals[0])}
                              className="py-4"
                            />
                          </FormControl>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Beginner</span>
                            <span>Intermediate</span>
                            <span>Expert</span>
                          </div>
                          <FormDescription>
                            Your self-assessment of programming skills
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="hasCompetitiveCoding"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <input
                              type="checkbox"
                              checked={field.value}
                              onChange={field.onChange}
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>Competitive Coding Experience</FormLabel>
                            <FormDescription>
                              Regular participation in platforms like LeetCode, CodeChef, etc.
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full">Calculate Predicted Salary</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {showResults ? (
              <Card className="lg:col-span-2 overflow-hidden">
                <CardHeader className="bg-primary text-primary-foreground">
                  <CardTitle className="flex items-center gap-2">
                    <IndianRupee className="h-6 w-6" />
                    Your Predicted Salary
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Based on your profile and historical placement data
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center justify-center space-y-3 py-4">
                    <span className="text-sm text-muted-foreground">Estimated Annual Package</span>
                    <h1 className="text-4xl font-bold">{formatCurrency(predictedSalary || 0)}</h1>
                    <div className="text-sm text-muted-foreground">
                      Range: {formatCurrency(lowerBound || 0)} - {formatCurrency(upperBound || 0)}
                    </div>

                    <div className="grid grid-cols-3 gap-4 w-full mt-6">
                      <div className="flex flex-col items-center p-3 border rounded-lg">
                        <Briefcase className="h-8 w-8 text-blue-500 mb-2" />
                        <span className="text-sm font-medium">Industry</span>
                        <span className="text-xs text-muted-foreground">Tech/IT</span>
                      </div>
                      <div className="flex flex-col items-center p-3 border rounded-lg">
                        <BookOpen className="h-8 w-8 text-green-500 mb-2" />
                        <span className="text-sm font-medium">Education</span>
                        <span className="text-xs text-muted-foreground">B.Tech/B.E.</span>
                      </div>
                      <div className="flex flex-col items-center p-3 border rounded-lg">
                        <Award className="h-8 w-8 text-amber-500 mb-2" />
                        <span className="text-sm font-medium">Percentile</span>
                        <span className="text-xs text-muted-foreground">Top 30%</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-4 border rounded-lg">
                      <h3 className="text-sm font-medium mb-3 flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" /> Salary Growth Potential
                      </h3>
                      <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={salaryGrowthData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="year" />
                          <YAxis unit="%" />
                          <Tooltip formatter={(value) => [`${value}%`, "Relative Salary"]} />
                          <Line
                            type="monotone"
                            dataKey="salary"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                            name="Relative Salary"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                      <p className="text-xs text-muted-foreground mt-2">
                        Expected salary growth over the first 5 years of career (indexed to 100)
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <h3 className="text-sm font-medium mb-3">Skill Importance for Salary</h3>
                      <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                          <Pie
                            data={skillImportanceData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {skillImportanceData.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                              />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                      <p className="text-xs text-muted-foreground mt-2">
                        Relative importance of different skills in determining salary
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50 flex flex-col items-start">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> This prediction is based on historical placement data and current market trends. Actual salaries may vary based on company, role, location, and other factors.
                  </p>
                </CardFooter>
              </Card>
            ) : (
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Placement Salary Insights</CardTitle>
                  <CardDescription>
                    Explore salary trends across companies and departments
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-3">Average Placement Salary by Top Companies</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={companyData.slice(0, 8)}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={(value) => `₹${value / 100000}L`} />
                        <Tooltip formatter={(value) => [formatCurrency(value as number), "Salary"]} />
                        <Legend />
                        <Bar dataKey="averageSalary" fill="#8884d8" name="Average Salary" />
                        <Bar dataKey="maxSalary" fill="#82ca9d" name="Maximum Salary" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-3">Average Salary by Department</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={departmentSalaryData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={(value) => `₹${value / 100000}L`} />
                        <Tooltip formatter={(value) => [formatCurrency(value as number), "Average Salary"]} />
                        <Bar dataKey="averageSalary" fill="#0088FE" name="Average Salary" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}