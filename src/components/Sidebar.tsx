import React from "react";
import { RiDashboardLine, RiShoppingBasketLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { FaTruckArrowRight } from "react-icons/fa6";
import { MdOutlinePayment, MdOutlineSecurity } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { TbMessageShare, TbLogout2 } from "react-icons/tb";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import ThemeToggleButton from "./ThemeToggleButton";
import { useSidebar } from "../context/SidebarContext";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isSidebarExpanded: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  isSidebarExpanded,
}) => (
  <li className="flex items-center justify-center w-full px-3">
    <div
      className={`hover:bg-[#696FFB3D] hover:cursor-pointer hover:text-[#696FFB] px-3 py-1 rounded-md flex flex-row space-x-2 ${
        isSidebarExpanded ? "justify-start w-full" : "justify-center"
      }`}
    >
      <span className="text-2xl">{icon}</span>
      {isSidebarExpanded && <span className="font-bold">{label}</span>}
    </div>
  </li>
);

const Sidebar: React.FC = () => {
  const { isSidebarExpanded, toggleSidebar } = useSidebar();

  const firstSectionItems = [
    { icon: <RiDashboardLine />, label: "Dashboard" },
    { icon: <MdOutlinePayment />, label: "Payment" },
    { icon: <GoPeople />, label: "Customers" },
    { icon: <TbMessageShare />, label: "Messages" },
  ];

  const secondSectionItems = [
    { icon: <RiShoppingBasketLine />, label: "Products" },
    { icon: <LiaFileInvoiceDollarSolid />, label: "Invoice" },
    { icon: <BsGraphUpArrow />, label: "Analytics" },
  ];

  const thirdSectionItems = [
    { icon: <IoSettingsOutline />, label: "Settings" },
    { icon: <MdOutlineSecurity />, label: "Security" },
    { icon: <IoIosHelpCircleOutline />, label: "Help" },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-full border-r border-[#00000029] dark:border-[#1F214A] bg-white dark:bg-[#1F214A] transition-all duration-300 ${
        isSidebarExpanded ? "w-44" : "w-16"
      }`}
    >
      <div className="flex flex-col items-center py-4 space-y-4">
        <button
          onClick={toggleSidebar}
          className="text-black dark:text-white w-full flex items-center justify-center"
        >
          {isSidebarExpanded ? (
            <div className="text-2xl">
              <span className="text-blue-400 font-semibold">Prime</span>Dash
            </div>
          ) : (
            <div className="flex flex-row space-x-1 items-end">
              <FaTruckArrowRight className="text-3xl" />
              <FaArrowRight className="text-xs pb-1" />
            </div>
          )}
        </button>

        <div className="w-full mt-8 flex flex-col">
          {/* First Section */}
          <ul className="flex flex-col items-center space-y-2 text-gray-600 dark:text-white border-b border-[#00000029] dark:border-[#FFFFFF29] pb-2">
            {firstSectionItems.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item.icon}
                label={item.label}
                isSidebarExpanded={isSidebarExpanded}
              />
            ))}
          </ul>

          {/* Second Section */}
          <ul className="flex flex-col items-center space-y-2 text-gray-600 dark:text-white border-b border-[#00000029] dark:border-[#FFFFFF29] pb-2 pt-2">
            {secondSectionItems.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item.icon}
                label={item.label}
                isSidebarExpanded={isSidebarExpanded}
              />
            ))}
          </ul>

          {/* Third Section */}
          <ul className="flex flex-col items-center space-y-2 text-gray-600 dark:text-white border-b border-[#00000029] dark:border-[#FFFFFF29] pb-2 pt-2">
            {thirdSectionItems.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item.icon}
                label={item.label}
                isSidebarExpanded={isSidebarExpanded}
              />
            ))}
          </ul>

          {/* Logout Section */}
          <ul className="flex flex-col items-center space-y-2 text-gray-600 dark:text-white pb-2 pt-2">
            <SidebarItem
              icon={<TbLogout2 />}
              label="Log Out"
              isSidebarExpanded={isSidebarExpanded}
            />
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
