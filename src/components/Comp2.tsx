import React from "react";

const Comp2: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-6 mx-2 pb-6">
      <div className="bg-white p-4 rounded-lg shadow-lg col-span-12 md:col-span-7 lg:col-span-8">
        <h2 className="text-xl font-bold">Card 1</h2>
        <p>Content for Card 1</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg col-span-12 md:col-span-5 lg:col-span-4">
        <h2 className="text-xl font-bold">Card 1</h2>
        <p>Content for Card 1</p>
      </div>
    </div>
  );
};

export default Comp2;
