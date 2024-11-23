import React, { useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import "country-flag-icons/react/3x2"; // Import country flag icons

interface CountryOption {
  label: string; // Country name
  value: string; // Country code
  flag: string; // Flag class
}

const CountryPicker: React.FC = () => {
  const [value, setValue] = useState<CountryOption | null>(null);

  // Add flag icons to the country list
  const options = countryList()
    .getData()
    .map((country) => ({
      ...country,
      flag: `flag-icon flag-icon-${country.value.toLowerCase()}`, // Add flag class
    }));

  const handleChange = (selected: CountryOption | null) => {
    setValue(selected);
    console.log("Selected Country:", selected);
  };

  // Custom single value for the selected item
  const customSingleValue = (props: any) => (
    <div className="flex items-center">
      <div
        className={`${props.data.flag} w-5 h-5 rounded-full mr-2`}
        style={{ backgroundSize: "cover", backgroundPosition: "center" }}
      />
      {props.data.label}
    </div>
  );

  // Custom dropdown option
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
        className="text-gray-700"
        components={{ SingleValue: customSingleValue, Option: customOption }}
        isSearchable={false} // Disable the search bar
        styles={{
          control: (base) => ({
            ...base,
            borderRadius: "2rem", // rounded-2xl equivalent
            backgroundColor: "#F0F2F4", // gray-300 equivalent
            height: "2.5rem", // h-10 equivalent
            border: "1px solid #F0F2F4", // gray-300 border
            boxShadow: "none",
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
          }),
          menu: (base) => ({
            ...base,
            marginTop: "0px",
            borderRadius: "0.5rem", // rounded-2xl for dropdown menu
            overflow: "hidden",
          }),
        }}
      />
    </div>
  );
};

export default CountryPicker;
