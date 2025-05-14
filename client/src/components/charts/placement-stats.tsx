import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Department } from "@shared/schema";

interface PlacementStatsProps {
  data: Department[];
  title: string;
}

export function PlacementStats({ data, title }: PlacementStatsProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <Chart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="highestPackage"
                name="Highest Package (LPA)"
                fill="#3B4FD8" /* Dark Blue */
              />
              <Bar
                dataKey="avgPackage"
                name="Average Package (LPA)"
                fill="#94B3D2" /* Light Blue */
              />
              <Bar
                dataKey="placementRate"
                name="Placement Rate (%)"
                fill="#8E44AD" /* Purple */
              />
            </Chart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
