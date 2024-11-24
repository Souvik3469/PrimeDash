import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import { useSidebar } from "./context/SidebarContext";

const App: React.FC = () => {
  const { isSidebarExpanded } = useSidebar();
  return (
    <div className="flex font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isSidebarExpanded ? "pl-44" : "pl-16"
        }`}
      >
        <Navbar />
        <div className="flex-1 bg-[#696FFB0A] dark:bg-[#545469] p-4">
          <Comp1 />
          <Comp2 />
          <Comp3 />
        </div>
      </main>
    </div>
  );
};

export default App;
