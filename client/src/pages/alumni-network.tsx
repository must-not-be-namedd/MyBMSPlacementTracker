import { Sidebar } from "@/components/navigation/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Alumni, FAQ } from "@shared/schema";
import { Building, MapPin, Mail, Linkedin, ExternalLink, User, Loader2, MessageCircleQuestion } from "lucide-react";

export default function AlumniNetwork() {
  const { data: alumni, isLoading: alumniLoading } = useQuery<Alumni[]>({
    queryKey: ["/api/alumni"],
  });

  const { data: faqs, isLoading: faqsLoading } = useQuery<FAQ[]>({
    queryKey: ["/api/faqs"],
  });

  const interviewFAQs = faqs?.filter(faq => faq.category === "Interview Preparation") || [];
  const placementFAQs = faqs?.filter(faq => faq.category === "Placement Statistics") || [];
  const generalFAQs = faqs?.filter(faq => !["Interview Preparation", "Placement Statistics"].includes(faq.category)) || [];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
      <Sidebar />
      <div className="flex-1 p-8 lg:pl-8 pl-20">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Alumni Network & Mentorship
            </h1>
            <p className="text-lg text-muted-foreground mt-2">
              Connect with successful alumni and get guidance for your career journey
            </p>
          </div>

          <Tabs defaultValue="alumni" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="alumni">Alumni Directory</TabsTrigger>
              <TabsTrigger value="faqs">Placement FAQs</TabsTrigger>
            </TabsList>

            <TabsContent value="alumni" className="space-y-6 mt-6">
              {alumniLoading ? (
                <div className="flex items-center justify-center h-64">
                  <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {alumni?.map((alum) => (
                    <Card key={alum.id} className="shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-16 w-16 border-2 border-purple-200">
                            <AvatarFallback className="bg-gradient-to-br from-purple-400 to-blue-400 text-white font-bold text-lg">
                              {alum.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <CardTitle className="text-xl text-gray-800">{alum.name}</CardTitle>
                            <CardDescription className="text-gray-600">
                              {alum.position}
                            </CardDescription>
                            <div className="flex items-center gap-1 mt-1 text-purple-600 font-medium">
                              <Building className="h-3.5 w-3.5" />
                              <span className="text-sm">{alum.currentCompany}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                            {alum.department}
                          </Badge>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                            Class of {alum.graduationYear}
                          </Badge>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-purple-600" />
                              <span className="text-sm font-medium text-gray-700">Email</span>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-8 px-3 text-purple-600 hover:bg-purple-100"
                              onClick={() => window.open(`mailto:${alum.email}`, '_blank')}
                            >
                              <Mail className="h-3 w-3 mr-1" />
                              Contact
                            </Button>
                          </div>

                          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg">
                            <div className="flex items-center gap-2">
                              <Linkedin className="h-4 w-4 text-blue-600" />
                              <span className="text-sm font-medium text-gray-700">LinkedIn</span>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-8 px-3 text-blue-600 hover:bg-blue-100"
                              onClick={() => window.open(alum.linkedin, '_blank')}
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Connect
                            </Button>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-gray-100">
                          <p className="text-xs text-gray-500 text-center">
                            Available for mentorship and career guidance
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {alumni && alumni.length === 0 && (
                <div className="text-center py-12">
                  <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">No Alumni Found</h3>
                  <p className="text-gray-500">Check back later for alumni profiles and contact information.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="faqs" className="space-y-6 mt-6">
              {faqsLoading ? (
                <div className="flex items-center justify-center h-64">
                  <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Placement Statistics FAQs */}
                  {placementFAQs.length > 0 && (
                    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                          <MessageCircleQuestion className="h-5 w-5 text-purple-600" />
                          Placement Statistics
                        </CardTitle>
                        <CardDescription>
                          Common questions about placement rates and statistics
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          {placementFAQs.map((faq) => (
                            <AccordionItem key={faq.id} value={`placement-${faq.id}`}>
                              <AccordionTrigger className="text-left text-gray-700 hover:text-purple-600">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </CardContent>
                    </Card>
                  )}

                  {/* Interview Preparation FAQs */}
                  {interviewFAQs.length > 0 && (
                    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                          <MessageCircleQuestion className="h-5 w-5 text-blue-600" />
                          Interview Preparation
                        </CardTitle>
                        <CardDescription>
                          Tips and guidance for interview preparation
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          {interviewFAQs.map((faq) => (
                            <AccordionItem key={faq.id} value={`interview-${faq.id}`}>
                              <AccordionTrigger className="text-left text-gray-700 hover:text-blue-600">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg">
                                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </CardContent>
                    </Card>
                  )}

                  {/* General FAQs */}
                  {generalFAQs.length > 0 && (
                    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                          <MessageCircleQuestion className="h-5 w-5 text-green-600" />
                          General Information
                        </CardTitle>
                        <CardDescription>
                          General placement and career guidance
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          {generalFAQs.map((faq) => (
                            <AccordionItem key={faq.id} value={`general-${faq.id}`}>
                              <AccordionTrigger className="text-left text-gray-700 hover:text-green-600">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </CardContent>
                    </Card>
                  )}

                  {faqs && faqs.length === 0 && (
                    <div className="text-center py-12">
                      <MessageCircleQuestion className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-600 mb-2">No FAQs Available</h3>
                      <p className="text-gray-500">Check back later for frequently asked questions and answers.</p>
                    </div>
                  )}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}