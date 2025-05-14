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
                                  
                                  {company === 'microsoft' && i === 1 && (
                                    <div>
                                      <p className="font-medium mb-2">Implement a function to detect a cycle in a linked list:</p>
                                      
                                      <p className="mb-2">This is a classic problem that can be solved using Floyd's Cycle-Finding Algorithm (also known as the "tortoise and hare" algorithm).</p>
                                      
                                      <p className="font-medium mt-3 mb-1">Efficient Solution:</p>
                                      <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function hasCycle(head) {
  if (!head || !head.next) return false;
  
  // Initialize slow and fast pointers
  let slow = head;
  let fast = head;
  
  // Move slow by 1 step and fast by 2 steps
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    // If slow and fast meet, there's a cycle
    if (slow === fast) return true;
  }
  
  // If fast reaches the end (null), there's no cycle
  return false;
}`}
                                      </pre>
                                      
                                      <p className="font-medium mt-3 mb-1">Explanation:</p>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li>We use two pointers: slow (moving one step at a time) and fast (moving two steps at a time)</li>
                                        <li>If there's a cycle, the fast pointer will eventually catch up to the slow pointer</li>
                                        <li>If there's no cycle, the fast pointer will reach the end of the list</li>
                                      </ul>
                                      
                                      <p className="font-medium mt-3 mb-1">Time & Space Complexity:</p>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li><strong>Time Complexity:</strong> O(n) where n is the number of nodes</li>
                                        <li><strong>Space Complexity:</strong> O(1) as we only use two pointers regardless of input size</li>
                                      </ul>
                                      
                                      <p className="mt-3">This is a popular interview question at Microsoft because it tests your understanding of both linked list operations and efficient algorithm design.</p>
                                    </div>
                                  )}
                                  
                                  {company === 'microsoft' && i === 2 && (
                                    <div>
                                      <p className="font-medium mb-2">Implement a function to check if a string is a palindrome:</p>
                                      
                                      <p className="mb-2">A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).</p>
                                      
                                      <p className="font-medium mt-3 mb-1">Solution 1: Two Pointers Approach</p>
                                      <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Use two pointers: one from start, one from end
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false`}
                                      </pre>
                                      
                                      <p className="font-medium mt-3 mb-1">Solution 2: Reverse and Compare</p>
                                      <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Reverse the string
  const reversed = s.split('').reverse().join('');
  
  // Compare with original
  return s === reversed;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false`}
                                      </pre>
                                      
                                      <p className="font-medium mt-3 mb-1">Solution 3: Recursive Approach</p>
                                      <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`function isPalindrome(s) {
  // Base case: empty string or single character
  if (s.length <= 1) return true;
  
  // Remove non-alphanumeric characters and convert to lowercase
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Check if first and last characters match
  if (s[0] !== s[s.length - 1]) return false;
  
  // Recur with the substring excluding first and last characters
  return isPalindrome(s.substring(1, s.length - 1));
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false`}
                                      </pre>
                                      
                                      <p className="font-medium mt-3 mb-1">Time & Space Complexity:</p>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li><strong>Two Pointers:</strong> O(n) time, O(1) space (ignoring string preprocessing)</li>
                                        <li><strong>Reverse and Compare:</strong> O(n) time, O(n) space</li>
                                        <li><strong>Recursive:</strong> O(n) time, O(n) space (due to recursion stack)</li>
                                      </ul>
                                      
                                      <p className="font-medium mt-3 mb-1">Follow-up Questions:</p>
                                      <ol className="list-decimal pl-5 space-y-1">
                                        <li>How would you handle Unicode characters?</li>
                                        <li>Can you optimize the space complexity further?</li>
                                        <li>What if the input is a linked list instead of a string?</li>
                                      </ol>
                                      
                                      <p className="mt-3">This question tests not only string manipulation but also your ability to optimize for both time and space complexity.</p>
                                    </div>
                                  )}
                                  
                                  {company === 'microsoft' && i === 3 && (
                                    <div>
                                      <p className="font-medium mb-2">How would you design Xbox Live's matchmaking service?</p>
                                      
                                      <p className="mb-2">Designing a matchmaking service for Xbox Live involves creating a system that matches players for multiplayer games based on various factors.</p>
                                      
                                      <p className="font-medium mt-3 mb-1">Key Components:</p>
                                      <ol className="list-decimal pl-5 space-y-2">
                                        <li>
                                          <strong>Player Profile Service:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Stores player statistics, skill ratings, preferences</li>
                                            <li>Tracks historical performance across games</li>
                                            <li>Handles authentication and session management</li>
                                          </ul>
                                        </li>
                                        
                                        <li>
                                          <strong>Matchmaking Algorithm:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Skill-based matching (e.g., ELO, TrueSkill)</li>
                                            <li>Latency/region considerations for good connection quality</li>
                                            <li>Player preferences (game modes, maps)</li>
                                            <li>Social factors (friends, player reputation)</li>
                                            <li>Wait time balancing (relaxing criteria as time increases)</li>
                                          </ul>
                                        </li>
                                        
                                        <li>
                                          <strong>Lobby System:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Temporary grouping of matched players</li>
                                            <li>Pre-game chat and player customization</li>
                                            <li>Party system for friends who want to play together</li>
                                          </ul>
                                        </li>
                                        
                                        <li>
                                          <strong>Game Server Allocation:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Selecting optimal server location for all players</li>
                                            <li>Load balancing across available servers</li>
                                            <li>Handling server provisioning and scaling</li>
                                          </ul>
                                        </li>
                                        
                                        <li>
                                          <strong>Analytics and Feedback:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Collecting match quality data</li>
                                            <li>Player feedback mechanisms</li>
                                            <li>Continuous improvement of matchmaking algorithms</li>
                                          </ul>
                                        </li>
                                      </ol>
                                      
                                      <p className="font-medium mt-3 mb-1">System Architecture:</p>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li><strong>Microservices Architecture:</strong> Separate services for player profiles, matchmaking, lobbies, server allocation</li>
                                        <li><strong>Message Queue:</strong> For asynchronous processing of matchmaking requests</li>
                                        <li><strong>Database Choices:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>NoSQL (like Cosmos DB) for player profiles and flexible data</li>
                                            <li>Relational databases for structured match history</li>
                                            <li>In-memory caching for active sessions and matchmaking pools</li>
                                          </ul>
                                        </li>
                                        <li><strong>Real-time Communication:</strong> WebSockets or SignalR for lobby and status updates</li>
                                      </ul>
                                      
                                      <p className="font-medium mt-3 mb-1">Scalability Considerations:</p>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li>Horizontal scaling for handling millions of concurrent users</li>
                                        <li>Geographic distribution to minimize latency worldwide</li>
                                        <li>Automatic scaling based on player demand (time of day, game releases)</li>
                                        <li>Game-specific matchmaking pools to handle different requirements</li>
                                      </ul>
                                      
                                      <p className="font-medium mt-3 mb-1">Fault Tolerance:</p>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li>Redundancy across regions</li>
                                        <li>Graceful degradation during partial outages</li>
                                        <li>Circuit breakers to prevent cascading failures</li>
                                        <li>Monitoring and alerting systems</li>
                                      </ul>
                                      
                                      <p className="mt-3">For a Microsoft interview, emphasize integration with Azure services and discuss how telemetry data can improve the matchmaking experience over time. Also consider accessibility features and fair play mechanisms.</p>
                                    </div>
                                  )}
                                  
                                  {company === 'microsoft' && i === 4 && (
                                    <div>
                                      <p className="font-medium mb-2">Explain virtual memory concepts:</p>
                                      
                                      <p className="mb-2">Virtual memory is a memory management technique that provides an abstraction of the available physical memory, allowing programs to operate as if they have access to a large, contiguous memory space regardless of the actual physical memory available.</p>
                                      
                                      <p className="font-medium mt-3 mb-1">Key Concepts:</p>
                                      <ol className="list-decimal pl-5 space-y-2">
                                        <li>
                                          <strong>Virtual Address Space:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Each process has its own virtual address space</li>
                                            <li>Programs access memory using virtual addresses</li>
                                            <li>Isolates processes from each other and the OS</li>
                                            <li>Typically much larger than physical memory (e.g., 264 bytes on 64-bit systems)</li>
                                          </ul>
                                        </li>
                                        
                                        <li>
                                          <strong>Address Translation:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Virtual addresses must be translated to physical addresses</li>
                                            <li>Memory Management Unit (MMU) performs this translation in hardware</li>
                                            <li>Translation uses page tables maintained by the OS</li>
                                          </ul>
                                        </li>
                                        
                                        <li>
                                          <strong>Paging:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Memory is divided into fixed-size units called pages (typically 4KB)</li>
                                            <li>Physical memory is divided into page frames of the same size</li>
                                            <li>Pages can be stored in RAM or swapped to disk</li>
                                            <li>Page tables map virtual pages to physical page frames</li>
                                          </ul>
                                        </li>
                                        
                                        <li>
                                          <strong>Page Faults:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Occurs when a program accesses a page not currently in physical memory</li>
                                            <li>Triggers an interrupt handled by the OS</li>
                                            <li>OS loads the required page from disk into memory</li>
                                            <li>Updates page tables and resumes program execution</li>
                                          </ul>
                                        </li>
                                        
                                        <li>
                                          <strong>Swapping/Paging:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Process of moving pages between physical memory and disk</li>
                                            <li>Uses a dedicated area on disk called swap space or page file</li>
                                            <li>Allows more memory to be used than physically available</li>
                                          </ul>
                                        </li>
                                      </ol>
                                      
                                      <p className="font-medium mt-3 mb-1">Performance Optimization Techniques:</p>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li><strong>Translation Lookaside Buffer (TLB):</strong> Cache for recent address translations</li>
                                        <li><strong>Multi-level Page Tables:</strong> Reduces memory overhead for sparse address spaces</li>
                                        <li><strong>Huge Pages:</strong> Larger page sizes for certain applications (e.g., databases)</li>
                                        <li><strong>Page Replacement Algorithms:</strong> LRU, Clock, FIFO to decide which pages to swap out</li>
                                      </ul>
                                      
                                      <p className="font-medium mt-3 mb-1">Benefits of Virtual Memory:</p>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li>Process isolation and memory protection</li>
                                        <li>Efficient memory utilization</li>
                                        <li>Simplified programming model (contiguous address space)</li>
                                        <li>Ability to run programs larger than physical memory</li>
                                        <li>Memory sharing through mapped files</li>
                                      </ul>
                                      
                                      <p className="mt-3">Microsoft, as an OS developer, often asks about virtual memory concepts to gauge candidates' understanding of core system concepts that affect application performance and security. Windows has sophisticated virtual memory management that has evolved over decades.</p>
                                    </div>
                                  )}
                                  
                                  {company === 'google' && i === 2 && (
                                    <div>
                                      <p className="font-medium mb-2">Find the kth largest element in an array:</p>
                                      
                                      <p className="mb-2">This is a common interview question that can be solved using several approaches.</p>
                                      
                                      <p className="font-medium mt-3 mb-1">Solution 1: Using Sorting (Simple but not optimal)</p>
                                      <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`function findKthLargest(nums, k) {
  // Sort the array in descending order
  nums.sort((a, b) => b - a);
  
  // Return the kth element (0-indexed)
  return nums[k - 1];
}

// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(1) if we ignore the space used by sort`}
                                      </pre>
                                      
                                      <p className="font-medium mt-3 mb-1">Solution 2: Using Min Heap (More efficient)</p>
                                      <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`function findKthLargest(nums, k) {
  // Create min heap (priority queue)
  const minHeap = [];
  
  for (const num of nums) {
    // If the heap size is less than k, add the element
    if (minHeap.length < k) {
      minHeap.push(num);
      heapifyUp(minHeap);
    } 
    // If current number is larger than the smallest in heap
    else if (num > minHeap[0]) {
      minHeap[0] = num;  // Replace the root
      heapifyDown(minHeap, 0);
    }
  }
  
  return minHeap[0];  // Root is the kth largest
}

// Helper functions for min heap operations
function heapifyUp(heap) {
  let index = heap.length - 1;
  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (heap[parentIndex] <= heap[index]) break;
    [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
    index = parentIndex;
  }
}

function heapifyDown(heap, index) {
  const length = heap.length;
  while (true) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index;
    
    if (left < length && heap[left] < heap[smallest]) {
      smallest = left;
    }
    
    if (right < length && heap[right] < heap[smallest]) {
      smallest = right;
    }
    
    if (smallest === index) break;
    
    [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
    index = smallest;
  }
}

// Time Complexity: O(n log k)
// Space Complexity: O(k)`}
                                      </pre>
                                      
                                      <p className="font-medium mt-3 mb-1">Solution 3: Using QuickSelect (Most efficient on average)</p>
                                      <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`function findKthLargest(nums, k) {
  // Convert to 0-indexed position (from largest to smallest)
  const targetIndex = nums.length - k;
  
  return quickSelect(nums, 0, nums.length - 1, targetIndex);
}

function quickSelect(nums, left, right, targetIndex) {
  if (left === right) return nums[left];
  
  // Choose a random pivot
  const pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
  const pivotPos = partition(nums, left, right, pivotIndex);
  
  if (pivotPos === targetIndex) {
    return nums[pivotPos];
  } else if (pivotPos < targetIndex) {
    return quickSelect(nums, pivotPos + 1, right, targetIndex);
  } else {
    return quickSelect(nums, left, pivotPos - 1, targetIndex);
  }
}

function partition(nums, left, right, pivotIndex) {
  const pivotValue = nums[pivotIndex];
  
  // Move pivot to the end
  [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
  
  let storeIndex = left;
  
  // Move all smaller elements to the left
  for (let i = left; i < right; i++) {
    if (nums[i] < pivotValue) {
      [nums[i], nums[storeIndex]] = [nums[storeIndex], nums[i]];
      storeIndex++;
    }
  }
  
  // Move pivot to its final place
  [nums[storeIndex], nums[right]] = [nums[right], nums[storeIndex]];
  
  return storeIndex;
}

// Time Complexity: O(n) average case, O(n²) worst case
// Space Complexity: O(log n) average case, O(n) worst case (recursion stack)`}
                                      </pre>
                                      
                                      <p className="mt-3">Google often asks this question to test understanding of data structures, algorithm efficiency, and coding precision. The QuickSelect approach is particularly impressive as it demonstrates knowledge of a lesser-known but highly efficient algorithm.</p>
                                    </div>
                                  )}
                                  
                                  {company === 'google' && i === 3 && (
                                    <div>
                                      <p className="font-medium mb-2">How would you design Google Search?</p>
                                      
                                      <p className="mb-2">Designing a system like Google Search is a complex task that involves multiple components working together. Here's a high-level design:</p>
                                      
                                      <ol className="list-decimal pl-5 space-y-3 mt-3">
                                        <li>
                                          <strong>Web Crawling:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Distributed crawler system that follows links to discover web pages</li>
                                            <li>URL frontier to manage URLs to be crawled</li>
                                            <li>Politeness policies to avoid overwhelming websites</li>
                                            <li>Freshness considerations for re-crawling updated content</li>
                                          </ul>
                                        </li>
                                        
                                        <li>
                                          <strong>Indexing:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Parse and extract text, metadata, and links from HTML</li>
                                            <li>Build an inverted index (mapping words to documents)</li>
                                            <li>Process and store document metadata (title, description, etc.)</li>
                                            <li>Implement techniques like stemming and spell correction</li>
                                          </ul>
                                        </li>
                                        
                                        <li>
                                          <strong>Ranking Algorithm:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>PageRank to analyze link structure</li>
                                            <li>Content relevance scoring</li>
                                            <li>User engagement signals (click-through rates, dwell time)</li>
                                            <li>Personalization based on user history and preferences</li>
                                            <li>Freshness, locality, and other context signals</li>
                                          </ul>
                                        </li>
                                        
                                        <li>
                                          <strong>Query Processing:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Query understanding (intent detection, entity recognition)</li>
                                            <li>Query expansion and correction</li>
                                            <li>Retrieval of candidate documents</li>
                                            <li>Filtering and re-ranking of results</li>
                                          </ul>
                                        </li>
                                        
                                        <li>
                                          <strong>User Interface:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Fast autocomplete suggestions</li>
                                            <li>Clean presentation of search results</li>
                                            <li>Rich results like featured snippets, knowledge panels</li>
                                            <li>Specialized results for different content types (images, videos, news)</li>
                                          </ul>
                                        </li>
                                      </ol>
                                      
                                      <p className="font-medium mt-3 mb-1">System Architecture:</p>
                                      <ul className="list-disc pl-5">
                                        <li><strong>Storage:</strong> Distributed file systems for raw web content</li>
                                        <li><strong>Databases:</strong> For structured data and indices</li>
                                        <li><strong>Caching:</strong> Multiple layers to reduce latency</li>
                                        <li><strong>Load Balancing:</strong> To distribute traffic across servers</li>
                                        <li><strong>CDN:</strong> To serve results quickly worldwide</li>
                                      </ul>
                                      
                                      <p className="font-medium mt-3 mb-1">Scalability Considerations:</p>
                                      <ul className="list-disc pl-5">
                                        <li>Horizontal scaling of all components</li>
                                        <li>Sharding the index across multiple servers</li>
                                        <li>Replication for availability and performance</li>
                                        <li>Precomputing common queries</li>
                                      </ul>
                                      
                                      <p className="mt-3">For a system design interview at Google, focus on demonstrating clear architectural thinking and understanding of tradeoffs, rather than trying to cover every detail of their actual implementation.</p>
                                    </div>
                                  )}
                                  
                                  {company === 'google' && i === 4 && (
                                    <div>
                                      <p className="font-medium mb-2">Explain the working of PageRank algorithm:</p>
                                      
                                      <p className="mb-2">PageRank is the algorithm originally used by Google to rank web pages in their search engine results. It's named after Larry Page, one of Google's founders.</p>
                                      
                                      <p className="font-medium mt-3 mb-1">Core Concept:</p>
                                      <p>PageRank measures the importance of a webpage based on the quantity and quality of links pointing to it. The fundamental assumption is that more important websites are likely to receive more links from other websites.</p>
                                      
                                      <p className="font-medium mt-3 mb-1">How PageRank Works:</p>
                                      
                                      <ol className="list-decimal pl-5 space-y-2">
                                        <li>
                                          <strong>Web as a Graph:</strong>
                                          <p className="mt-1">The web is modeled as a directed graph where:</p>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Each webpage is a node</li>
                                            <li>Links between pages are edges</li>
                                          </ul>
                                        </li>
                                        
                                        <li>
                                          <strong>Random Surfer Model:</strong>
                                          <p className="mt-1">PageRank simulates a "random surfer" who:</p>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Starts on a random webpage</li>
                                            <li>Randomly clicks on links to navigate to other pages</li>
                                            <li>Occasionally jumps to a random page (not following any link)</li>
                                          </ul>
                                        </li>
                                        
                                        <li>
                                          <strong>Mathematical Formulation:</strong>
                                          <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto mt-1">
{`PR(A) = (1-d) + d * (PR(T1)/C(T1) + PR(T2)/C(T2) + ... + PR(Tn)/C(Tn))`}
                                          </pre>
                                          <p className="mt-1">Where:</p>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>PR(A) is the PageRank of page A</li>
                                            <li>PR(Ti) is the PageRank of pages Ti which link to page A</li>
                                            <li>C(Ti) is the number of outbound links from page Ti</li>
                                            <li>d is a damping factor (typically 0.85)</li>
                                          </ul>
                                        </li>
                                        
                                        <li>
                                          <strong>Iterative Computation:</strong>
                                          <p className="mt-1">PageRank is calculated iteratively:</p>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Start with equal ranks for all pages</li>
                                            <li>Apply the formula to calculate new ranks</li>
                                            <li>Repeat until ranks converge (stop changing significantly)</li>
                                          </ul>
                                        </li>
                                      </ol>
                                      
                                      <p className="font-medium mt-3 mb-1">Key Properties:</p>
                                      <ul className="list-disc pl-5">
                                        <li><strong>Damping Factor (d):</strong> Represents the probability that the surfer will continue clicking links (vs. jumping to a random page)</li>
                                        <li><strong>Convergence:</strong> The algorithm is guaranteed to converge because the web graph is "irreducible" (all pages can be reached)</li>
                                        <li><strong>Authority Transfer:</strong> A link from an important page contributes more value than a link from an unimportant page</li>
                                      </ul>
                                      
                                      <p className="font-medium mt-3 mb-1">Implementation Challenges:</p>
                                      <ul className="list-disc pl-5">
                                        <li><strong>Scale:</strong> Calculating PageRank for billions of webpages requires distributed computing</li>
                                        <li><strong>Link Spam:</strong> Websites creating artificial links to manipulate rankings</li>
                                        <li><strong>Dangling Nodes:</strong> Pages with no outgoing links can cause issues in the calculation</li>
                                      </ul>
                                      
                                      <p className="mt-3">While PageRank was revolutionary when introduced, modern Google uses hundreds of signals beyond PageRank to determine search rankings. Still, understanding PageRank demonstrates knowledge of graph algorithms and probabilistic models.</p>
                                    </div>
                                  )}
                                  
                                  {company === 'amazon' && i === 1 && (
                                    <div>
                                      <p className="font-medium mb-2">Find the k closest points to the origin:</p>
                                      
                                      <p className="mb-2">Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).</p>
                                      
                                      <p className="mb-2">The distance between two points is the Euclidean distance: √((x₁ - x₂)² + (y₁ - y₂)²).</p>
                                      
                                      <p className="font-medium mt-3 mb-1">Solution using Max Heap (Priority Queue):</p>
                                      <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`function kClosest(points, k) {
  // Max heap (priority queue) to keep track of the k closest points
  const maxHeap = [];
  
  for (const [x, y] of points) {
    // Calculate distance squared (no need for square root since relative ordering is the same)
    const distSquared = x * x + y * y;
    
    if (maxHeap.length < k) {
      // If we haven't collected k points yet, add this one
      maxHeap.push([distSquared, [x, y]]);
      // Heapify if needed
      if (maxHeap.length === k) {
        buildMaxHeap(maxHeap);
      }
    } else if (distSquared < maxHeap[0][0]) {
      // If this point is closer than the farthest one in our heap, replace it
      maxHeap[0] = [distSquared, [x, y]];
      heapify(maxHeap, 0);
    }
  }
  
  // Extract just the points from our result
  return maxHeap.map(item => item[1]);
}

// Helper functions for max heap operations
function buildMaxHeap(heap) {
  const n = heap.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(heap, i);
  }
}

function heapify(heap, i) {
  const n = heap.length;
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  
  if (left < n && heap[left][0] > heap[largest][0]) {
    largest = left;
  }
  
  if (right < n && heap[right][0] > heap[largest][0]) {
    largest = right;
  }
  
  if (largest !== i) {
    [heap[i], heap[largest]] = [heap[largest], heap[i]];
    heapify(heap, largest);
  }
}`}
                                      </pre>
                                      
                                      <p className="font-medium mt-3 mb-1">Alternative Solution using Quickselect:</p>
                                      <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`function kClosest(points, k) {
  // Calculate distances
  const distances = points.map(point => {
    const [x, y] = point;
    return [x * x + y * y, point]; // [distance^2, original point]
  });
  
  // Use quickselect to find the kth smallest distance
  quickSelect(distances, 0, distances.length - 1, k);
  
  // Return the first k elements (now contains k closest points)
  return distances.slice(0, k).map(d => d[1]);
}

function quickSelect(arr, left, right, k) {
  if (left >= right) return;
  
  const pivotIndex = partition(arr, left, right);
  
  if (pivotIndex === k - 1) {
    return;
  } else if (pivotIndex > k - 1) {
    quickSelect(arr, left, pivotIndex - 1, k);
  } else {
    quickSelect(arr, pivotIndex + 1, right, k);
  }
}

function partition(arr, left, right) {
  const pivot = arr[right][0];
  let i = left;
  
  for (let j = left; j < right; j++) {
    if (arr[j][0] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  
  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}`}
                                      </pre>
                                      
                                      <p className="font-medium mt-3 mb-1">Time & Space Complexity:</p>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li><strong>Max Heap Approach:</strong> O(n log k) time, O(k) space</li>
                                        <li><strong>Quickselect Approach:</strong> O(n) average time (O(n²) worst case), O(1) extra space</li>
                                      </ul>
                                      
                                      <p className="mt-3">This problem tests your understanding of data structures (heaps) and algorithms (quickselect), as well as your ability to optimize for efficiency. Amazon frequently asks spatial/geometric problems due to their logistics and operations focus.</p>
                                    </div>
                                  )}
                                  
                                  {company === 'amazon' && i === 2 && (
                                    <div>
                                      <p className="font-medium mb-2">Design a distributed cache:</p>
                                      
                                      <p className="mb-2">A distributed cache is a system that pools memory across multiple servers to create a large, fast data store for frequently accessed data.</p>
                                      
                                      <p className="font-medium mt-3 mb-1">Core Components:</p>
                                      <ol className="list-decimal pl-5 space-y-2">
                                        <li>
                                          <strong>Cache Nodes:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Multiple servers that store cached data in memory</li>
                                            <li>Each node responsible for a subset of the key space</li>
                                            <li>Nodes can be added/removed dynamically for scaling</li>
                                          </ul>
                                        </li>
                                        
                                        <li>
                                          <strong>Consistent Hashing:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Maps keys to specific cache nodes</li>
                                            <li>Minimizes remapping when nodes are added/removed</li>
                                            <li>Uses a hash ring with virtual nodes for better distribution</li>
                                          </ul>
                                        </li>
                                        
                                        <li>
                                          <strong>Client Library:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Handles routing requests to appropriate cache nodes</li>
                                            <li>Implements retry and failover logic</li>
                                            <li>Maintains connection pools to cache servers</li>
                                          </ul>
                                        </li>
                                        
                                        <li>
                                          <strong>Eviction Policies:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>LRU (Least Recently Used), LFU (Least Frequently Used), etc.</li>
                                            <li>Configurable TTL (Time-To-Live) values</li>
                                            <li>Memory pressure-based eviction</li>
                                          </ul>
                                        </li>
                                      </ol>
                                      
                                      <p className="font-medium mt-3 mb-1">Key Features:</p>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li>
                                          <strong>Replication:</strong> Multiple copies of data across nodes for fault tolerance
                                        </li>
                                        <li>
                                          <strong>Consistency Models:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Strong consistency: All reads reflect most recent writes</li>
                                            <li>Eventual consistency: Updates propagate asynchronously</li>
                                          </ul>
                                        </li>
                                        <li>
                                          <strong>Write Strategies:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Write-through: Update cache and backing store synchronously</li>
                                            <li>Write-behind: Update cache immediately, backing store asynchronously</li>
                                            <li>Write-around: Write directly to backing store, bypassing cache</li>
                                          </ul>
                                        </li>
                                        <li>
                                          <strong>Monitoring and Observability:</strong> Metrics for hit rates, latency, memory usage
                                        </li>
                                      </ul>
                                      
                                      <p className="font-medium mt-3 mb-1">Handling Failure Scenarios:</p>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li><strong>Node Failure:</strong> Rebalance data among remaining nodes</li>
                                        <li><strong>Network Partitions:</strong> Configure behavior (AP vs CP in CAP theorem)</li>
                                        <li><strong>Thundering Herd:</strong> Use request coalescing to prevent cache stampedes</li>
                                        <li><strong>Hot Keys:</strong> Shard hot keys across multiple nodes</li>
                                      </ul>
                                      
                                      <p className="mt-3">Amazon's ElastiCache and DynamoDB Accelerator (DAX) are examples of distributed cache services. Understanding distributed systems principles is essential for designing services that can scale to Amazon's needs.</p>
                                    </div>
                                  )}
                                  
                                  {company === 'infosys' && i === 1 && (
                                    <div>
                                      <p className="font-medium mb-2">Explain SOLID principles in object-oriented programming:</p>
                                      
                                      <p className="mb-2">SOLID is an acronym for five design principles that help make software designs more understandable, flexible, and maintainable.</p>
                                      
                                      <ol className="list-decimal pl-5 space-y-4 mt-3">
                                        <li>
                                          <strong>S - Single Responsibility Principle (SRP):</strong>
                                          <p className="mt-1">A class should have only one reason to change, meaning it should have only one job or responsibility.</p>
                                          
                                          <div className="mt-2">
                                            <p className="text-sm font-medium">Bad Example:</p>
                                            <pre className="bg-gray-100 p-2 rounded-md text-sm mt-1">
{`class User {
  constructor(name) { this.name = name; }
  
  getName() { return this.name; }
  saveToDatabase() { /* database logic */ }
  generateReport() { /* report generation logic */ }
}`}
                                            </pre>
                                            
                                            <p className="text-sm font-medium mt-2">Good Example:</p>
                                            <pre className="bg-gray-100 p-2 rounded-md text-sm mt-1">
{`class User {
  constructor(name) { this.name = name; }
  getName() { return this.name; }
}

class UserRepository {
  saveUser(user) { /* database logic */ }
}

class ReportGenerator {
  generateUserReport(user) { /* report generation logic */ }
}`}
                                            </pre>
                                          </div>
                                        </li>
                                        
                                        <li>
                                          <strong>O - Open/Closed Principle (OCP):</strong>
                                          <p className="mt-1">Software entities should be open for extension but closed for modification. This means you should be able to add new functionality without changing existing code.</p>
                                          
                                          <div className="mt-2">
                                            <p className="text-sm font-medium">Bad Example:</p>
                                            <pre className="bg-gray-100 p-2 rounded-md text-sm mt-1">
{`class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class AreaCalculator {
  calculateArea(shapes) {
    let area = 0;
    for (const shape of shapes) {
      if (shape instanceof Rectangle) {
        area += shape.width * shape.height;
      } else if (shape instanceof Circle) {
        area += Math.PI * shape.radius * shape.radius;
      }
      // Adding a new shape requires modifying this class
    }
    return area;
  }
}`}
                                            </pre>
                                            
                                            <p className="text-sm font-medium mt-2">Good Example:</p>
                                            <pre className="bg-gray-100 p-2 rounded-md text-sm mt-1">
{`class Shape {
  calculateArea() { /* to be implemented by subclasses */ }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  
  calculateArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class AreaCalculator {
  calculateArea(shapes) {
    return shapes.reduce((sum, shape) => sum + shape.calculateArea(), 0);
  }
}`}
                                            </pre>
                                          </div>
                                        </li>
                                        
                                        <li>
                                          <strong>L - Liskov Substitution Principle (LSP):</strong>
                                          <p className="mt-1">Subtypes must be substitutable for their base types without altering the correctness of the program. This means that objects of a superclass should be replaceable with objects of a subclass without affecting the functionality.</p>
                                          
                                          <div className="mt-2">
                                            <p className="text-sm font-medium">Example Violation:</p>
                                            <pre className="bg-gray-100 p-2 rounded-md text-sm mt-1">
{`class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  setWidth(width) { this.width = width; }
  setHeight(height) { this.height = height; }
  getArea() { return this.width * this.height; }
}

// Square is a special Rectangle where width = height
class Square extends Rectangle {
  setWidth(width) {
    super.setWidth(width);
    super.setHeight(width); // Violates LSP by changing behavior
  }
  
  setHeight(height) {
    super.setWidth(height); // Violates LSP by changing behavior
    super.setHeight(height);
  }
}`}
                                            </pre>
                                            
                                            <p className="text-sm font-medium mt-2">Better Approach:</p>
                                            <pre className="bg-gray-100 p-2 rounded-md text-sm mt-1">
{`class Shape {
  getArea() { /* to be implemented */ }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  
  setWidth(width) { this.width = width; }
  setHeight(height) { this.height = height; }
  getArea() { return this.width * this.height; }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  
  setSide(side) { this.side = side; }
  getArea() { return this.side * this.side; }
}`}
                                            </pre>
                                          </div>
                                        </li>
                                        
                                        <li>
                                          <strong>I - Interface Segregation Principle (ISP):</strong>
                                          <p className="mt-1">Clients should not be forced to depend on interfaces they do not use. This means creating specific interfaces rather than one general-purpose interface.</p>
                                          
                                          <div className="mt-2">
                                            <p className="text-sm font-medium">Bad Example:</p>
                                            <pre className="bg-gray-100 p-2 rounded-md text-sm mt-1">
{`interface Worker {
  work();
  eat();
  sleep();
}

// Robot can work but doesn't need to eat or sleep
class Robot implements Worker {
  work() { /* work implementation */ }
  eat() { /* empty or throw error */ }  // Forced to implement
  sleep() { /* empty or throw error */ } // Forced to implement
}`}
                                            </pre>
                                            
                                            <p className="text-sm font-medium mt-2">Good Example:</p>
                                            <pre className="bg-gray-100 p-2 rounded-md text-sm mt-1">
{`interface Workable {
  work();
}

interface Eatable {
  eat();
}

interface Sleepable {
  sleep();
}

class Human implements Workable, Eatable, Sleepable {
  work() { /* work implementation */ }
  eat() { /* eat implementation */ }
  sleep() { /* sleep implementation */ }
}

class Robot implements Workable {
  work() { /* work implementation */ }
}`}
                                            </pre>
                                          </div>
                                        </li>
                                        
                                        <li>
                                          <strong>D - Dependency Inversion Principle (DIP):</strong>
                                          <p className="mt-1">High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.</p>
                                          
                                          <div className="mt-2">
                                            <p className="text-sm font-medium">Bad Example:</p>
                                            <pre className="bg-gray-100 p-2 rounded-md text-sm mt-1">
{`class MySQLDatabase {
  save(data) { /* save to MySQL */ }
}

class UserService {
  constructor() {
    this.database = new MySQLDatabase(); // Direct dependency
  }
  
  saveUser(user) {
    this.database.save(user);
  }
}`}
                                            </pre>
                                            
                                            <p className="text-sm font-medium mt-2">Good Example:</p>
                                            <pre className="bg-gray-100 p-2 rounded-md text-sm mt-1">
{`interface Database {
  save(data);
}

class MySQLDatabase implements Database {
  save(data) { /* save to MySQL */ }
}

class MongoDatabase implements Database {
  save(data) { /* save to MongoDB */ }
}

class UserService {
  constructor(database) {
    this.database = database; // Dependency injection
  }
  
  saveUser(user) {
    this.database.save(user);
  }
}`}
                                            </pre>
                                          </div>
                                        </li>
                                      </ol>
                                      
                                      <p className="mt-3">Understanding and applying SOLID principles leads to code that is easier to maintain, extend, and test. These principles are especially important in enterprise-level applications like those developed at Infosys, where long-term maintainability is critical.</p>
                                    </div>
                                  )}
                                  
                                  {company === 'infosys' && i === 2 && (
                                    <div>
                                      <p className="font-medium mb-2">What is normalization in databases?</p>
                                      
                                      <p className="mb-2">Normalization is a database design technique that organizes tables in a manner that reduces redundancy and dependency by dividing large tables into smaller ones and defining relationships between them.</p>
                                      
                                      <p className="font-medium mt-3 mb-1">Goals of Normalization:</p>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li>Eliminate redundant data (reduce storage space)</li>
                                        <li>Ensure data dependencies make sense (data integrity)</li>
                                        <li>Simplify queries and facilitate database maintenance</li>
                                        <li>Prevent anomalies during data operations (insert, update, delete)</li>
                                      </ul>
                                      
                                      <p className="font-medium mt-3 mb-1">Normal Forms:</p>
                                      <ol className="list-decimal pl-5 space-y-3">
                                        <li>
                                          <strong>First Normal Form (1NF):</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Each table cell should contain a single atomic value</li>
                                            <li>No repeating groups or arrays</li>
                                            <li>Each record must be unique (identified by a primary key)</li>
                                          </ul>
                                          <div className="bg-gray-100 p-3 rounded-md mt-1 text-xs">
                                            <p><strong>Before 1NF:</strong></p>
                                            <table className="border-collapse table-auto w-full mt-1">
                                              <thead>
                                                <tr>
                                                  <th className="border border-gray-400 px-2 py-1">StudentID</th>
                                                  <th className="border border-gray-400 px-2 py-1">Courses</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td className="border border-gray-400 px-2 py-1">1</td>
                                                  <td className="border border-gray-400 px-2 py-1">Math, Science, History</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            
                                            <p className="mt-2"><strong>After 1NF:</strong></p>
                                            <table className="border-collapse table-auto w-full mt-1">
                                              <thead>
                                                <tr>
                                                  <th className="border border-gray-400 px-2 py-1">StudentID</th>
                                                  <th className="border border-gray-400 px-2 py-1">Course</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td className="border border-gray-400 px-2 py-1">1</td>
                                                  <td className="border border-gray-400 px-2 py-1">Math</td>
                                                </tr>
                                                <tr>
                                                  <td className="border border-gray-400 px-2 py-1">1</td>
                                                  <td className="border border-gray-400 px-2 py-1">Science</td>
                                                </tr>
                                                <tr>
                                                  <td className="border border-gray-400 px-2 py-1">1</td>
                                                  <td className="border border-gray-400 px-2 py-1">History</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </li>
                                        
                                        <li>
                                          <strong>Second Normal Form (2NF):</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Must be in 1NF</li>
                                            <li>All non-key attributes must depend on the entire primary key</li>
                                            <li>Removes partial dependencies (especially important with composite keys)</li>
                                          </ul>
                                          <div className="bg-gray-100 p-3 rounded-md mt-1 text-xs">
                                            <p><strong>Before 2NF:</strong></p>
                                            <table className="border-collapse table-auto w-full mt-1">
                                              <thead>
                                                <tr>
                                                  <th className="border border-gray-400 px-2 py-1">OrderID</th>
                                                  <th className="border border-gray-400 px-2 py-1">ProductID</th>
                                                  <th className="border border-gray-400 px-2 py-1">Quantity</th>
                                                  <th className="border border-gray-400 px-2 py-1">ProductName</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td className="border border-gray-400 px-2 py-1">1</td>
                                                  <td className="border border-gray-400 px-2 py-1">101</td>
                                                  <td className="border border-gray-400 px-2 py-1">2</td>
                                                  <td className="border border-gray-400 px-2 py-1">Laptop</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            
                                            <p className="mt-2"><strong>After 2NF (split into two tables):</strong></p>
                                            <p>Order_Items:</p>
                                            <table className="border-collapse table-auto w-full mt-1">
                                              <thead>
                                                <tr>
                                                  <th className="border border-gray-400 px-2 py-1">OrderID</th>
                                                  <th className="border border-gray-400 px-2 py-1">ProductID</th>
                                                  <th className="border border-gray-400 px-2 py-1">Quantity</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td className="border border-gray-400 px-2 py-1">1</td>
                                                  <td className="border border-gray-400 px-2 py-1">101</td>
                                                  <td className="border border-gray-400 px-2 py-1">2</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            
                                            <p className="mt-1">Products:</p>
                                            <table className="border-collapse table-auto w-full mt-1">
                                              <thead>
                                                <tr>
                                                  <th className="border border-gray-400 px-2 py-1">ProductID</th>
                                                  <th className="border border-gray-400 px-2 py-1">ProductName</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td className="border border-gray-400 px-2 py-1">101</td>
                                                  <td className="border border-gray-400 px-2 py-1">Laptop</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </li>
                                        
                                        <li>
                                          <strong>Third Normal Form (3NF):</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Must be in 2NF</li>
                                            <li>No transitive dependencies (non-key attributes depend only on the primary key)</li>
                                            <li>Attributes that depend on other non-key attributes are moved to separate tables</li>
                                          </ul>
                                          <div className="bg-gray-100 p-3 rounded-md mt-1 text-xs">
                                            <p><strong>Before 3NF:</strong></p>
                                            <table className="border-collapse table-auto w-full mt-1">
                                              <thead>
                                                <tr>
                                                  <th className="border border-gray-400 px-2 py-1">StudentID</th>
                                                  <th className="border border-gray-400 px-2 py-1">DepartmentID</th>
                                                  <th className="border border-gray-400 px-2 py-1">DepartmentName</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td className="border border-gray-400 px-2 py-1">1</td>
                                                  <td className="border border-gray-400 px-2 py-1">10</td>
                                                  <td className="border border-gray-400 px-2 py-1">Computer Science</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            
                                            <p className="mt-2"><strong>After 3NF (split into two tables):</strong></p>
                                            <p>Students:</p>
                                            <table className="border-collapse table-auto w-full mt-1">
                                              <thead>
                                                <tr>
                                                  <th className="border border-gray-400 px-2 py-1">StudentID</th>
                                                  <th className="border border-gray-400 px-2 py-1">DepartmentID</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td className="border border-gray-400 px-2 py-1">1</td>
                                                  <td className="border border-gray-400 px-2 py-1">10</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            
                                            <p className="mt-1">Departments:</p>
                                            <table className="border-collapse table-auto w-full mt-1">
                                              <thead>
                                                <tr>
                                                  <th className="border border-gray-400 px-2 py-1">DepartmentID</th>
                                                  <th className="border border-gray-400 px-2 py-1">DepartmentName</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td className="border border-gray-400 px-2 py-1">10</td>
                                                  <td className="border border-gray-400 px-2 py-1">Computer Science</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </li>
                                      </ol>
                                      
                                      <p className="font-medium mt-3 mb-1">Higher Normal Forms:</p>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li><strong>Boyce-Codd Normal Form (BCNF):</strong> Stricter version of 3NF where every determinant must be a candidate key</li>
                                        <li><strong>Fourth Normal Form (4NF):</strong> Addresses multi-valued dependencies</li>
                                        <li><strong>Fifth Normal Form (5NF):</strong> Deals with join dependencies</li>
                                      </ul>
                                      
                                      <p className="font-medium mt-3 mb-1">Trade-offs in Normalization:</p>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li><strong>Benefits:</strong> Data integrity, reduced redundancy, flexibility for future changes</li>
                                        <li><strong>Drawbacks:</strong> More complex queries involving joins, potential performance impact for read-heavy applications</li>
                                      </ul>
                                      
                                      <p className="mt-3">Infosys often works on large enterprise applications where proper database design is crucial. Understanding normalization principles helps ensure data integrity and maintainability across complex, long-lived systems.</p>
                                    </div>
                                  )}
                                  
                                  {company === 'infosys' && i === 3 && (
                                    <div>
                                      <p className="font-medium mb-2">Write a program to find the second highest salary from a table:</p>
                                      
                                      <p className="mb-2">This is a common SQL interview question that tests understanding of SQL, subqueries, and aggregate functions.</p>
                                      
                                      <p className="font-medium mt-3 mb-1">Approach 1: Using MAX function with subquery</p>
                                      <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);`}
                                      </pre>
                                      <p className="mt-1">This query finds the maximum salary that is less than the maximum salary in the table.</p>
                                      
                                      <p className="font-medium mt-3 mb-1">Approach 2: Using ORDER BY and LIMIT</p>
                                      <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`SELECT salary AS second_highest_salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;`}
                                      </pre>
                                      <p className="mt-1">This query orders all salaries in descending order, skips the first result (highest salary), and returns the next one.</p>
                                      
                                      <p className="font-medium mt-3 mb-1">Approach 3: Using DENSE_RANK() window function</p>
                                      <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`WITH ranked_salaries AS (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as salary_rank
  FROM employees
)
SELECT salary AS second_highest_salary
FROM ranked_salaries
WHERE salary_rank = 2;`}
                                      </pre>
                                      <p className="mt-1">This approach uses window functions to assign ranks to salaries and then filters for rank 2.</p>
                                      
                                      <p className="font-medium mt-3 mb-1">Handling Edge Cases:</p>
                                      <p>What if there is no second highest salary (e.g., all salaries are the same, or there's only one employee)?</p>
                                      
                                      <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`-- Returns NULL if no second highest salary exists
SELECT (
  SELECT DISTINCT salary
  FROM employees
  ORDER BY salary DESC
  LIMIT 1 OFFSET 1
) AS second_highest_salary;`}
                                      </pre>
                                      
                                      <p className="font-medium mt-3 mb-1">Extended Question: Nth Highest Salary</p>
                                      <p>A common follow-up is to write a function to find the Nth highest salary:</p>
                                      
                                      <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-x-auto">
{`CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  DECLARE result INT;
  SET N = N - 1; -- Adjust for LIMIT OFFSET
  
  SELECT DISTINCT salary INTO result
  FROM employees
  ORDER BY salary DESC
  LIMIT 1 OFFSET N;
  
  RETURN result;
END`}
                                      </pre>
                                      
                                      <p className="mt-3">This is a popular SQL problem that tests not only basic SQL knowledge but also understanding of subqueries, window functions, and edge case handling. Infosys often works with large enterprise databases, so SQL optimization is an important skill.</p>
                                    </div>
                                  )}
                                  
                                  {company === 'infosys' && i === 4 && (
                                    <div>
                                      <p className="font-medium mb-2">How would you optimize a slow-running SQL query?</p>
                                      
                                      <p className="mb-2">Optimizing SQL queries is a critical skill for database developers. Here's a comprehensive approach to diagnosing and fixing performance issues:</p>
                                      
                                      <p className="font-medium mt-3 mb-1">Step 1: Identify the Problem</p>
                                      <ol className="list-decimal pl-5 mt-1">
                                        <li>
                                          <strong>Use EXPLAIN (or EXPLAIN ANALYZE):</strong>
                                          <pre className="bg-gray-100 p-2 rounded-md text-sm mt-1">
{`EXPLAIN ANALYZE
SELECT * FROM orders
JOIN customers ON orders.customer_id = customers.id
WHERE orders.created_at > '2022-01-01';`}
                                          </pre>
                                          <p className="mt-1">This shows the query execution plan, including scan methods, join types, estimated/actual row counts, and execution time.</p>
                                        </li>
                                        <li><strong>Check query statistics:</strong> Look for full table scans, high row counts, or expensive operations</li>
                                        <li><strong>Profile the query:</strong> Use database-specific profiling tools to identify bottlenecks</li>
                                      </ol>
                                      
                                      <p className="font-medium mt-3 mb-1">Step 2: Query Structure Optimization</p>
                                      <ol className="list-decimal pl-5 mt-1">
                                        <li>
                                          <strong>Select only needed columns:</strong>
                                          <pre className="bg-gray-100 p-2 rounded-md text-sm mt-1">
{`-- Bad
SELECT * FROM large_table;

-- Good
SELECT id, name, relevant_column FROM large_table;`}
                                          </pre>
                                        </li>
                                        
                                        <li>
                                          <strong>Avoid unnecessary JOINs:</strong> Only join tables that are required
                                        </li>
                                        
                                        <li>
                                          <strong>Use appropriate JOIN types:</strong>
                                          <pre className="bg-gray-100 p-2 rounded-md text-sm mt-1">
{`-- Consider which type is appropriate:
-- INNER JOIN, LEFT JOIN, etc.`}
                                          </pre>
                                        </li>
                                        
                                        <li>
                                          <strong>Optimize WHERE clauses:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>Place the most restrictive conditions first</li>
                                            <li>Use indexed columns in WHERE clauses</li>
                                            <li>Avoid functions on indexed columns (which prevent index usage)</li>
                                          </ul>
                                        </li>
                                        
                                        <li>
                                          <strong>Limit result set size:</strong>
                                          <pre className="bg-gray-100 p-2 rounded-md text-sm mt-1">
{`-- Use LIMIT/TOP for pagination
SELECT * FROM large_table LIMIT 100 OFFSET 0;`}
                                          </pre>
                                        </li>
                                      </ol>
                                      
                                      <p className="font-medium mt-3 mb-1">Step 3: Index Optimization</p>
                                      <ol className="list-decimal pl-5 mt-1">
                                        <li>
                                          <strong>Create appropriate indexes:</strong>
                                          <pre className="bg-gray-100 p-2 rounded-md text-sm mt-1">
{`-- Add index on frequently queried columns
CREATE INDEX idx_orders_created_at ON orders(created_at);

-- Composite index for multiple conditions
CREATE INDEX idx_orders_customer_date ON orders(customer_id, created_at);`}
                                          </pre>
                                        </li>
                                        
                                        <li>
                                          <strong>Consider index types:</strong>
                                          <ul className="list-disc pl-5 mt-1">
                                            <li>B-tree indexes for equality and range queries</li>
                                            <li>Hash indexes for equality only</li>
                                            <li>Full-text indexes for text searching</li>
                                          </ul>
                                        </li>
                                        
                                        <li><strong>Avoid over-indexing:</strong> Too many indexes slow down writes and increase storage</li>
                                      </ol>
                                      
                                      <p className="font-medium mt-3 mb-1">Step 4: Query Rewriting Techniques</p>
                                      <ol className="list-decimal pl-5 mt-1">
                                        <li>
                                          <strong>Use EXISTS instead of IN for subqueries:</strong>
                                          <pre className="bg-gray-100 p-2 rounded-md text-sm mt-1">
{`-- Often faster
SELECT * FROM customers c
WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.id);`}
                                          </pre>
                                        </li>
                                        
                                        <li>
                                          <strong>Replace subqueries with JOINs when appropriate:</strong>
                                          <pre className="bg-gray-100 p-2 rounded-md text-sm mt-1">
{`-- Often more efficient
SELECT c.* FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE o.amount > 1000;`}
                                          </pre>
                                        </li>
                                        
                                        <li>
                                          <strong>Use UNION ALL instead of UNION when duplicates are acceptable:</strong>
                                          <pre className="bg-gray-100 p-2 rounded-md text-sm mt-1">
{`-- UNION ALL skips the distinct operation`}
                                          </pre>
                                        </li>
                                        
                                        <li>
                                          <strong>Consider CTEs or temporary tables for complex queries:</strong>
                                          <pre className="bg-gray-100 p-2 rounded-md text-sm mt-1">
{`WITH filtered_orders AS (
  SELECT * FROM orders WHERE created_at > '2022-01-01'
)
SELECT c.name, COUNT(o.id) 
FROM customers c
JOIN filtered_orders o ON c.id = o.customer_id
GROUP BY c.name;`}
                                          </pre>
                                        </li>
                                      </ol>
                                      
                                      <p className="font-medium mt-3 mb-1">Step 5: Database Level Optimizations</p>
                                      <ul className="list-disc pl-5 mt-1">
                                        <li><strong>Update statistics:</strong> Ensure the query optimizer has current data distribution information</li>
                                        <li><strong>Increase memory allocation:</strong> Adjust database configuration (query cache, buffer pool)</li>
                                        <li><strong>Partitioning:</strong> Split large tables into smaller, more manageable pieces</li>
                                        <li><strong>Consider denormalization:</strong> For read-heavy workloads, calculated columns or materialized views</li>
                                      </ul>
                                      
                                      <p className="mt-3">Query optimization is essential for enterprise applications like those Infosys develops. A well-optimized database can dramatically improve application performance and user experience.</p>
                                    </div>
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
                      Visit the <a href="https://www.bmsce.ac.in/" target="_blank" rel="noopener noreferrer" className="font-medium text-blue-700 hover:underline">official college website</a> for more resources and updates.
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
                      <a href="https://www.bmsce.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-medium">Access Resource</a>
                    </div>
                    
                    <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        Resume Templates
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">Specially curated resume templates approved by the placement cell for different roles and industries.</p>
                      <a href="https://www.bmsce.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-medium">Access Resource</a>
                    </div>
                    
                    <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Recorded Mock Interviews
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">Watch recorded mock interviews of senior students with feedback from recruiters and faculty.</p>
                      <a href="https://www.bmsce.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-medium">Access Resource</a>
                    </div>
                    
                    <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Placement Calendar
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">Upcoming placement drives, pre-placement talks, and company-specific preparation workshops.</p>
                      <a href="https://www.bmsce.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-medium">Access Resource</a>
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