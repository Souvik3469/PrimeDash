import React, { useState } from "react";
import CountryPicker from "./CountryPicker";
import avatar from "../assets/avatar.jpg";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white h-16 flex justify-between items-center border-b border-gray-200">
      {/* Logo */}
      <div className="flex w-[90%] h-full  border-r border-gray-200 justify-between items-center">
        <div className="mx-8 text-2xl font-bold"> Dashboard</div>
        <div className=" mx-8">
          <CountryPicker />
        </div>
      </div>
      <div className="flex w-[10%] h-full  justify-center items-center">
        <img src={avatar} className="h-11 w-11 rounded-full" />
      </div>
    </header>
  );
};

export default Navbar;
