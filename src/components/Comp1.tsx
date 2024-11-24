import React from "react";

const Comp1: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-6 mt-6 pb-6 mx-3">
      <div className="bg-white dark:bg-[#1F214A] dark:text-white border-2 border-gray-200 dark:border-[#1F214A] p-4 rounded-lg col-span-12 md:col-span-6 lg:col-span-3 ">
        <h2 className="text-md font-bold pb-2">Total Income</h2>
        <p className="text-3xl font-bold pb-4">$ 33,328.12</p>
        <div className="flex flex-row ">
          <div className="py-[1px] px-2 bg-[#B8E9D4] dark:bg-[#2CC483] rounded-md text-sm font-normal">
            ↑ 12.27%
          </div>
          <div className="text-sm mx-2 text-gray-500">
            Compared to last month
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#1F214A] dark:text-white border-2 border-gray-200 dark:border-[#1F214A] p-4 rounded-lg col-span-12 md:col-span-6 lg:col-span-3 ">
        <h2 className="text-md font-bold pb-2">Profit</h2>
        <p className="text-3xl font-bold pb-4">$ 8,583.09</p>
        <div className="flex flex-row ">
          <div className="py-[1px] px-2 bg-[#FDD5DA] dark:bg-[#FF5E75] rounded-md text-sm font-normal">
            ↓ 2.63
          </div>
          <div className="text-sm mx-2 text-gray-500">
            Compared to last month
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-[#1F214A] dark:text-white border-2 border-gray-200 dark:border-[#1F214A] p-4 rounded-lg col-span-12 md:col-span-6 lg:col-span-3 ">
        <h2 className="text-md font-bold pb-2">Total views</h2>
        <p className="text-3xl font-bold pb-4">52,234.32</p>
        <div className="flex flex-row ">
          <div className="py-[1px] px-2 bg-[#B8E9D4] dark:bg-[#2CC483] rounded-md text-sm font-normal">
            ↑ 1.46%
          </div>
          <div className="text-sm mx-2 text-gray-500">
            Compared to last month
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-[#1F214A] dark:text-white border-2 border-gray-200 dark:border-[#1F214A] p-4 rounded-lg col-span-12 md:col-span-6 lg:col-span-3 ">
        <h2 className="text-md font-bold pb-2">Conversion rate</h2>
        <p className="text-3xl font-bold pb-4">6.12%</p>
        <div className="flex flex-row ">
          <div className="py-[1px] px-2 bg-[#B8E9D4] dark:bg-[#2CC483] rounded-md text-sm font-normal">
            ↑ 8.75
          </div>
          <div className="text-sm mx-2 text-gray-500">
            Compared to last month
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp1;
