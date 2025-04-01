import { Sidebar } from "@/components/navigation/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Info, Download, Building, Users, Clock, MapPin } from "lucide-react";
import { useState } from "react";

// Sample placement events data
const placementEvents = [
  {
    id: 1,
    date: new Date(2025, 3, 5), // April 5, 2025
    company: "Microsoft",
    type: "Pre-Placement Talk",
    time: "2:00 PM - 3:30 PM",
    location: "Auditorium",
    eligibility: "CSE, ISE, ECE with 8.0+ CGPA",
    description: "Introduction to Microsoft's work culture and job roles",
    registrationDeadline: new Date(2025, 3, 3),
  },
  {
    id: 2,
    date: new Date(2025, 3, 7), // April 7, 2025
    company: "Microsoft",
    type: "Online Test",
    time: "10:00 AM - 12:00 PM",
    location: "Computer Labs",
    eligibility: "CSE, ISE, ECE with 8.0+ CGPA",
    description: "Coding test and aptitude assessment",
    registrationDeadline: new Date(2025, 3, 3),
  },
  {
    id: 3,
    date: new Date(2025, 3, 10), // April 10, 2025
    company: "Microsoft",
    type: "Technical Interview",
    time: "9:00 AM - 6:00 PM",
    location: "Placement Office",
    eligibility: "Students who cleared the online test",
    description: "Technical rounds focusing on algorithms, data structures and system design",
    registrationDeadline: null,
  },
  {
    id: 4,
    date: new Date(2025, 3, 12), // April 12, 2025
    company: "Microsoft",
    type: "HR Interview",
    time: "10:00 AM - 5:00 PM",
    location: "Placement Office",
    eligibility: "Students who cleared technical rounds",
    description: "Final round with HR and leadership team",
    registrationDeadline: null,
  },
  {
    id: 5,
    date: new Date(2025, 3, 15), // April 15, 2025
    company: "Amazon",
    type: "Pre-Placement Talk",
    time: "3:00 PM - 4:30 PM",
    location: "Seminar Hall",
    eligibility: "All engineering departments with 7.5+ CGPA",
    description: "Overview of Amazon's work environment and available positions",
    registrationDeadline: new Date(2025, 3, 13),
  },
  {
    id: 6,
    date: new Date(2025, 3, 18), // April 18, 2025
    company: "Amazon",
    type: "Online Test",
    time: "2:00 PM - 5:00 PM",
    location: "Online (Remote)",
    eligibility: "All engineering departments with 7.5+ CGPA",
    description: "Coding assessment and logical reasoning",
    registrationDeadline: new Date(2025, 3, 13),
  },
  {
    id: 7,
    date: new Date(2025, 3, 20), // April 20, 2025
    company: "Google",
    type: "Pre-Placement Talk",
    time: "11:00 AM - 12:30 PM",
    location: "Auditorium",
    eligibility: "CSE, ISE with 8.5+ CGPA",
    description: "Introduction to Google's engineering culture and roles",
    registrationDeadline: new Date(2025, 3, 18),
  },
  {
    id: 8,
    date: new Date(2025, 3, 22), // April 22, 2025
    company: "Infosys",
    type: "Campus Drive",
    time: "9:00 AM - 6:00 PM",
    location: "Main Campus",
    eligibility: "All departments with no active backlogs",
    description: "Full day assessment including aptitude test, technical and HR interviews",
    registrationDeadline: new Date(2025, 3, 20),
  },
  {
    id: 9,
    date: new Date(2025, 3, 24), // April 24, 2025
    company: "IBM",
    type: "Pre-Placement Talk",
    time: "10:00 AM - 11:30 AM",
    location: "Seminar Hall",
    eligibility: "All engineering departments with 7.0+ CGPA",
    description: "Overview of IBM's technology focus and career paths",
    registrationDeadline: new Date(2025, 3, 22),
  },
  {
    id: 10,
    date: new Date(2025, 3, 25), // April 25, 2025
    company: "IBM",
    type: "Online Assessment",
    time: "2:00 PM - 4:00 PM",
    location: "Computer Labs",
    eligibility: "All engineering departments with 7.0+ CGPA",
    description: "Technical and aptitude assessment",
    registrationDeadline: new Date(2025, 3, 22),
  },
  {
    id: 11,
    date: new Date(2025, 3, 28), // April 28, 2025
    company: "TCS",
    type: "Campus Drive",
    time: "9:00 AM - 5:00 PM",
    location: "Main Campus",
    eligibility: "All departments with 6.5+ CGPA",
    description: "Full recruitment process including aptitude test and interviews",
    registrationDeadline: new Date(2025, 3, 26),
  },
  {
    id: 12,
    date: new Date(2025, 3, 30), // April 30, 2025
    company: "Placement Preparation Workshop",
    type: "Workshop",
    time: "2:00 PM - 5:00 PM",
    location: "Auditorium",
    eligibility: "All pre-final and final year students",
    description: "Resume building, interview skills and technical preparation tips",
    registrationDeadline: new Date(2025, 3, 28),
  },
];

// Helper function to get events for a specific date
const getEventsForDate = (date: Date) => {
  return placementEvents.filter(
    (event) => 
      event.date.getDate() === date.getDate() && 
      event.date.getMonth() === date.getMonth() && 
      event.date.getFullYear() === date.getFullYear()
  );
};

// Function to check if a date has events
const hasEvents = (date: Date) => {
  return getEventsForDate(date).length > 0;
};

// Function to get upcoming events (next 7 days)
const getUpcomingEvents = () => {
  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);
  
  return placementEvents
    .filter(event => event.date >= today && event.date <= nextWeek)
    .sort((a, b) => a.date.getTime() - b.date.getTime());
};

// Group events by company
const groupEventsByCompany = () => {
  const grouped: Record<string, typeof placementEvents> = {};
  
  placementEvents.forEach(event => {
    if (!grouped[event.company]) {
      grouped[event.company] = [];
    }
    grouped[event.company].push(event);
  });
  
  return grouped;
};

// Custom calendar day rendering component
const CustomDay = ({ date, ...props }: any) => {
  const events = getEventsForDate(date);
  const companies = new Set(events.map(e => e.company));
  
  return (
    <HoverCard openDelay={300} closeDelay={100}>
      <HoverCardTrigger asChild>
        <div 
          {...props} 
          className={`relative h-9 w-9 p-0 font-normal aria-selected:opacity-100 ${
            events.length > 0 ? 'font-medium' : ''
          }`}
        >
          <div className="flex h-full w-full items-center justify-center rounded-md">
            {date.getDate()}
            {events.length > 0 && (
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-0.5">
                {Array.from(companies).slice(0, 3).map((company, i) => (
                  <div 
                    key={i} 
                    className="h-1 w-1 rounded-full bg-primary" 
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </HoverCardTrigger>
      {events.length > 0 && (
        <HoverCardContent className="w-80 p-0" align="start">
          <div className="p-3 bg-primary text-primary-foreground">
            <p className="font-medium">{date.toDateString()}</p>
            <p className="text-xs">{events.length} placement events</p>
          </div>
          <div className="p-2 space-y-2">
            {events.map((event) => (
              <div key={event.id} className="p-2 border rounded-md text-sm">
                <div className="flex justify-between items-start">
                  <span className="font-medium">{event.company}</span>
                  <Badge variant="outline">{event.type}</Badge>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1 mt-1">
                    <Clock className="h-3 w-3" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
};

export default function PlacementCalendar() {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [view, setView] = useState("calendar");
  
  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];
  const upcomingEvents = getUpcomingEvents();
  const eventsByCompany = groupEventsByCompany();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Placement Calendar</h1>
              <p className="text-muted-foreground">
                Never miss a placement event with our comprehensive calendar
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export Calendar
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <Card className="lg:w-1/2">
              <CardHeader>
                <CardTitle>April 2025</CardTitle>
                <CardDescription>
                  Click on any date to see detailed events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                  components={{
                    Day: CustomDay
                  }}
                  modifiers={{
                    hasEvents: hasEvents,
                  }}
                  modifiersClassNames={{
                    hasEvents: "font-medium text-primary",
                  }}
                />
              </CardContent>
            </Card>

            <div className="lg:w-1/2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {selectedDate ? selectedDate.toDateString() : "Select a Date"}
                  </CardTitle>
                  <CardDescription>
                    {selectedDateEvents.length > 0
                      ? `${selectedDateEvents.length} events scheduled`
                      : "No events scheduled for this date"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedDateEvents.length > 0 ? (
                    <div className="space-y-4">
                      {selectedDateEvents.map((event) => (
                        <div key={event.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-lg">{event.company}</h3>
                            <Badge>{event.type}</Badge>
                          </div>
                          
                          <div className="mt-2 grid gap-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Users className="h-4 w-4 text-muted-foreground" />
                              <span>{event.eligibility}</span>
                            </div>
                          </div>
                          
                          <p className="mt-3 text-sm text-muted-foreground">{event.description}</p>
                          
                          {event.registrationDeadline && (
                            <div className="mt-4 flex items-center gap-1 text-xs bg-yellow-50 text-yellow-800 py-1 px-2 rounded">
                              <Info className="h-3 w-3" />
                              <span>
                                Registration deadline: {event.registrationDeadline.toDateString()}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-center text-muted-foreground">
                      <Calendar className="h-16 w-16 mb-2 text-muted-foreground/50" />
                      <p>No events scheduled for this date</p>
                      <p className="text-sm mt-1">
                        Select a different date or check upcoming events below
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Tabs defaultValue="upcoming" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                  <TabsTrigger value="companies">By Company</TabsTrigger>
                </TabsList>
                
                <TabsContent value="upcoming">
                  <Card>
                    <CardHeader>
                      <CardTitle>Next 7 Days</CardTitle>
                      <CardDescription>
                        Upcoming events in the next week
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {upcomingEvents.length > 0 ? (
                          upcomingEvents.map((event) => (
                            <div key={event.id} className="flex justify-between items-center p-3 border rounded-lg">
                              <div>
                                <div className="font-medium">{event.company}</div>
                                <div className="text-sm text-muted-foreground">{event.type}</div>
                                <div className="text-xs flex items-center gap-1 mt-1">
                                  <Clock className="h-3 w-3" />
                                  {event.date.toDateString()}, {event.time}
                                </div>
                              </div>
                              <Badge variant="outline" className="ml-2">{event.type}</Badge>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-6 text-muted-foreground">
                            <p>No upcoming events in the next 7 days</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="companies">
                  <Card>
                    <CardHeader>
                      <CardTitle>Events by Company</CardTitle>
                      <CardDescription>
                        All scheduled events grouped by company
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {Object.entries(eventsByCompany).map(([company, events]) => (
                          <div key={company}>
                            <div className="flex items-center gap-2 mb-2">
                              <Building className="h-5 w-5" />
                              <h3 className="font-medium">{company}</h3>
                              <Badge variant="outline" className="ml-auto">
                                {events.length} events
                              </Badge>
                            </div>
                            <div className="space-y-2 pl-6">
                              {events.map((event) => (
                                <div key={event.id} className="text-sm border-l-2 border-muted pl-3 py-1">
                                  <div className="flex justify-between">
                                    <span className="font-medium">{event.type}</span>
                                    <span className="text-muted-foreground">
                                      {event.date.toDateString()}
                                    </span>
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-1">
                                    {event.time}, {event.location}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}