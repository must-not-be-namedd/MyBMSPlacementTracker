import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Department } from "@shared/schema";

interface GrowthTrendProps {
  data: Department[];
  title: string;
  metric: "highestPackage" | "avgPackage" | "placementRate";
  metricName: string;
  lineColor: string;
}

export function GrowthTrend({ 
  data, 
  title, 
  metric, 
  metricName, 
  lineColor 
}: GrowthTrendProps) {
  // Sort data by year to ensure correct trend display
  const sortedData = [...data].sort((a, b) => a.year - b.year);

  // Calculate growth percentages between consecutive years
  const dataWithGrowth = sortedData.map((item, index) => {
    if (index === 0) {
      return {
        ...item,
        growth: 0 // No growth for first year
      };
    }
    
    const previousValue = Number(sortedData[index - 1][metric]);
    const currentValue = Number(item[metric]);
    const growthPercent = previousValue > 0 
      ? ((currentValue - previousValue) / previousValue) * 100 
      : 0;
    
    return {
      ...item,
      growth: Math.round(growthPercent * 10) / 10 // Round to 1 decimal place
    };
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dataWithGrowth} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip 
                formatter={(value: any, name: string) => {
                  if (name === "growth") {
                    return [`${value}%`, "YoY Growth"];
                  }
                  return [value, metricName];
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey={metric}
                name={metricName}
                stroke={
                  metric === "highestPackage" ? "#3B4FD8" : // Dark Blue
                  metric === "avgPackage" ? "#94B3D2" : // Light Blue
                  "#8E44AD" // Purple
                }
                strokeWidth={2}
                dot={{ r: 5 }}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="growth"
                name="YoY Growth (%)"
                stroke="#D8A1E9" /* Light Purple - from palette */
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}