"use client";

import React from "react";
import { BucketItem, CATEGORY_EMOJIS } from "@/types/bucket";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

interface CategoryChartProps {
  items: BucketItem[];
}

const CHART_COLORS = [
  "#B76E79",
  "#E8A0A0",
  "#722F37",
  "#D4878F",
  "#C9868F",
  "#F9E4E4",
  "#9E5A63",
  "#FDE8E8",
  "#A0697E",
  "#D9A0A0",
  "#8B4553",
  "#EBC4C4",
];

export default function CategoryChart({ items }: CategoryChartProps) {
  const categoryData = React.useMemo(() => {
    const counts: Record<string, number> = {};
    items.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([name, value]) => ({
        name: `${CATEGORY_EMOJIS[name] || "📌"} ${name}`,
        value,
      }))
      .sort((a, b) => b.value - a.value);
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="card animate-slide-up">
      <h3 className="heading-cursive text-2xl text-gradient mb-4">
        Categories
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
            >
              {categoryData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={CHART_COLORS[index % CHART_COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255,248,240,0.95)",
                borderRadius: "24px",
                border: "1px solid rgba(183,110,121,0.2)",
                boxShadow: "0 4px 16px rgba(183,110,121,0.15)",
                color: "#722F37",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
