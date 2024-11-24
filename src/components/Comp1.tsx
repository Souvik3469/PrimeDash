import React from "react";
import StatCard from "./StatCard";

const Comp1: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-6 mt-6 pb-6 mx-3">
      <StatCard
        title="Total Income"
        value="$ 33,328.12"
        change="12.27%"
        isPositive={true}
        comparisonText="Compared to last month"
      />
      <StatCard
        title="Profit"
        value="$ 8,583.09"
        change="2.63%"
        isPositive={false}
        comparisonText="Compared to last month"
      />
      <StatCard
        title="Total views"
        value="52,234.32"
        change="1.46%"
        isPositive={true}
        comparisonText="Compared to last month"
      />
      <StatCard
        title="Conversion rate"
        value="6.12%"
        change="8.75%"
        isPositive={true}
        comparisonText="Compared to last month"
      />
    </div>
  );
};

export default Comp1;
