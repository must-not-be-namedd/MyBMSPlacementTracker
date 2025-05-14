import { Sidebar } from "@/components/navigation/sidebar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, Building, MapPin, BookOpen, User, Award } from "lucide-react";

// Alumni data with success stories
const alumni = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "/alumni/priya.jpg",
    batch: "2018",
    department: "Computer Science",
    company: "Google",
    position: "Senior Software Engineer",
    location: "Bangalore",
    story: "Started as an intern at a small startup and worked my way up to Google. The key was constantly upskilling and focusing on system design fundamentals. BMS College prepared me with a solid foundation in data structures and algorithms.",
    tips: [
      "Focus on data structures and algorithms",
      "Build projects that solve real problems",
      "Network with alumni and industry professionals",
      "Prepare for system design interviews",
    ],
    achievements: ["Google's Peer Bonus Award 2022", "Published research paper on distributed systems"],
  },
  {
    id: 2,
    name: "Akash Patel",
    image: "/alumni/akash.jpg",
    batch: "2019",
    department: "Information Science",
    company: "Amazon",
    position: "SDE-2",
    location: "Hyderabad",
    story: "Got placed during campus placements in a mid-tier company, then switched to Amazon after 1.5 years. Campus placements were competitive, but I focused on having strong fundamentals and communication skills.",
    tips: [
      "Be thorough with core CS subjects",
      "Practice coding on platforms like LeetCode",
      "Work on communication skills",
      "Document your projects well on GitHub",
    ],
    achievements: ["Youngest SDE-2 in team", "Led development of key service components"],
  },
  {
    id: 3,
    name: "Rohit Nair",
    image: "/alumni/rohit.jpg",
    batch: "2020",
    department: "Electronics and Electrical",
    company: "Microsoft",
    position: "Software Engineer",
    location: "Bangalore",
    story: "As an Electronics student, I had to put in extra effort to pivot to software. I did several online courses and built projects to demonstrate my skills. The mock interviews organized by the placement cell were extremely helpful.",
    tips: [
      "Don't be limited by your branch",
      "Focus on practical skills over theoretical knowledge",
      "Prepare for behavioral interviews",
      "Explore internship opportunities early",
    ],
    achievements: ["Hackathon winner at Microsoft", "Open source contributor"],
  },
  {
    id: 4,
    name: "Ananya Desai",
    image: "/alumni/ananya.jpg",
    batch: "2017",
    department: "Computer Science",
    company: "Adobe",
    position: "Lead Developer",
    location: "Noida",
    story: "I was an average student but excelled in project work. I built a portfolio of projects that demonstrated my skills. The placement committee at BMS helped me prepare for interviews and improve my resume.",
    tips: [
      "Quality of projects matters more than quantity",
      "Understand the companies you're applying to",
      "Practice mock interviews extensively",
      "Have a standout resume with quantifiable achievements",
    ],
    achievements: ["Led team that launched major product feature", "Mentored 15+ junior developers"],
  },
  {
    id: 5,
    name: "Karthik Reddy",
    image: "/alumni/karthik.jpg",
    batch: "2021",
    department: "Mechanical",
    company: "Infosys",
    position: "Digital Specialist Engineer",
    location: "Bangalore",
    story: "Coming from Mechanical Engineering, I had to learn programming from scratch. I used the college's resources and online platforms to build my skills. Perseverance and consistent practice were key to my success.",
    tips: [
      "Utilize training period effectively",
      "Learn fundamentals of programming regardless of your branch",
      "Be adaptable to different technologies",
      "Stay positive during the placement season",
    ],
    achievements: ["Fastest promotion in department", "Developed automation tool used company-wide"],
  },
];

// Common interview questions for various companies
const interviewQuestions = {
  technical: [
    "Explain the difference between process and thread.",
    "How does a hash table work? Explain collision resolution strategies.",
    "What is time complexity? Analyze the time complexity of common sorting algorithms.",
    "Explain OOPS concepts with examples.",
    "What is recursion? Write a recursive function to find factorial.",
    "How do you reverse a linked list?",
    "Explain database normalization and its forms.",
    "What is the difference between stack and queue?",
    "How does HTTP work? What are the different HTTP methods?",
    "Explain REST API principles.",
  ],
  hr: [
    "Tell me about yourself.",
    "Why do you want to work at our company?",
    "Describe a challenging project you worked on.",
    "How do you handle deadlines and pressure?",
    "What are your strengths and weaknesses?",
    "Where do you see yourself in 5 years?",
    "Describe a situation where you had to work in a team.",
    "How do you stay updated with the latest technologies?",
    "What do you know about our company?",
    "Do you have any questions for us?",
  ],
  companies: {
    google: [
      "Design a system like Google Maps.",
      "Implement an LRU Cache.",
      "Write an algorithm to find the kth largest element in an array.",
      "How would you design Google Search?",
      "Explain the working of PageRank algorithm.",
    ],
    microsoft: [
      "Write code to check if a binary tree is balanced.",
      "Design a URL shortening service.",
      "Implement a function to check if a string is a palindrome.",
      "How would you design Xbox Live's matchmaking service?",
      "Explain virtual memory concepts.",
    ],
    amazon: [
      "Design Amazon's product recommendation system.",
      "Write an algorithm to find if two rectangles overlap.",
      "How would you handle a database that needs to scale to millions of users?",
      "Implement a service to track Amazon delivery packages in real-time.",
      "Explain how you would ensure high availability in a distributed system.",
    ],
    infosys: [
      "What are the different types of software development methodologies?",
      "Explain the SDLC phases.",
      "What is normalization in databases?",
      "Write a program to find the second highest salary from a table.",
      "How would you optimize a slow-running SQL query?",
    ],
  },
};

export default function AlumniNetwork() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Alumni Network & Mentorship</h1>
            <p className="text-muted-foreground">
              Learn from the success stories of BMS College alumni and get valuable placement tips
            </p>
          </div>

          <Tabs defaultValue="alumni" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="alumni">Alumni Success Stories</TabsTrigger>
              <TabsTrigger value="interview">Interview Preparation</TabsTrigger>
              <TabsTrigger value="resources">Educational Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="alumni" className="space-y-6 mt-6">
              {alumni.map((alum) => (
                <Card key={alum.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12 border">
                          <AvatarFallback>{alum.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-xl">{alum.name}</CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-1">
                            <Building className="h-3.5 w-3.5" />
                            <span>
                              {alum.position} at <span className="font-medium">{alum.company}</span>
                            </span>
                            <span className="text-gray-300">•</span>
                            <MapPin className="h-3.5 w-3.5" />
                            {alum.location}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-300">
                          {alum.department}
                        </Badge>
                        <Badge variant="outline" className="bg-purple-50 text-purple-800 border-purple-300">
                          {alum.batch} Batch
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium flex items-center gap-1 mb-1">
                          <User className="h-4 w-4" /> Success Story
                        </h4>
                        <p className="text-gray-700 text-sm">{alum.story}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium flex items-center gap-1 mb-2">
                          <BookOpen className="h-4 w-4" /> Placement Tips
                        </h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {alum.tips.map((tip, i) => (
                            <li key={i} className="text-gray-700 text-sm flex items-start gap-1">
                              <span className="text-blue-500 mt-1">•</span> {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 border-t bg-gray-50 px-6">
                    <div className="w-full">
                      <h4 className="text-sm font-medium flex items-center gap-1 mb-2">
                        <Award className="h-4 w-4" /> Key Achievements
                      </h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {alum.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-700 text-sm flex items-start gap-1">
                            <span className="text-green-500 mt-1">•</span> {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="interview" className="space-y-6 mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Interview Questions</CardTitle>
                    <CardDescription>Common technical questions asked in placement interviews</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {interviewQuestions.technical.map((question, i) => (
                        <AccordionItem key={i} value={`technical-${i}`}>
                          <AccordionTrigger className="text-left">{question}</AccordionTrigger>
                          <AccordionContent>
                            <div className="p-4 bg-blue-50 rounded-md text-blue-800 text-sm">
                              {i === 0 && (
                                <div>
                                  <p className="font-medium mb-2">Process vs Thread:</p>
                                  <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Definition:</strong> A process is an instance of a program in execution, while a thread is a segment of a process.</li>
                                    <li><strong>Memory:</strong> Processes have separate memory spaces, whereas threads share the same memory space of their parent process.</li>
                                    <li><strong>Communication:</strong> Inter-process communication is more complex and requires techniques like pipes or sockets, while threads can communicate directly through shared memory.</li>
                                    <li><strong>Resource allocation:</strong> Processes are allocated separate resources by the OS, while threads share resources of the process.</li>
                                    <li><strong>Context switching:</strong> Context switching between processes is more expensive than between threads.</li>
                                    <li><strong>Isolation:</strong> Processes have better isolation - a fault in one process doesn't affect others, whereas a fault in one thread can affect other threads in the same process.</li>
                                  </ul>
                                </div>
                              )}
                              {i === 1 && (
                                <div>
                                  <p className="font-medium mb-2">Hash Table and Collision Resolution:</p>
                                  <p className="mb-2">A hash table is a data structure that maps keys to values using a hash function that computes an index into an array of buckets, from which the desired value can be found.</p>
                                  <p className="font-medium mt-3 mb-1">Collision Resolution Strategies:</p>
                                  <ol className="list-decimal pl-5 space-y-1">
                                    <li><strong>Chaining:</strong> Each bucket contains a linked list of all key-value pairs that hash to the same index. New items are appended to the list.</li>
                                    <li><strong>Open Addressing:</strong> All entries are stored in the hash table itself. When a collision occurs, the entry is placed in another unfilled position based on probing sequence.</li>
                                    <li><strong>Linear Probing:</strong> Check consecutive positions until an empty slot is found.</li>
                                    <li><strong>Quadratic Probing:</strong> Check positions at quadratic distances.</li>
                                    <li><strong>Double Hashing:</strong> Use a second hash function to determine the probing interval.</li>
                                    <li><strong>Robin Hood Hashing:</strong> Minimize the variance of probe sequence lengths by moving keys from their position if a key with a larger probe sequence length is found.</li>
                                  </ol>
                                </div>
                              )}
                              {i === 2 && (
                                <div>
                                  <p className="font-medium mb-2">Time Complexity and Sorting Algorithms:</p>
                                  <p className="mb-2">Time complexity is a measure of the amount of time an algorithm takes to run as a function of the input size.</p>
                                  <p className="font-medium mt-3 mb-1">Common Sorting Algorithms:</p>
                                  <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Bubble Sort:</strong> O(n²) average and worst case, O(n) best case when already sorted</li>
                                    <li><strong>Selection Sort:</strong> O(n²) in all cases</li>
                                    <li><strong>Insertion Sort:</strong> O(n²) average and worst case, O(n) best case when already sorted</li>
                                    <li><strong>Merge Sort:</strong> O(n log n) in all cases, stable, requires O(n) extra space</li>
                                    <li><strong>Quick Sort:</strong> O(n log n) average, O(n²) worst case, usually implemented as in-place but not stable</li>
                                    <li><strong>Heap Sort:</strong> O(n log n) in all cases, in-place but not stable</li>
                                    <li><strong>Counting Sort:</strong> O(n+k) where k is the range of the non-negative key values</li>
                                    <li><strong>Radix Sort:</strong> O(nk) where k is the number of digits in the largest number</li>
                                  </ul>
                                </div>
                              )}
                              {i === 3 && (
                                <div>
                                  <p className="font-medium mb-2">Object-Oriented Programming Concepts:</p>
                                  <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                      <strong>Encapsulation:</strong> Bundling data and methods that operate on that data within a single unit (class).
                                      <br />
                                      <em>Example:</em> A <code>BankAccount</code> class encapsulates balance data and withdrawal/deposit methods.
                                    </li>
                                    <li>
                                      <strong>Inheritance:</strong> A class (subclass) can inherit attributes and behaviors from another class (superclass).
                                      <br />
                                      <em>Example:</em> <code>SavingsAccount</code> inherits from <code>BankAccount</code> and adds interest calculation.
                                    </li>
                                    <li>
                                      <strong>Polymorphism:</strong> The ability of different classes to respond to the same method in different ways.
                                      <br />
                                      <em>Example:</em> <code>SavingsAccount</code> and <code>CheckingAccount</code> might implement <code>withdraw()</code> differently.
                                    </li>
                                    <li>
                                      <strong>Abstraction:</strong> Hiding complex implementation details and showing only the necessary features of an object.
                                      <br />
                                      <em>Example:</em> Abstract <code>PaymentMethod</code> class with concrete implementations like <code>CreditCard</code> and <code>PayPal</code>.
                                    </li>
                                  </ul>
                                </div>
                              )}
                              {i === 4 && (
                                <div>
                                  <p className="font-medium mb-2">Recursion and Factorial Example:</p>
                                  <p>Recursion is a programming technique where a function calls itself to solve a problem.</p>
                                  <p className="font-medium mt-3 mb-1">Factorial Recursive Function:</p>
                                  <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`function factorial(n) {
  // Base case
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case
  return n * factorial(n - 1);
}

// Example: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120`}
                                  </pre>
                                  <p className="mt-3">Key components of recursive functions:</p>
                                  <ul className="list-disc pl-5 space-y-1 mt-1">
                                    <li><strong>Base case:</strong> Conditions where recursion ends</li>
                                    <li><strong>Recursive case:</strong> Function calling itself with modified parameters</li>
                                    <li><strong>Progress toward base case:</strong> Each recursive call must move closer to the base case</li>
                                  </ul>
                                </div>
                              )}
                              {i === 5 && (
                                <div>
                                  <p className="font-medium mb-2">Reversing a Linked List:</p>
                                  <p className="mb-2">A linked list can be reversed iteratively or recursively.</p>
                                  <p className="font-medium mt-2 mb-1">Iterative Solution:</p>
                                  <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    // Store next node
    next = current.next;
    
    // Reverse the pointer
    current.next = prev;
    
    // Move pointers one position ahead
    prev = current;
    current = next;
  }
  
  // Return new head (prev)
  return prev;
}`}
                                  </pre>
                                  <p className="font-medium mt-3 mb-1">Recursive Solution:</p>
                                  <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`function reverseLinkedList(head) {
  // Base case
  if (head === null || head.next === null) {
    return head;
  }
  
  // Recursive case: Reverse the rest of the list
  const newHead = reverseLinkedList(head.next);
  
  // Change references for the current node
  head.next.next = head;
  head.next = null;
  
  // Return new head
  return newHead;
}`}
                                  </pre>
                                  <p className="mt-3">Time Complexity: O(n) - we visit each node once</p>
                                  <p>Space Complexity: O(1) for iterative, O(n) for recursive due to call stack</p>
                                </div>
                              )}
                              {i === 6 && (
                                <div>
                                  <p className="font-medium mb-2">Database Normalization:</p>
                                  <p className="mb-2">Normalization is a process of organizing data in a database to reduce redundancy and improve data integrity.</p>
                                  <p className="font-medium mt-2 mb-1">Normal Forms:</p>
                                  <ul className="list-disc pl-5 space-y-2">
                                    <li>
                                      <strong>First Normal Form (1NF):</strong>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li>Each table cell should contain a single value</li>
                                        <li>Each record needs to be unique</li>
                                      </ul>
                                    </li>
                                    <li>
                                      <strong>Second Normal Form (2NF):</strong>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li>Meets 1NF requirements</li>
                                        <li>All non-key attributes are fully dependent on the primary key</li>
                                      </ul>
                                    </li>
                                    <li>
                                      <strong>Third Normal Form (3NF):</strong>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li>Meets 2NF requirements</li>
                                        <li>No transitive dependencies (non-key attributes depend only on the primary key)</li>
                                      </ul>
                                    </li>
                                    <li>
                                      <strong>Boyce-Codd Normal Form (BCNF):</strong>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li>Stricter version of 3NF</li>
                                        <li>For any dependency A → B, A should be a super key</li>
                                      </ul>
                                    </li>
                                    <li>
                                      <strong>Fourth Normal Form (4NF):</strong>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li>Meets BCNF requirements</li>
                                        <li>No multi-valued dependencies</li>
                                      </ul>
                                    </li>
                                    <li>
                                      <strong>Fifth Normal Form (5NF):</strong>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li>Meets 4NF requirements</li>
                                        <li>No join dependencies</li>
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              )}
                              {i === 7 && (
                                <div>
                                  <p className="font-medium mb-2">Stack vs Queue:</p>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <p className="font-medium">Stack</p>
                                      <ul className="list-disc pl-5 space-y-1">
                                        <li>LIFO (Last In, First Out) principle</li>
                                        <li>Elements are added and removed from the same end (top)</li>
                                        <li>Main operations: push (add) and pop (remove)</li>
                                        <li>Real-world analogy: Stack of plates</li>
                                        <li>Use cases: Function calls, undo operations, expression evaluation</li>
                                      </ul>
                                    </div>
                                    <div>
                                      <p className="font-medium">Queue</p>
                                      <ul className="list-disc pl-5 space-y-1">
                                        <li>FIFO (First In, First Out) principle</li>
                                        <li>Elements are added at one end (rear) and removed from the other (front)</li>
                                        <li>Main operations: enqueue (add) and dequeue (remove)</li>
                                        <li>Real-world analogy: Line of people</li>
                                        <li>Use cases: Task scheduling, breadth-first search, print job spooling</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <p className="mt-3 font-medium">Implementation Examples:</p>
                                  <div className="grid grid-cols-2 gap-4 mt-1">
                                    <div>
                                      <p className="text-sm font-medium">Stack Implementation</p>
                                      <pre className="bg-gray-100 p-2 rounded-md text-xs overflow-x-auto">
{`class Stack {
  constructor() {
    this.items = [];
  }
  
  push(element) {
    this.items.push(element);
  }
  
  pop() {
    if (this.isEmpty()) return "Underflow";
    return this.items.pop();
  }
  
  peek() {
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
}`}
                                      </pre>
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium">Queue Implementation</p>
                                      <pre className="bg-gray-100 p-2 rounded-md text-xs overflow-x-auto">
{`class Queue {
  constructor() {
    this.items = [];
  }
  
  enqueue(element) {
    this.items.push(element);
  }
  
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  
  front() {
    if (this.isEmpty()) return "No elements";
    return this.items[0];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
}`}
                                      </pre>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {i === 8 && (
                                <div>
                                  <p className="font-medium mb-2">HTTP (HyperText Transfer Protocol):</p>
                                  <p>HTTP is an application-layer protocol for transmitting hypermedia documents on the web.</p>
                                  
                                  <p className="font-medium mt-3">How HTTP Works:</p>
                                  <ol className="list-decimal pl-5 space-y-1 mb-3">
                                    <li>Client establishes a TCP connection with the server</li>
                                    <li>Client sends an HTTP request to the server</li>
                                    <li>Server processes the request and returns an HTTP response</li>
                                    <li>Connection may be closed or kept alive for future requests</li>
                                  </ol>
                                  
                                  <p className="font-medium mt-2">HTTP Methods:</p>
                                  <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>GET:</strong> Requests data from a specified resource (idempotent)</li>
                                    <li><strong>POST:</strong> Submits data to be processed to a specified resource (non-idempotent)</li>
                                    <li><strong>PUT:</strong> Updates a specified resource with new data (idempotent)</li>
                                    <li><strong>DELETE:</strong> Deletes a specified resource (idempotent)</li>
                                    <li><strong>PATCH:</strong> Applies partial modifications to a resource (non-idempotent)</li>
                                    <li><strong>HEAD:</strong> Same as GET but returns only headers, no body (idempotent)</li>
                                    <li><strong>OPTIONS:</strong> Returns supported HTTP methods for a URL (idempotent)</li>
                                    <li><strong>CONNECT:</strong> Establishes a tunnel to the server</li>
                                    <li><strong>TRACE:</strong> Performs a message loop-back test (idempotent)</li>
                                  </ul>
                                  
                                  <p className="mt-3 text-sm font-italic">Note: Idempotent methods can be called multiple times without changing the result beyond the initial call.</p>
                                </div>
                              )}
                              {i === 9 && (
                                <div>
                                  <p className="font-medium mb-2">REST API Principles:</p>
                                  <p className="mb-3">REST (Representational State Transfer) is an architectural style for designing networked applications.</p>
                                  
                                  <p className="font-medium">Key Principles:</p>
                                  <ol className="list-decimal pl-5 space-y-2">
                                    <li>
                                      <strong>Client-Server Architecture:</strong> Separation of concerns between client and server components.
                                    </li>
                                    <li>
                                      <strong>Statelessness:</strong> Each request from client to server must contain all the information needed to understand and process the request. The server cannot store client state between requests.
                                    </li>
                                    <li>
                                      <strong>Cacheability:</strong> Responses must define themselves as cacheable or non-cacheable to improve performance.
                                    </li>
                                    <li>
                                      <strong>Uniform Interface:</strong> Simplified and decoupled architecture where:
                                      <ul className="list-disc pl-5 mt-1">
                                        <li>Resources are identified in requests (e.g., using URIs)</li>
                                        <li>Resources are manipulated through representations</li>
                                        <li>Self-descriptive messages include enough information to process them</li>
                                        <li>Hypermedia as the engine of application state (HATEOAS)</li>
                                      </ul>
                                    </li>
                                    <li>
                                      <strong>Layered System:</strong> Architecture composed of hierarchical layers, each with specific functionality.
                                    </li>
                                    <li>
                                      <strong>Code on Demand (optional):</strong> Servers can temporarily extend client functionality by transferring executable code.
                                    </li>
                                  </ol>
                                  
                                  <p className="font-medium mt-3">RESTful API Design Best Practices:</p>
                                  <ul className="list-disc pl-5 space-y-1 mt-1">
                                    <li>Use nouns, not verbs, in endpoint paths</li>
                                    <li>Use HTTP methods appropriately (GET, POST, PUT, DELETE)</li>
                                    <li>Use a consistent naming convention (e.g., kebab-case or snake_case)</li>
                                    <li>Return appropriate HTTP status codes (200 OK, 201 Created, 400 Bad Request, etc.)</li>
                                    <li>Version your API</li>
                                    <li>Use pagination for large resource collections</li>
                                    <li>Provide comprehensive error messages</li>
                                    <li>Allow filtering, sorting, and searching of resources</li>
                                  </ul>
                                </div>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>HR Interview Questions</CardTitle>
                    <CardDescription>Common HR and behavioral questions asked in interviews</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {interviewQuestions.hr.map((question, i) => (
                        <AccordionItem key={i} value={`hr-${i}`}>
                          <AccordionTrigger className="text-left">{question}</AccordionTrigger>
                          <AccordionContent>
                            <div className="p-4 bg-green-50 rounded-md text-green-800 text-sm">
                              {i === 0 && (
                                <div>
                                  <p className="font-medium mb-2">Tell me about yourself:</p>
                                  <p className="mb-2">This is your opportunity to give a concise overview of your background, skills, and career goals.</p>
                                  <p className="font-medium mt-2 mb-1">Good Structure:</p>
                                  <ol className="list-decimal pl-5 space-y-1">
                                    <li><strong>Present:</strong> Begin with your current position/education and relevant skills</li>
                                    <li><strong>Past:</strong> Briefly mention previous experiences that led you here</li>
                                    <li><strong>Future:</strong> Express enthusiasm for the position and how it aligns with your goals</li>
                                  </ol>
                                  <p className="italic mt-3">Keep it under 2 minutes and relevant to the position you're applying for.</p>
                                </div>
                              )}
                              {i === 1 && (
                                <div>
                                  <p className="font-medium mb-2">Why do you want to work at our company?</p>
                                  <p>This question tests if you've done your research and if your values align with the company's mission.</p>
                                  <p className="font-medium mt-3 mb-1">Effective Response Components:</p>
                                  <ul className="list-disc pl-5 space-y-1">
                                    <li>Demonstrate knowledge of the company's products, services, or recent achievements</li>
                                    <li>Connect the company's values/mission to your own professional values</li>
                                    <li>Mention specific aspects of their work environment or culture that appeal to you</li>
                                    <li>Explain how the position aligns with your career path</li>
                                    <li>Avoid focusing solely on personal benefits (salary, location, perks)</li>
                                  </ul>
                                </div>
                              )}
                              {i === 2 && (
                                <div>
                                  <p className="font-medium mb-2">Describe a challenging project you worked on:</p>
                                  <p>This question evaluates your problem-solving abilities, teamwork, and perseverance.</p>
                                  <p className="font-medium mt-3 mb-1">Use the STAR Method:</p>
                                  <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Situation:</strong> Briefly describe the context and the challenge</li>
                                    <li><strong>Task:</strong> Explain your specific responsibilities and goals</li>
                                    <li><strong>Action:</strong> Detail the steps you took to address the challenge</li>
                                    <li><strong>Result:</strong> Share the outcomes and what you learned</li>
                                  </ul>
                                  <p className="mt-3">Focus on a project where you demonstrated leadership, technical skills, or overcame significant obstacles. Quantify results when possible.</p>
                                </div>
                              )}
                              {i === 3 && (
                                <div>
                                  <p className="font-medium mb-2">How do you handle deadlines and pressure?</p>
                                  <p>This question assesses your time management, stress management, and prioritization skills.</p>
                                  <p className="font-medium mt-3 mb-1">Key Points to Cover:</p>
                                  <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Planning:</strong> Discuss your approach to breaking down projects and setting milestones</li>
                                    <li><strong>Prioritization:</strong> Explain how you identify critical tasks and manage competing priorities</li>
                                    <li><strong>Communication:</strong> Emphasize the importance of keeping stakeholders informed</li>
                                    <li><strong>Adaptability:</strong> Show how you adjust when circumstances change</li>
                                    <li><strong>Self-care:</strong> Briefly mention techniques you use to maintain performance under pressure</li>
                                  </ul>
                                  <p className="mt-3">Include a specific example of when you successfully met a challenging deadline.</p>
                                </div>
                              )}
                              {i === 4 && (
                                <div>
                                  <p className="font-medium mb-2">What are your strengths and weaknesses?</p>
                                  
                                  <p className="font-medium mt-3 mb-1">Strengths:</p>
                                  <ul className="list-disc pl-5 space-y-1 mb-3">
                                    <li>Choose 2-3 strengths that are relevant to the position</li>
                                    <li>Provide specific examples that demonstrate each strength</li>
                                    <li>Explain how these strengths would benefit the company</li>
                                  </ul>
                                  
                                  <p className="font-medium mb-1">Weaknesses:</p>
                                  <ul className="list-disc pl-5 space-y-1">
                                    <li>Choose a genuine weakness that isn't critical to the job</li>
                                    <li>Describe the steps you're taking to improve in this area</li>
                                    <li>Show self-awareness and a commitment to professional growth</li>
                                    <li>Avoid clichés like "I'm a perfectionist" or "I work too hard"</li>
                                    <li>Never mention weaknesses related to core job requirements</li>
                                  </ul>
                                </div>
                              )}
                              {i === 5 && (
                                <div>
                                  <p className="font-medium mb-2">Where do you see yourself in 5 years?</p>
                                  <p>This question evaluates your career ambitions and whether the position aligns with your long-term goals.</p>
                                  
                                  <p className="font-medium mt-3 mb-1">Effective Response Strategy:</p>
                                  <ul className="list-disc pl-5 space-y-1">
                                    <li>Be realistic yet ambitious about your career progression</li>
                                    <li>Connect your goals to the position and company you're applying to</li>
                                    <li>Demonstrate commitment to growing with the organization</li>
                                    <li>Show enthusiasm for developing specific skills relevant to your field</li>
                                    <li>Balance ambition with flexibility, acknowledging that plans can evolve</li>
                                  </ul>
                                  
                                  <p className="italic mt-3">Example: "In five years, I hope to have deepened my expertise in [relevant skill area], taken on increasing responsibilities in [department/function], and contributed significantly to [company goals]. I'm particularly interested in developing my leadership abilities and potentially leading a team."</p>
                                </div>
                              )}
                              {i === 6 && (
                                <div>
                                  <p className="font-medium mb-2">Describe a situation where you had to work in a team:</p>
                                  <p>This question assesses your collaboration, communication, and interpersonal skills.</p>
                                  
                                  <p className="font-medium mt-3 mb-1">STAR Method Approach:</p>
                                  <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Situation:</strong> Briefly describe the team project and its objectives</li>
                                    <li><strong>Task:</strong> Explain your specific role and responsibilities within the team</li>
                                    <li><strong>Action:</strong> Detail how you worked with others, highlighting:
                                      <ul className="list-disc pl-5 mt-1">
                                        <li>How you communicated effectively</li>
                                        <li>How you handled different perspectives</li>
                                        <li>How you contributed to team dynamics</li>
                                        <li>How you addressed any conflicts or challenges</li>
                                      </ul>
                                    </li>
                                    <li><strong>Result:</strong> Share the project outcomes and what you learned about teamwork</li>
                                  </ul>
                                  
                                  <p className="mt-3">Choose an example that showcases positive collaboration rather than focusing on difficult team members.</p>
                                </div>
                              )}
                              {i === 7 && (
                                <div>
                                  <p className="font-medium mb-2">How do you stay updated with the latest technologies?</p>
                                  <p>This question evaluates your commitment to continuous learning and professional development.</p>
                                  
                                  <p className="font-medium mt-3 mb-1">Effective Response Components:</p>
                                  <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Specific resources you use:</strong>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li>Industry publications, blogs, or newsletters you follow</li>
                                        <li>Podcasts, YouTube channels, or online courses</li>
                                        <li>Technical books or documentation you read</li>
                                        <li>Open-source projects you contribute to or study</li>
                                      </ul>
                                    </li>
                                    <li><strong>Learning methods:</strong> How you approach learning new technologies (hands-on projects, tutorials, documentation)</li>
                                    <li><strong>Community engagement:</strong> Participation in forums, meetups, conferences, or online communities</li>
                                    <li><strong>Practical application:</strong> How you've implemented new knowledge in recent projects</li>
                                  </ul>
                                  
                                  <p className="mt-3">Provide a specific example of a technology or skill you recently learned and how you applied it.</p>
                                </div>
                              )}
                              {i === 8 && (
                                <div>
                                  <p className="font-medium mb-2">What do you know about our company?</p>
                                  <p>This question tests if you've done your research and are genuinely interested in the position.</p>
                                  
                                  <p className="font-medium mt-3 mb-1">Key Areas to Research:</p>
                                  <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Products/Services:</strong> Know their main offerings and target market</li>
                                    <li><strong>Company History:</strong> Understand when, why, and how they were founded</li>
                                    <li><strong>Mission and Values:</strong> Familiarize yourself with their core principles</li>
                                    <li><strong>Recent News:</strong> Be aware of recent achievements, product launches, or announcements</li>
                                    <li><strong>Industry Position:</strong> Understand their competitors and market position</li>
                                    <li><strong>Culture:</strong> Research what it's like to work there (check their careers page and employee reviews)</li>
                                  </ul>
                                  
                                  <p className="mt-3">Avoid just reciting facts from their website. Instead, connect your knowledge of the company to why you're interested in the position and how you can contribute.</p>
                                </div>
                              )}
                              {i === 9 && (
                                <div>
                                  <p className="font-medium mb-2">Do you have any questions for us?</p>
                                  <p>This question allows you to demonstrate your interest in the role and company while gathering important information for your decision-making.</p>
                                  
                                  <p className="font-medium mt-3 mb-1">Strong Questions to Ask:</p>
                                  <ol className="list-decimal pl-5 space-y-1">
                                    <li>What does success look like in this role in the first 6-12 months?</li>
                                    <li>Can you describe the team I'd be working with?</li>
                                    <li>What are the biggest challenges the team/department is currently facing?</li>
                                    <li>How would you describe the company's culture and values in practice?</li>
                                    <li>What opportunities are there for professional development and growth?</li>
                                    <li>Can you tell me about the typical career path for someone in this role?</li>
                                    <li>What do you enjoy most about working here?</li>
                                    <li>What are the next steps in the interview process?</li>
                                  </ol>
                                  
                                  <p className="mt-3 text-red-700">Avoid asking questions about salary, benefits, vacation time, or work hours in the initial interviews. These topics are better discussed once you've received an offer.</p>
                                </div>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Company-Specific Questions</CardTitle>
                  <CardDescription>Questions frequently asked by specific companies</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="google">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="google">Google</TabsTrigger>
                      <TabsTrigger value="microsoft">Microsoft</TabsTrigger>
                      <TabsTrigger value="amazon">Amazon</TabsTrigger>
                      <TabsTrigger value="infosys">Infosys</TabsTrigger>
                    </TabsList>
                    {Object.entries(interviewQuestions.companies).map(([company, questions]) => (
                      <TabsContent key={company} value={company} className="mt-4">
                        <Accordion type="single" collapsible className="w-full">
                          {questions.map((question, i) => (
                            <AccordionItem key={i} value={`${company}-${i}`}>
                              <AccordionTrigger className="text-left">{question}</AccordionTrigger>
                              <AccordionContent>
                                <div className="p-4 bg-purple-50 rounded-md text-purple-800 text-sm">
                                  {company === 'google' && i === 0 && (
                                    <div>
                                      <p className="font-medium mb-2">Design a system like Google Maps:</p>
                                      <p className="mb-2">This is a complex system design question that covers multiple components:</p>
                                      
                                      <ol className="list-decimal pl-5 space-y-2">
                                        <li>
                                          <strong>Data Storage:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Graph representation of road networks (nodes = intersections, edges = roads)</li>
                                            <li>POI (Points of Interest) database</li>
                                            <li>Traffic data storage (historical and real-time)</li>
                                            <li>Geospatial indexing for efficient querying</li>
                                          </ul>
                                        </li>
                                        <li>
                                          <strong>Core Services:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Geocoding service (convert addresses to coordinates)</li>
                                            <li>Routing service (using algorithms like Dijkstra's or A*)</li>
                                            <li>Traffic analysis and prediction</li>
                                            <li>Map rendering service</li>
                                          </ul>
                                        </li>
                                        <li>
                                          <strong>Frontend Components:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Map visualization with different zoom levels</li>
                                            <li>Search and autocomplete functionality</li>
                                            <li>Route display with alternatives</li>
                                            <li>Real-time updates for traffic conditions</li>
                                          </ul>
                                        </li>
                                        <li>
                                          <strong>Scalability Considerations:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Distributed data storage for massive road network data</li>
                                            <li>Caching for frequent routes and queries</li>
                                            <li>Load balancing for handling peak traffic</li>
                                            <li>Data partitioning by geographic regions</li>
                                          </ul>
                                        </li>
                                      </ol>
                                      
                                      <p className="mt-3">Focus on clearly explaining the high-level architecture before diving into specific components. Be prepared to discuss tradeoffs in your design decisions.</p>
                                    </div>
                                  )}
                                  
                                  {company === 'google' && i === 1 && (
                                    <div>
                                      <p className="font-medium mb-2">Implement an LRU Cache:</p>
                                      <p className="mb-2">LRU (Least Recently Used) Cache is a data structure that maintains a fixed-size cache of key-value pairs, evicting the least recently used item when the cache is full.</p>
                                      
                                      <p className="font-medium mt-3 mb-1">Implementation using a Hash Map and Doubly Linked List:</p>
                                      <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Key -> Node mapping
    this.head = new Node(0, 0); // Dummy head
    this.tail = new Node(0, 0); // Dummy tail
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }
  
  get(key) {
    if (!this.cache.has(key)) return -1;
    
    // Remove from current position and move to front
    const node = this.cache.get(key);
    this.removeNode(node);
    this.addToFront(node);
    
    return node.value;
  }
  
  put(key, value) {
    // If key exists, update value and move to front
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;
      this.removeNode(node);
      this.addToFront(node);
      return;
    }
    
    // If at capacity, remove least recently used item (from end)
    if (this.size === this.capacity) {
      const lruNode = this.tail.prev;
      this.removeNode(lruNode);
      this.cache.delete(lruNode.key);
      this.size--;
    }
    
    // Add new node to front
    const newNode = new Node(key, value);
    this.addToFront(newNode);
    this.cache.set(key, newNode);
    this.size++;
  }
  
  // Helper methods
  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  
  addToFront(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}`}
                                      </pre>
                                      
                                      <p className="font-medium mt-3 mb-1">Complexity Analysis:</p>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li><strong>Time Complexity:</strong> O(1) for both get and put operations</li>
                                        <li><strong>Space Complexity:</strong> O(capacity) to store at most 'capacity' key-value pairs</li>
                                      </ul>
                                      
                                      <p className="mt-3">This implementation uses a doubly linked list for O(1) removal and a hash map for O(1) lookups. Be prepared to explain the purpose of each helper method.</p>
                                    </div>
                                  )}
                                  
                                  {company === 'microsoft' && i === 0 && (
                                    <div>
                                      <p className="font-medium mb-2">Write code to check if a binary tree is balanced:</p>
                                      <p className="mb-2">A balanced binary tree is one where the height difference between the left and right subtrees of every node is at most 1.</p>
                                      
                                      <p className="font-medium mt-3 mb-1">Efficient Solution (Bottom-up approach):</p>
                                      <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isBalanced(root) {
  // Returns [isBalanced, height]
  function checkHeight(node) {
    if (node === null) return [true, -1];
    
    // Check left subtree
    const [leftBalanced, leftHeight] = checkHeight(node.left);
    if (!leftBalanced) return [false, 0]; // Early termination
    
    // Check right subtree
    const [rightBalanced, rightHeight] = checkHeight(node.right);
    if (!rightBalanced) return [false, 0]; // Early termination
    
    // Check if current node is balanced
    const balanced = Math.abs(leftHeight - rightHeight) <= 1;
    const height = Math.max(leftHeight, rightHeight) + 1;
    
    return [balanced, height];
  }
  
  return checkHeight(root)[0];
}`}
                                      </pre>
                                      
                                      <p className="font-medium mt-3 mb-1">Time & Space Complexity:</p>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li><strong>Time Complexity:</strong> O(n) where n is the number of nodes (we visit each node once)</li>
                                        <li><strong>Space Complexity:</strong> O(h) where h is the height of the tree (for the recursion stack)</li>
                                      </ul>
                                      
                                      <p className="mt-3">The key insight is to use a bottom-up approach to avoid redundant calculations. We calculate the height and check balance status simultaneously using a helper function that returns both pieces of information.</p>
                                    </div>
                                  )}
                                  
                                  {company === 'amazon' && i === 0 && (
                                    <div>
                                      <p className="font-medium mb-2">Design Amazon's product recommendation system:</p>
                                      
                                      <p className="mb-2">A recommendation system for Amazon would need to handle millions of products and users while providing personalized recommendations in real-time.</p>
                                      
                                      <p className="font-medium mt-3 mb-1">Key Components:</p>
                                      <ol className="list-decimal pl-5 space-y-2">
                                        <li>
                                          <strong>Data Collection:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Explicit feedback (ratings, reviews)</li>
                                            <li>Implicit feedback (views, purchases, cart additions, time spent)</li>
                                            <li>User demographic data</li>
                                            <li>Product metadata (categories, attributes, pricing)</li>
                                          </ul>
                                        </li>
                                        <li>
                                          <strong>Recommendation Algorithms:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Collaborative filtering (user-based and item-based)</li>
                                            <li>Content-based filtering using product attributes</li>
                                            <li>Hybrid approaches combining multiple methods</li>
                                            <li>Deep learning models (sequence models for user history)</li>
                                          </ul>
                                        </li>
                                        <li>
                                          <strong>Real-time Processing:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Stream processing for real-time user behavior</li>
                                            <li>Pre-computation of recommendations for common cases</li>
                                            <li>Caching strategies for frequently accessed data</li>
                                          </ul>
                                        </li>
                                        <li>
                                          <strong>Serving Infrastructure:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Load-balanced recommendation service</li>
                                            <li>CDN for fast delivery to global users</li>
                                            <li>A/B testing framework to evaluate recommendation quality</li>
                                          </ul>
                                        </li>
                                      </ol>
                                      
                                      <p className="font-medium mt-3 mb-1">Recommendation Types:</p>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li>"Frequently bought together" (market basket analysis)</li>
                                        <li>"Customers who viewed this also viewed"</li>
                                        <li>"Recommended for you" (personalized based on history)</li>
                                        <li>"New arrivals in your favorite categories"</li>
                                      </ul>
                                      
                                      <p className="mt-3">Be prepared to discuss the tradeoffs between accuracy, diversity, novelty, and computational efficiency in your design.</p>
                                    </div>
                                  )}
                                  
                                  {company === 'infosys' && i === 0 && (
                                    <div>
                                      <p className="font-medium mb-2">What are the different types of software development methodologies?</p>
                                      
                                      <p className="mb-3">Software development methodologies are structured approaches to building software systems. The main types include:</p>
                                      
                                      <ol className="list-decimal pl-5 space-y-2">
                                        <li>
                                          <strong>Waterfall Model:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Linear and sequential approach</li>
                                            <li>Phases: Requirements, Design, Implementation, Verification, Maintenance</li>
                                            <li>Each phase must be completed before the next begins</li>
                                            <li><em>Best for:</em> Projects with well-defined requirements and little expected change</li>
                                          </ul>
                                        </li>
                                        <li>
                                          <strong>Agile Methodology:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Iterative and incremental approach</li>
                                            <li>Focus on customer feedback and adapting to changes</li>
                                            <li>Frameworks include Scrum, Kanban, XP (Extreme Programming)</li>
                                            <li><em>Best for:</em> Projects with evolving requirements or where early delivery is valuable</li>
                                          </ul>
                                        </li>
                                        <li>
                                          <strong>DevOps:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Integration of development and operations</li>
                                            <li>Emphasizes continuous integration, delivery, and deployment</li>
                                            <li>Focuses on automation and monitoring</li>
                                            <li><em>Best for:</em> Projects requiring frequent releases and high reliability</li>
                                          </ul>
                                        </li>
                                        <li>
                                          <strong>Spiral Model:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Combines elements of waterfall and iterative development</li>
                                            <li>Emphasis on risk analysis</li>
                                            <li>Four phases: Planning, Risk Analysis, Engineering, Evaluation</li>
                                            <li><em>Best for:</em> Large, high-risk, and expensive projects</li>
                                          </ul>
                                        </li>
                                        <li>
                                          <strong>Rapid Application Development (RAD):</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Emphasizes rapid prototyping over detailed planning</li>
                                            <li>User feedback incorporated throughout development</li>
                                            <li><em>Best for:</em> Projects with tight timelines and where UI/UX is critical</li>
                                          </ul>
                                        </li>
                                      </ol>
                                      
                                      <p className="mt-3">Each methodology has its strengths and weaknesses. The choice depends on project requirements, timeline, budget, and team expertise. Modern development often uses hybrid approaches that combine elements from different methodologies.</p>
                                    </div>
                                  )}
                                  
                                  {/* Default message for other questions */}
                                  {((company === 'google' && i > 1) || 
                                    (company === 'microsoft' && i > 0) || 
                                    (company === 'amazon' && i > 0) || 
                                    (company === 'infosys' && i > 0)) && (
                                    <p>This is a common question for {company.charAt(0).toUpperCase() + company.slice(1)}. Research the company's products and technologies to provide a comprehensive answer. Practice system design principles and be prepared to discuss tradeoffs in your solutions.</p>
                                  )}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="space-y-6 mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                {/* Technical Skills Resources */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Technical Skills
                    </CardTitle>
                    <CardDescription>Enhance your programming and technical knowledge</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">FreeCodeCamp</a>
                        <p className="text-sm text-gray-600">Full stack development courses with certifications</p>
                      </li>
                      <li>
                        <a href="https://www.coursera.org/specializations/data-science-python" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Data Science with Python</a>
                        <p className="text-sm text-gray-600">Comprehensive data science specialization on Coursera</p>
                      </li>
                      <li>
                        <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">LeetCode</a>
                        <p className="text-sm text-gray-600">Practice coding problems and algorithms</p>
                      </li>
                      <li>
                        <a href="https://www.edx.org/learn/computer-science" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">CS50 by Harvard</a>
                        <p className="text-sm text-gray-600">Introduction to computer science and programming</p>
                      </li>
                      <li>
                        <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Web Development Bootcamp</a>
                        <p className="text-sm text-gray-600">Comprehensive web development course</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Interview Preparation */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Interview Preparation
                    </CardTitle>
                    <CardDescription>Resources to ace your technical interviews</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="https://www.geeksforgeeks.org/company-interview-corner/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">GeeksforGeeks Company Interviews</a>
                        <p className="text-sm text-gray-600">Company-specific interview questions and experiences</p>
                      </li>
                      <li>
                        <a href="https://www.interviewbit.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">InterviewBit</a>
                        <p className="text-sm text-gray-600">Structured interview preparation platform</p>
                      </li>
                      <li>
                        <a href="https://www.pramp.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Pramp</a>
                        <p className="text-sm text-gray-600">Practice mock interviews with peers</p>
                      </li>
                      <li>
                        <a href="https://www.hackerrank.com/interview/interview-preparation-kit" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">HackerRank Interview Prep Kit</a>
                        <p className="text-sm text-gray-600">Comprehensive interview preparation resources</p>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/c/SystemDesignInterview" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">System Design Interview YouTube</a>
                        <p className="text-sm text-gray-600">Learn system design concepts through videos</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Soft Skills and Career Development */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Soft Skills & Career
                    </CardTitle>
                    <CardDescription>Develop communication and professional skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="https://www.linkedin.com/learning/paths/master-in-demand-professional-soft-skills" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">LinkedIn Learning</a>
                        <p className="text-sm text-gray-600">In-demand professional soft skills courses</p>
                      </li>
                      <li>
                        <a href="https://www.coursera.org/learn/career-success" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Career Success Specialization</a>
                        <p className="text-sm text-gray-600">Project management and communication skills</p>
                      </li>
                      <li>
                        <a href="https://www.toastmasters.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Toastmasters International</a>
                        <p className="text-sm text-gray-600">Improve public speaking and leadership skills</p>
                      </li>
                      <li>
                        <a href="https://www.hubspot.com/resources/courses/business-writing" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Business Writing Course</a>
                        <p className="text-sm text-gray-600">Effective business communication skills</p>
                      </li>
                      <li>
                        <a href="https://www.mindtools.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">MindTools</a>
                        <p className="text-sm text-gray-600">Career skills, leadership and management training</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Industry Specific Resources */}
              <Card>
                <CardHeader>
                  <CardTitle>Industry-Specific Learning Paths</CardTitle>
                  <CardDescription>Specialized resources based on your career interests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Software Development</h3>
                      <ul className="space-y-2">
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://github.com/kamranahmedse/developer-roadmap" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Web Developer Roadmap</a>
                            <p className="text-sm text-gray-600">Step-by-step guide to becoming a developer</p>
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://fullstackopen.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Full Stack Open</a>
                            <p className="text-sm text-gray-600">Modern web development with JavaScript</p>
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://roadmap.sh/backend" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Backend Development</a>
                            <p className="text-sm text-gray-600">Complete roadmap for backend developers</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-3">Data Science & AI</h3>
                      <ul className="space-y-2">
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://www.kaggle.com/learn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Kaggle Courses</a>
                            <p className="text-sm text-gray-600">Free courses on machine learning and data science</p>
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://www.fast.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Fast.ai</a>
                            <p className="text-sm text-gray-600">Practical deep learning for coders</p>
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://www.tensorflow.org/resources/learn-ml" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">TensorFlow Learning Resources</a>
                            <p className="text-sm text-gray-600">Official ML and AI learning resources</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Cybersecurity</h3>
                      <ul className="space-y-2">
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://tryhackme.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">TryHackMe</a>
                            <p className="text-sm text-gray-600">Learn cybersecurity through hands-on exercises</p>
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://www.cybrary.it/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Cybrary</a>
                            <p className="text-sm text-gray-600">Free cybersecurity training and career development</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-3">Cloud Computing</h3>
                      <ul className="space-y-2">
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://aws.amazon.com/training/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">AWS Training</a>
                            <p className="text-sm text-gray-600">Amazon Web Services learning resources</p>
                          </div>
                        </li>
                        <li className="flex gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <a href="https://cloud.google.com/training" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Google Cloud Training</a>
                            <p className="text-sm text-gray-600">Google Cloud Platform learning resources</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* BMSCE-Specific Resources */}
              <Card>
                <CardHeader>
                  <CardTitle>BMSCE Placement Cell Resources</CardTitle>
                  <CardDescription>Exclusive resources for BMSCE students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-4 rounded-md mb-6">
                    <p className="text-blue-800 text-sm">
                      The following resources are provided by the BMSCE Placement Cell to help students prepare for their placement journey.
                      Login with your college credentials to access these resources.
                    </p>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Previous Year Question Papers
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">Access previous years' technical and aptitude questions from top companies that visited BMSCE.</p>
                      <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Access Resource</a>
                    </div>
                    
                    <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        Resume Templates
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">Specially curated resume templates approved by the placement cell for different roles and industries.</p>
                      <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Access Resource</a>
                    </div>
                    
                    <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Recorded Mock Interviews
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">Watch recorded mock interviews of senior students with feedback from recruiters and faculty.</p>
                      <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Access Resource</a>
                    </div>
                    
                    <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Placement Calendar
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">Upcoming placement drives, pre-placement talks, and company-specific preparation workshops.</p>
                      <a href="#" className="text-blue-600 hover:underline text-sm font-medium">Access Resource</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}