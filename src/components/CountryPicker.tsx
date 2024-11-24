import React, { useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import "country-flag-icons/react/3x2";
import { useTheme } from "../context/ThemeContext";

interface CountryOption {
  label: string;
  value: string;
  flag: string;
}

const CountryPicker: React.FC = () => {
  const [value, setValue] = useState<CountryOption | null>(null);
  const { isDarkMode } = useTheme();

  const options = countryList()
    .getData()
    .map((country) => ({
      ...country,
      flag: `flag-icon flag-icon-${country.value.toLowerCase()}`,
    }));

  const handleChange = (selected: CountryOption | null) => {
    setValue(selected);
    console.log("Selected Country:", selected);
  };

  const customSingleValue = (props: any) => (
    <div className="flex items-center">
      <div
        className={`${props.data.flag} w-5 h-5 rounded-full mr-2`}
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      />
      {props.data.label}
    </div>
  );

  const customOption = (props: any) => (
    <div
      {...props.innerRef}
      {...props.innerProps}
      className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
    >
      <div
        className={`${props.data.flag} w-5 h-5 rounded-full mr-2`}
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      />
      {props.data.label}
    </div>
  );

  return (
    <div className="">
      <Select
        options={options}
        value={value}
        onChange={handleChange}
        placeholder="Select a country"
        className="text-[#010715] dark:text-[#E0E0E2]"
        components={{ SingleValue: customSingleValue, Option: customOption }}
        isSearchable={false}
        styles={{
          control: (base) => ({
            ...base,
            borderRadius: "2rem",
            backgroundColor: isDarkMode ? "#212529" : "#F0F2F4",
            color: isDarkMode ? "#E0E0E2" : "#010715",
            height: "2.5rem",
            border: !isDarkMode ? "1px solid #F0F2F4" : "1px solid #212529",
            boxShadow: "none",
          }),
          singleValue: (base) => ({
            ...base,
            color: isDarkMode ? "#E0E0E2" : "#010715",
          }),
          placeholder: (base) => ({
            ...base,
            color: isDarkMode ? "#E0E0E2" : "#010715",
          }),
          valueContainer: (base) => ({
            ...base,
            padding: "0 8px",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }),
          dropdownIndicator: (base) => ({
            ...base,
            padding: "0 8px",
            color: isDarkMode ? "#E0E0E2" : "#010715",
          }),
          menu: (base) => ({
            ...base,
            marginTop: "0px",
            borderRadius: "0.5rem",
            overflow: "hidden",
            // backgroundColor: isDarkMode ? "#212529" : "#F0F2F4",
            backgroundColor: "#F0F2F4",
            color: isDarkMode ? "black" : "#010715",
            zIndex: 10,
          }),
          // option: (base, { isFocused }) => ({
          //   ...base,
          //   // backgroundColor: isFocused
          //   //   ? isDarkMode
          //   //     ? "white"
          //   //     : "white"
          //   //   : isDarkMode
          //   //   ? "black"
          //   //   : "black",
          //   color: isFocused ? "white" : "white",
          //   cursor: "pointer",
          // }),
        }}
      />
    </div>
  );
};

export default CountryPicker;
