import { Sidebar } from "@/components/navigation/sidebar";
import { CareerGuidance } from "@/components/career/career-guidance";

export default function CareerGuidancePage() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-800">
      <Sidebar />
      <div className="flex-1 p-8 lg:pl-8 pl-20">
        <div className="max-w-7xl mx-auto">
          <CareerGuidance />
        </div>
      </div>
    </div>
  );
}