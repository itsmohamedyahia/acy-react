"use client";

import "chart.js/auto";
import { Chart as ChartJS } from "chart.js";
import { Bar } from "react-chartjs-2";
import DownArrIconCircled from "@/ui/icons/downArrIconCircled";
import Card from "@/ui/card";
import "./analytics.css";
import ComingSoon from "@/components/overlay/comingSoon";

export default function DashboardAnalytics() {
  return (
    <Card className="relative home__analytics">
      <div className="w-full max-w-3xl rounded-xl bg-layer-2">
        <div className="flex justify-between">
          <div>
            <dt className="text-lg font-semibold text-heading">New Users</dt>
            <div className="mt-2" />
            <div className="flex items-center space-x-4">
              <dd className="text-3xl font-semibold text-heading">36</dd>
              <dd className="flex items-center space-x-2 text-red-500">
                <DownArrIconCircled className="w-5 h-5" />
                <span className="text-lg font-semibold">0.2%</span>
              </dd>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="inline-flex items-center justify-center px-3 py-2 text-xs font-semibold bg-transparent border-2 border-transparent cursor-pointer rounded-xl text-text hover:bg-heading/5 hover:text-heading focus:bg-heading/5 focus:outline-none focus:ring-2 focus:ring-heading/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-text"
            >
              View all
            </button>
          </div>
        </div>

        <div className="mt-5" />

        <Bar
          width={1000}
          height={238}
          data={chartData}
          options={chartOptions}
        />
      </div>
      <ComingSoon />
    </Card>
  );
}

// Chart setup
ChartJS.defaults.font.family = "Inter";
ChartJS.defaults.scale.grid.drawOnChartArea = false;
// ChartJS.defaults.scale.grid.drawBorder = false; look if there is new property in town or delete
ChartJS.defaults.elements.point.radius = 0;
ChartJS.defaults.scale.ticks.color = "#abadc6";
ChartJS.defaults.datasets.line.borderColor = "#2563eb";
ChartJS.defaults.datasets.bar.borderColor = "#2563eb";
ChartJS.defaults.datasets.bar.backgroundColor = "#2563eb";
ChartJS.defaults.datasets.bar.borderRadius = 4;
ChartJS.defaults.datasets.bar.maxBarThickness = 28;

// Chart data

const allMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export const chartData = {
  labels: allMonths,
  datasets: [
    {
      label: "",
      data: [50, 105, 290, 310, 350, 390, 410, 480, 520, 570, 590, 560]
    }
  ]
};

export const chartOptions = { plugins: { legend: { display: false } } };
