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
      <div className="bg-white dark:bg-[#1F214A] dark:border-[#1F214A] dark:text-white border-2 border-gray-200 p-4 rounded-lg col-span-12 md:col-span-5 lg:col-span-4">
        <h2 className="text-xl font-bold mb-4">Registered Users</h2>
        <div className="flex h-[230px] justify-center items-center">
          <Doughnut data={data} options={options} />
        </div>
      </div>
      <div className="bg-white dark:bg-[#1F214A] dark:border-[#1F214A] dark:text-white border-2 border-gray-200 p-4 rounded-lg col-span-12 md:col-span-7 lg:col-span-8">
        <h2 className="text-xl font-bold mb-4">Sales Integration</h2>
        <div>
          <div className="grid grid-cols-4 text-[#00000099] dark:text-[#FFFFFF99] bg-[#696FFB14] dark:bg-[#FFFFFF14] p-2 rounded-lg px-1 pr-6 mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-3 align-middle "
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: isDarkMode ? "00000099" : "FFFFFF99",
                }}
              />
              <div className="text-sm ">Application</div>
            </div>
            <div className="text-sm  text-center">Type</div>
            <div className="text-sm  text-center">Rate</div>
            <div className="text-sm  text-right">Profit</div>
          </div>

          <div className="grid grid-cols-4 text-[#00000099] dark:text-[#FFFFFF99] items-center border-b-2 border-[#00000029] dark:border-[#FFFFFF29] px-1 pb-6 mb-6">
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
                  className="h-6 w-6 mr-2  border-2 border-[#00000029] dark:border-[#FFFFFF29] "
                />
                <div className="text-sm ">Stripe</div>
              </div>
            </div>
            <div className="text-sm  text-center">Finance</div>
            <div className="flex flex-col items-center">
              <div className="flex w-full  justify-center ml-12">
                <div className="flex ml-12">
                  <div className="flex w-28 justify-center items-center">
                    <div className="h-1.5 w-[33%] bg-[#696FFB] rounded-lg"></div>
                    <div className="h-1.5 w-[67%] bg-[#696FFB33]  rounded-lg"></div>
                  </div>
                  <div className=" text-xs ml-2"> 33%</div>
                </div>
              </div>
            </div>
            <div className="text-sm  text-right">$ 10,998.28</div>
          </div>

          <div className="grid grid-cols-4 text-[#00000099] dark:text-[#FFFFFF99] items-center border-b-2 border-[#00000029] dark:border-[#FFFFFF29] px-1 pb-6 mb-6">
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
                  className="h-6 w-6 mr-2  border-2 border-[#00000029] dark:border-[#FFFFFF29] "
                />
                <div className="text-sm ">Zapier</div>
              </div>
            </div>
            <div className="text-sm  text-center">CRM</div>
            <div className="flex flex-col items-center">
              <div className="flex w-full  justify-center ml-12">
                <div className="flex ml-12">
                  <div className="flex w-28 justify-center items-center">
                    <div className="h-1.5 w-[27%] bg-[#696FFB] rounded-lg"></div>
                    <div className="h-1.5 w-[73%] bg-[#696FFB33] rounded-lg"></div>
                  </div>
                  <div className=" text-xs ml-2"> 27%</div>
                </div>
              </div>
            </div>
            <div className="text-sm  text-right">$ 8,998.59</div>
          </div>

          <div className="grid grid-cols-4 text-[#00000099] dark:text-[#FFFFFF99] items-center px-1 ">
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
                  className="h-6 w-6 mr-2  border-2 border-[#00000029] dark:border-[#FFFFFF29] "
                />
                <div className="text-sm ">Shopify</div>
              </div>
            </div>
            <div className="text-sm  text-center">Marketplace</div>
            <div className="flex flex-col items-center">
              <div className="flex w-full  justify-center ml-12">
                <div className="flex ml-12">
                  <div className="flex w-28 justify-center items-center">
                    <div className="h-1.5 w-[40%] bg-[#696FFB] rounded-lg"></div>
                    <div className="h-1.5 w-[60%] bg-[#696FFB33] rounded-lg"></div>
                  </div>
                  <div className=" text-xs ml-2"> 40%</div>
                </div>
              </div>
            </div>
            <div className="text-sm  text-right">$ 13,331.24</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp3;
