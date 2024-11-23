import React, { useState } from "react";
// Example icons
import { RiDashboardLine, RiShoppingBasketLine } from "react-icons/ri";
import { FaTruckArrowRight } from "react-icons/fa6";
import { MdOutlinePayment, MdOutlineSecurity } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { TbMessageShare, TbLogout2 } from "react-icons/tb";

import { FaArrowRight } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import ThemeToggleButton from "./ThemeToggleButton";

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <aside
      className={` h-screen border-r border-gray-200 bg-white transition-all duration-300 ${
        isExpanded ? "w-44" : "w-16"
      }`}
    >
      <div className="flex flex-col items-center justify-center py-4 space-y-4">
        <button
          onClick={toggleSidebar}
          className="text-black w-full flex items-center justify-center"
        >
          {isExpanded ? (
            <div className="text-2xl">sellerapp</div>
          ) : (
            <div className="flex flex-row space-x-1 items-end">
              <div className="text-3xl ">
                <FaTruckArrowRight />
              </div>
              <div className="text-xs pb-1">
                <FaArrowRight />
              </div>
            </div>
          )}
        </button>

        {/* Navigation Links */}
        <div className="w-full mt-8 flex flex-col">
          {/* First Section (3 icons) */}
          <ul className="flex flex-col items-center justify-center space-y-2 text-gray-600 border-b border-gray-200 pb-2">
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <RiDashboardLine className="text-2xl" />
                {isExpanded && (
                  <span className="font-bold">
                    {isExpanded ? "Dashboard" : ""}
                  </span>
                )}
              </div>
            </li>
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <MdOutlinePayment className="text-2xl" />
                {isExpanded && (
                  <span className="font-bold">
                    {isExpanded ? "Payment" : ""}
                  </span>
                )}
              </div>
            </li>
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <GoPeople className="text-2xl" />
                {isExpanded && (
                  <span className="font-bold">
                    {isExpanded ? "Customers" : ""}
                  </span>
                )}
              </div>
            </li>
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <TbMessageShare className="text-2xl" />
                {isExpanded && (
                  <span className="font-bold">
                    {isExpanded ? "Messages" : ""}
                  </span>
                )}
              </div>
            </li>
          </ul>

          {/* Second Section (4 icons) */}
          <ul className="flex flex-col items-center justify-center space-y-2 text-gray-600 border-b border-gray-200 pb-2 pt-2">
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <RiShoppingBasketLine className="text-2xl" />
                {isExpanded && (
                  <span className="font-bold">
                    {isExpanded ? "Products" : ""}
                  </span>
                )}
              </div>
            </li>
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <LiaFileInvoiceDollarSolid className="text-2xl" />
                {isExpanded && (
                  <span className="font-bold">
                    {isExpanded ? "Invoice" : ""}
                  </span>
                )}
              </div>
            </li>
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <BsGraphUpArrow className="text-2xl" />
                {isExpanded && (
                  <span className="font-bold">
                    {isExpanded ? "Analytics" : ""}
                  </span>
                )}
              </div>
            </li>
          </ul>

          <ul className="flex flex-col items-center justify-center space-y-2 text-gray-600 border-b border-gray-200 pb-2 pt-2">
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <IoSettingsOutline className="text-2xl" />
                {isExpanded && (
                  <span className="font-bold">
                    {isExpanded ? "Settings" : ""}
                  </span>
                )}
              </div>
            </li>
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <MdOutlineSecurity className="text-2xl" />
                {isExpanded && (
                  <span className="font-bold">
                    {isExpanded ? "Security" : ""}
                  </span>
                )}
              </div>
            </li>
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <IoIosHelpCircleOutline className="text-2xl" />
                {isExpanded && (
                  <span className="font-bold">{isExpanded ? "Help" : ""}</span>
                )}
              </div>
            </li>
          </ul>

          {/* Fourth Section (1 icon) */}
          <ul className="flex flex-col items-center justify-center space-y-2 text-gray-600 pb-2 pt-2">
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <TbLogout2 className="text-2xl" />
                {isExpanded && (
                  <span className="font-bold">
                    {isExpanded ? "Log Out" : ""}
                  </span>
                )}
              </div>
            </li>
          </ul>
          {!isExpanded ? (
            <div className="flex  justify-center items-center fixed bottom-0 py-1 px-3 ">
              <ThemeToggleButton />
            </div>
          ) : (
            <div className="flex  justify-center items-center fixed bottom-0 py-1 px-3 ">
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span className="m-2">Light</span>
                <ThemeToggleButton />
                <span className="m-2">Dark</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
