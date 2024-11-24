import React from "react";
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
import { useSidebar } from "../context/SidebarContext";

const Sidebar: React.FC = () => {
  const { isSidebarExpanded, toggleSidebar } = useSidebar();

  return (
    <aside
      className={`fixed top-0 left-0 h-full border-r border-[#00000029] dark:border-[#1F214A] bg-white dark:bg-[#1F214A] transition-all duration-300 ${
        isSidebarExpanded ? "w-44" : "w-16"
      }`}
    >
      <div className="flex flex-col items-center justify-center py-4 space-y-4 ">
        <button
          onClick={toggleSidebar}
          className="text-black dark:text-white w-full flex items-center justify-center"
        >
          {isSidebarExpanded ? (
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

        <div className="w-full mt-8 flex flex-col">
          {/* First Section (3 icons) */}
          <ul className="flex flex-col items-center justify-center space-y-2 text-gray-600 dark:text-white border-b border-[#00000029] dark:border-[#FFFFFF29] pb-2">
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isSidebarExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <RiDashboardLine className="text-2xl" />
                {isSidebarExpanded && (
                  <span className="font-bold">
                    {isSidebarExpanded ? "Dashboard" : ""}
                  </span>
                )}
              </div>
            </li>
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isSidebarExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <MdOutlinePayment className="text-2xl" />
                {isSidebarExpanded && (
                  <span className="font-bold">
                    {isSidebarExpanded ? "Payment" : ""}
                  </span>
                )}
              </div>
            </li>
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isSidebarExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <GoPeople className="text-2xl" />
                {isSidebarExpanded && (
                  <span className="font-bold">
                    {isSidebarExpanded ? "Customers" : ""}
                  </span>
                )}
              </div>
            </li>
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isSidebarExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <TbMessageShare className="text-2xl" />
                {isSidebarExpanded && (
                  <span className="font-bold">
                    {isSidebarExpanded ? "Messages" : ""}
                  </span>
                )}
              </div>
            </li>
          </ul>

          {/* Second Section (4 icons) */}
          <ul className="flex flex-col items-center justify-center space-y-2 text-gray-600 dark:text-white border-b border-[#00000029  dark:border-[#FFFFFF29] pb-2 pt-2">
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isSidebarExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <RiShoppingBasketLine className="text-2xl" />
                {isSidebarExpanded && (
                  <span className="font-bold">
                    {isSidebarExpanded ? "Products" : ""}
                  </span>
                )}
              </div>
            </li>
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isSidebarExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <LiaFileInvoiceDollarSolid className="text-2xl" />
                {isSidebarExpanded && (
                  <span className="font-bold">
                    {isSidebarExpanded ? "Invoice" : ""}
                  </span>
                )}
              </div>
            </li>
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isSidebarExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <BsGraphUpArrow className="text-2xl" />
                {isSidebarExpanded && (
                  <span className="font-bold">
                    {isSidebarExpanded ? "Analytics" : ""}
                  </span>
                )}
              </div>
            </li>
          </ul>

          <ul className="flex flex-col items-center justify-center space-y-2 text-gray-600 dark:text-white border-b order-[#00000029 dark:border-[#FFFFFF29] pb-2 pt-2">
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isSidebarExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <IoSettingsOutline className="text-2xl" />
                {isSidebarExpanded && (
                  <span className="font-bold">
                    {isSidebarExpanded ? "Settings" : ""}
                  </span>
                )}
              </div>
            </li>
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isSidebarExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <MdOutlineSecurity className="text-2xl" />
                {isSidebarExpanded && (
                  <span className="font-bold">
                    {isSidebarExpanded ? "Security" : ""}
                  </span>
                )}
              </div>
            </li>
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isSidebarExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <IoIosHelpCircleOutline className="text-2xl" />
                {isSidebarExpanded && (
                  <span className="font-bold">
                    {isSidebarExpanded ? "Help" : ""}
                  </span>
                )}
              </div>
            </li>
          </ul>

          {/* Fourth Section (1 icon) */}
          <ul className="flex flex-col items-center justify-center space-y-2 text-gray-600 dark:text-white pb-2 pt-2">
            <li className="flex items-center justify-center w-full px-3">
              <div
                className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
                  isSidebarExpanded ? "justify-start w-full" : "justify-center"
                }`}
              >
                <TbLogout2 className="text-2xl" />
                {isSidebarExpanded && (
                  <span className="font-bold">
                    {isSidebarExpanded ? "Log Out" : ""}
                  </span>
                )}
              </div>
            </li>
          </ul>
          {!isSidebarExpanded ? (
            <div className="flex  justify-center items-center fixed bottom-0 py-1 px-3 ">
              <ThemeToggleButton />
            </div>
          ) : (
            <div className="flex  justify-center items-center fixed bottom-0 py-1 px-3 ">
              <div className="flex justify-between items-center text-sm text-gray-600 dark:text-white">
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
