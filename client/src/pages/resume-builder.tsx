import { Sidebar } from "@/components/navigation/sidebar";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Download, FileText } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useRef } from "react";
import { ResumeTemplate } from "@/components/resume/resume-template";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const resumeSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  education: z.string().min(1, "Education details are required"),
  skills: z.string().min(1, "Skills are required"),
  experience: z.string(),
  projects: z.string(),
});

type ResumeData = z.infer<typeof resumeSchema>;

export default function ResumeBuilder() {
  const { toast } = useToast();
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const [openPreview, setOpenPreview] = useState(false);
  
  const form = useForm<ResumeData>({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      education: "BMS College of Engineering, Bangalore\nB.E. in Computer Science and Engineering, 2020-2024\nCGPA: 8.5/10",
      skills: "C++, Java, Python, React, Node.js, SQL, Machine Learning, Problem Solving, Team Collaboration",
      experience: "Summer Intern at XYZ Tech Solutions, May 2023 - July 2023\n- Developed features for a web application using React and Node.js\n- Worked in an Agile environment with daily stand-ups and sprints",
      projects: "E-Commerce Platform (2023)\n- Built a full-stack e-commerce application with user authentication\n- Implemented payment gateway integration and order management\n\nMachine Learning Model for Student Performance Prediction (2022)\n- Used Python and scikit-learn to predict student performance\n- Achieved 85% accuracy on test data",
    },
  });

  const generatePDF = async () => {
    if (!resumeRef.current || !resumeData) {
      toast({
        title: "Error",
        description: "Resume data not available. Please generate preview first.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Generating PDF",
      description: "Please wait while we prepare your resume...",
    });

    try {
      // Ensure the element is visible for rendering
      const element = resumeRef.current;
      const originalDisplay = element.style.display;
      element.style.display = 'block';
      element.style.position = 'absolute';
      element.style.top = '-9999px';
      element.style.left = '-9999px';
      element.style.width = '210mm'; // A4 width
      element.style.background = 'white';

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        width: 794, // A4 width in pixels at 96 DPI
        height: 1123, // A4 height in pixels at 96 DPI
        backgroundColor: '#ffffff'
      });
      
      // Restore original styles
      element.style.display = originalDisplay;
      element.style.position = '';
      element.style.top = '';
      element.style.left = '';
      element.style.width = '';
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Add the image to fill the entire page
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
      // Generate filename
      const fileName = `${resumeData.fullName.replace(/[^a-zA-Z0-9]/g, '_')}_resume.pdf`;
      
      // Download the PDF
      pdf.save(fileName);
      
      toast({
        title: "Resume Downloaded",
        description: `Your resume has been saved as ${fileName}`,
      });
    } catch (error) {
      console.error("PDF generation error:", error);
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  const onSubmit = (data: ResumeData) => {
    setResumeData(data);
    setOpenPreview(true);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
      <Sidebar />
      <div className="flex-1 p-8 lg:pl-8 pl-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-200">Resume Builder</h1>
            <p className="text-muted-foreground">
              Create a professional resume with our templates
            </p>
          </div>

          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
            <CardContent className="pt-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 9876543210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="education"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Education</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your educational background"
                            {...field}
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="skills"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Skills</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your technical and soft skills (comma separated)"
                            {...field}
                            rows={3}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Experience</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your work experience (if any)"
                            {...field}
                            rows={5}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="projects"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Projects</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your academic or personal projects"
                            {...field}
                            rows={5}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full gap-2">
                    <FileText className="w-4 h-4" />
                    Generate Resume
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Resume Preview Dialog */}
      <Dialog open={openPreview} onOpenChange={setOpenPreview}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Resume Preview</DialogTitle>
          </DialogHeader>
          
          {resumeData && (
            <div className="mt-4">
              <div className="hidden">
                <ResumeTemplate ref={resumeRef} data={resumeData} />
              </div>
              <ResumeTemplate data={resumeData} />
              
              <div className="flex justify-center mt-8">
                <Button onClick={generatePDF} className="gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
