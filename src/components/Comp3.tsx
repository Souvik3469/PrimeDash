import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import Stripe from "../assets/stripe-icon.svg";
import Shopify from "../assets/shopify-icon.svg";
import Zapier from "../assets/zapier-icon.svg";
import { useTheme } from "../context/ThemeContext";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

const IntegrationRow: React.FC<{
  icon: string;
  name: string;
  type: string;
  rate: number;
  profit: string;
  hasBorder?: boolean;
  hasPadding?: boolean;
}> = ({
  icon,
  name,
  type,
  rate,
  profit,
  hasBorder = true,
  hasPadding = true,
}) => {
  return (
    <div
      className={`grid grid-cols-4 text-[#00000099] dark:text-[#FFFFFF99] items-center px-1  ${
        hasBorder
          ? "border-b-2 border-[#00000029] dark:border-[#FFFFFF29] mb-6"
          : ""
      }
          ${hasPadding ? "pb-6" : ""}
         
      `}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-3 align-middle"
          style={{
            width: "15px",
            height: "15px",
          }}
        />
        <div className="flex items-center">
          <img
            src={icon}
            className="h-6 w-6 mr-2 border-2 border-[#00000029] dark:border-[#FFFFFF29]"
          />
          <div className="text-sm">{name}</div>
        </div>
      </div>
      <div className="text-sm text-center">{type}</div>
      <div className="flex flex-col items-center">
        <div className="flex w-full justify-center ml-12">
          <div className="flex ml-12">
            <div className="flex w-28 justify-center items-center">
              <div
                className="h-1.5"
                style={{
                  width: `${rate}%`,
                  backgroundColor: "#696FFB",
                  borderRadius: "4px",
                }}
              ></div>
              <div
                className="h-1.5"
                style={{
                  width: `${100 - rate}%`,
                  backgroundColor: "#696FFB33",
                  borderRadius: "4px",
                }}
              ></div>
            </div>
            <div className="text-xs ml-2">{rate}%</div>
          </div>
        </div>
      </div>
      <div className="text-sm text-right">{profit}</div>
    </div>
  );
};

const Comp3: React.FC = () => {
  const { isDarkMode } = useTheme();
  const data = {
    labels: ["Premium User", "Basic User"],
    datasets: [
      {
        data: [66, 33],
        backgroundColor: ["#696FFB", "#696FFB99"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "70%",
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          boxWidth: 5,
          boxHeight: 30,
          color: isDarkMode ? "#FFFFFF99" : "#00000099",
        },
      },
    },
  };

  return (
    <div className="grid grid-cols-12 gap-6 mx-2">
      {/* Registered Users */}
      <div className="bg-white dark:bg-[#1F214A] dark:border-[#1F214A] dark:text-white border-2 border-gray-200 p-4 rounded-lg col-span-12 md:col-span-5 lg:col-span-4">
        <h2 className="text-xl font-bold mb-4">Registered Users</h2>
        <div className="flex h-[230px] justify-center items-center">
          <Doughnut data={data} options={options} />
        </div>
      </div>

      {/* Sales Integration */}
      <div className="bg-white dark:bg-[#1F214A] dark:border-[#1F214A] dark:text-white border-2 border-gray-200 p-4 rounded-lg col-span-12 md:col-span-7 lg:col-span-8">
        <h2 className="text-xl font-bold mb-4">Sales Integration</h2>
        <div>
          {/* Header Row */}
          <div className="grid grid-cols-4 text-[#00000099] dark:text-[#FFFFFF99] bg-[#696FFB14] dark:bg-[#FFFFFF14] p-2 rounded-lg px-1 pr-6 mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-3 align-middle"
                style={{
                  width: "15px",
                  height: "15px",
                }}
              />
              <div className="text-sm">Application</div>
            </div>
            <div className="text-sm text-center">Type</div>
            <div className="text-sm text-center">Rate</div>
            <div className="text-sm text-right">Profit</div>
          </div>

          {/* Integration Rows */}
          <IntegrationRow
            icon={Stripe}
            name="Stripe"
            type="Finance"
            rate={33}
            profit="$10,998.28"
          />
          <IntegrationRow
            icon={Zapier}
            name="Zapier"
            type="CRM"
            rate={27}
            profit="$8,998.59"
          />
          <IntegrationRow
            icon={Shopify}
            name="Shopify"
            type="Marketplace"
            rate={40}
            profit="$13,331.24"
            hasBorder={false}
            hasPadding={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Comp3;
