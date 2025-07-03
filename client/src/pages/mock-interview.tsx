import { Sidebar } from "@/components/navigation/sidebar";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Interview } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, Video, ExternalLink, Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Badge } from "@/components/ui/badge";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const interviewTypes = [
  "Technical Interview",
  "HR Interview",
  "Group Discussion",
] as const;

// Function to generate a unique Google Meet link for the interview
const generateGoogleMeetLink = () => {
  const meetCode = Math.random().toString(36).substring(2, 10);
  return `https://meet.google.com/${meetCode}`;
};

export default function MockInterview() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedType, setSelectedType] = useState<string>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const { toast } = useToast();

  const { data: interviews, isLoading } = useQuery<Interview[]>({
    queryKey: ["/api/interviews"],
  });

  const bookMutation = useMutation({
    mutationFn: async (data: { date: Date; type: string; meetLink: string }) => {
      // Convert date to ISO string to ensure it's properly serialized
      const submissionData = {
        ...data,
        date: data.date.toISOString()
      };
      const res = await apiRequest("POST", "/api/interviews", submissionData);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/interviews"] });
      toast({
        title: "Interview Booked",
        description: "Your mock interview has been scheduled successfully",
      });
      setSelectedDate(undefined);
      setSelectedType(undefined);
      setSelectedTime("");
    },
    onError: (error: Error) => {
      toast({
        title: "Booking Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleBook = () => {
    if (!selectedDate || !selectedType || !selectedTime) {
      toast({
        title: "Incomplete Details",
        description: "Please select date, time, and interview type",
        variant: "destructive",
      });
      return;
    }

    // Set the time of day on the selected date
    const [hours, minutes] = selectedTime.split(':').map(Number);
    const bookingDate = new Date(selectedDate);
    bookingDate.setHours(hours, minutes);

    // Generate a Google Meet link
    const meetLink = generateGoogleMeetLink();

    bookMutation.mutate({
      date: bookingDate,
      type: selectedType,
      meetLink
    });
  };

  // Available time slots for booking
  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Mock Interviews</h1>
            <p className="text-muted-foreground">
              Schedule mock interviews to prepare for placements
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Book an Interview</CardTitle>
                <CardDescription>
                  Select your preferred date, time, and interview type
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Date</label>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) =>
                      date < new Date() || date > new Date(2025, 12, 31)
                    }
                    className="rounded-md border"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Time</label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        className="h-9"
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Interview Type</label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select interview type" />
                    </SelectTrigger>
                    <SelectContent>
                      {interviewTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-blue-50 p-4 rounded-md text-blue-800 text-sm">
                  <p className="flex items-center gap-1">
                    <Video className="h-4 w-4" />
                    <span>A Google Meet link will be automatically generated for your interview.</span>
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={handleBook}
                  disabled={bookMutation.isPending}
                >
                  {bookMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Booking...
                    </>
                  ) : (
                    "Book Interview"
                  )}
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Interviews</CardTitle>
                <CardDescription>
                  List of your scheduled mock interviews
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex items-center justify-center h-64">
                    <Loader2 className="h-8 w-8 animate-spin" />
                  </div>
                ) : interviews && interviews.length > 0 ? (
                  <div className="space-y-4">
                    {interviews.map((interview) => {
                      const interviewDate = new Date(interview.date);
                      return (
                        <Card key={interview.id} className="border shadow-sm">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-lg">{interview.type}</CardTitle>
                                <CardDescription className="flex items-center mt-1">
                                  <CalendarIcon className="h-3.5 w-3.5 mr-1" />
                                  {format(interviewDate, "EEEE, MMMM d, yyyy")} at {format(interviewDate, "h:mm a")}
                                </CardDescription>
                              </div>
                              <Badge 
                                variant={interview.status === "pending" ? "outline" : "default"}
                                className={cn(
                                  interview.status === "pending" 
                                    ? "border-yellow-300 bg-yellow-50 text-yellow-900"
                                    : "bg-green-100 text-green-800 border-green-300"
                                )}
                              >
                                {interview.status}
                              </Badge>
                            </div>
                          </CardHeader>
                          {interview.meetLink && (
                            <CardFooter className="pt-0 pb-3">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button 
                                      variant="outline" 
                                      size="sm" 
                                      className="mt-2 w-full gap-2 border-blue-300 bg-blue-50 text-blue-800 hover:bg-blue-100"
                                      onClick={() => {
                                        if (typeof interview.meetLink === 'string') {
                                          window.open(interview.meetLink, "_blank");
                                        }
                                      }}
                                    >
                                      <Video className="h-4 w-4" />
                                      Join Google Meet
                                      <ExternalLink className="h-3 w-3 ml-auto" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Click to join your interview</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </CardFooter>
                          )}
                        </Card>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground py-16 border rounded-lg flex flex-col items-center">
                    <CalendarIcon className="h-10 w-10 mb-4 text-gray-300" />
                    <p>No interviews scheduled yet</p>
                    <p className="text-sm mt-1">Book your first mock interview to prepare for placements</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
