import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale, // Register RadialLinearScale
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Radar } from "react-chartjs-2";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale, // Register the radialLinear scale for Radar chart
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Comp2: React.FC = () => {
  // Data for the line chart
  const lineChartData = {
    labels: [
      "Jan 2024",
      "Feb 2024",
      "Mar 2024",
      "Apr 2024",
      "May 2024",
      "Jun 2024",
      "Jul 2024",
      "Aug 2024",
      "Sep 2024",
      "Oct 2024",
      "Nov 2024",
      "Dec 2024",
    ],
    datasets: [
      {
        label: "Total Revenue",
        data: [40, 50, 60, 45, 70, 55, 75, 65, 80, 60, 85, 70],
        borderColor: "#696FFB", // Blue line
        backgroundColor: "#696FFB", // Light blue point background
        borderWidth: 2,
        pointRadius: 4,
        tension: 0, // Zigzag lines
      },
      {
        label: "Total Target",
        data: [45, 55, 50, 50, 75, 60, 70, 80, 75, 65, 90, 60], // Irregular pattern
        borderColor: "#FF9E2B", // Yellow line
        backgroundColor: "#FF9E2B", // Light yellow point background
        borderWidth: 2,
        pointRadius: 4,
        tension: 0, // Zigzag lines
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          boxWidth: 6,
          boxHeight: 6,
          usePointStyle: true,
        },
      },
      // title: {
      //   display: true,
      //   text: "Revenue vs Target (Zigzag Line Chart)",
      // },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Revenue ($K)",
        },
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  // Custom plugin for chart area background
  const chartAreaBackground = {
    id: "chartAreaBackground",
    beforeDraw: (chart: any) => {
      const {
        ctx,
        chartArea: { left, right, top, bottom },
      } = chart;
      ctx.save();
      ctx.fillStyle = "#696FFB0A"; // gray-300
      ctx.fillRect(left, top, right - left, bottom - top);
      ctx.restore();
    },
  };

  // Data for the radar chart
  const radarChartData = {
    labels: [
      "Region 1",
      "Region 2",
      "Region 3",
      "Region 4",
      "Region 5",
      "Region 6",
    ],
    datasets: [
      {
        label: "Sales by Region",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "#64A2FF52", // Light blue
        borderColor: "#696FFB", // Blue border
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  const radarChartOptions = {
    plugins: {
      legend: {
        position: "top" as const,
        display: false,
      },
      // title: {
      //   display: true,
      //   text: "Sales by Region (Wagon Wheel)",
      // },
    },
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        beginAtZero: true,
        ticks: {
          display: false, // Hide radial ticks for a cleaner look
        },
      },
    },
  };

  return (
    <div className="grid grid-cols-12 gap-6 mx-2 pb-6">
      {/* First Card with Line Chart */}
      <div className="bg-white border-2 border-gray-200 p-4 rounded-lg col-span-12 md:col-span-7 lg:col-span-8">
        <h2 className="text-xl font-bold mb-4">Total Revenue vs Target</h2>
        <div className="flex h-[230px] justify-center items-center">
          <Line
            data={lineChartData}
            options={lineChartOptions}
            plugins={[chartAreaBackground]} // Apply the plugin here
          />
        </div>
      </div>

      {/* Second Card with Radar Chart */}
      <div className="bg-white border-2 border-gray-200 p-4 rounded-lgcol-span-12 md:col-span-5 lg:col-span-4">
        <h2 className="text-xl font-bold mb-4">Sales by Region</h2>
        <div className="flex h-[230px] justify-center items-center">
          <Radar data={radarChartData} options={radarChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Comp2;
