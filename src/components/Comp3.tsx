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
import { BsStripe } from "react-icons/bs";
import Stripe from "../assets/stripe-icon.svg";
import Shopify from "../assets/shopify-icon.svg";
import Zapier from "../assets/zapier-icon.svg";

// Registering necessary chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

const Comp3: React.FC = () => {
  // Data for the chart
  const data = {
    labels: ["Premium User", "Basic User"],
    datasets: [
      {
        data: [66, 33],
        backgroundColor: ["#696FFB", "#696FFB99"], // Green for Premium, Orange for Basic
        borderWidth: 0,
      },
    ],
  };

  // Options for the chart to make it a half doughnut chart
  const options = {
    responsive: true,
    cutout: "70%", // Makes it a doughnut
    rotation: -90, // Starts the chart from the top
    circumference: 180, // Half circle
    plugins: {
      legend: {
        position: "bottom", // Legend position at the bottom
        labels: {
          boxWidth: 5,
          boxHeight: 30,
          // padding: 20,
        },
      },
    },
  };

  return (
    <div className="grid grid-cols-12 gap-6 mx-2">
      <div className="bg-white border-2 border-gray-200 p-6 rounded-lg col-span-12 md:col-span-5 lg:col-span-4">
        <h2 className="text-xl font-bold mb-4">Registered Users</h2>
        <div className="flex h-[230px] justify-center items-center">
          <Doughnut data={data} options={options} />
        </div>
      </div>
      <div className="bg-white border-2 border-gray-200 p-6 rounded-lg col-span-12 md:col-span-7 lg:col-span-8">
        <h2 className="text-xl font-bold mb-4">Sales Integration</h2>
        <div>
          {/* Header Row */}
          <div className="grid grid-cols-4 bg-gray-200 p-2 rounded-lg px-1 pr-6 mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-3 align-middle"
                style={{
                  width: "15px",
                  height: "15px",
                }}
              />
              <div className="text-sm text-gray-600">Application</div>
            </div>
            <div className="text-sm text-gray-600 text-center">Type</div>
            <div className="text-sm text-gray-600 text-center">Rate</div>
            <div className="text-sm text-gray-600 text-right">Profit</div>
          </div>

          <div className="grid grid-cols-4 items-center border-b-2 border-gray-200 px-1 pb-6 mb-6">
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
                  src={Stripe}
                  className="h-6 w-6 mr-2  border-2 border-gray-200 "
                />
                <div className="text-sm text-gray-600">Stripe</div>
              </div>
            </div>
            <div className="text-sm text-gray-600 text-center">Finance</div>
            <div className="flex flex-col items-center">
              <div className="flex w-full  justify-center ml-12">
                <div className="flex ml-12">
                  <div className="flex w-28 justify-center items-center">
                    <div className="h-1.5 w-[33%] bg-[#696FFB] rounded-lg"></div>
                    <div className="h-1.5 w-[67%] bg-[#696FFB33] rounded-lg"></div>
                  </div>
                  <div className="text-gray-600 text-xs ml-2"> 33%</div>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-600 text-right">$ 10,998.28</div>
          </div>

          <div className="grid grid-cols-4 items-center border-b-2 border-gray-200 px-1 pb-6 mb-6">
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
                  src={Zapier}
                  className="h-6 w-6 mr-2  border-2 border-gray-200 "
                />
                <div className="text-sm text-gray-600">Zapier</div>
              </div>
            </div>
            <div className="text-sm text-gray-600 text-center">CRM</div>
            <div className="flex flex-col items-center">
              <div className="flex w-full  justify-center ml-12">
                <div className="flex ml-12">
                  <div className="flex w-28 justify-center items-center">
                    <div className="h-1.5 w-[27%] bg-[#696FFB] rounded-lg"></div>
                    <div className="h-1.5 w-[73%] bg-[#696FFB33] rounded-lg"></div>
                  </div>
                  <div className="text-gray-600 text-xs ml-2"> 27%</div>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-600 text-right">$ 8,998.59</div>
          </div>

          <div className="grid grid-cols-4 items-center  px-1 ">
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
                  src={Shopify}
                  className="h-6 w-6 mr-2  border-2 border-gray-200 "
                />
                <div className="text-sm text-gray-600">Shopify</div>
              </div>
            </div>
            <div className="text-sm text-gray-600 text-center">Marketplace</div>
            <div className="flex flex-col items-center">
              <div className="flex w-full  justify-center ml-12">
                <div className="flex ml-12">
                  <div className="flex w-28 justify-center items-center">
                    <div className="h-1.5 w-[40%] bg-[#696FFB] rounded-lg"></div>
                    <div className="h-1.5 w-[60%] bg-[#696FFB33] rounded-lg"></div>
                  </div>
                  <div className="text-gray-600 text-xs ml-2"> 40%</div>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-600 text-right">$ 13,331.24</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp3;
