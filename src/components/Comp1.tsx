import React from "react";

const Comp1: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-4 mx-2 pb-6">
      <div className="bg-white p-4 rounded-lg shadow-lg col-span-12 md:col-span-6 lg:col-span-3">
        <h2 className="text-xl font-bold">Card 1</h2>
        <p>Content for Card 1</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg col-span-12 md:col-span-6 lg:col-span-3">
        <h2 className="text-xl font-bold">Card 1</h2>
        <p>Content for Card 1</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg col-span-12 md:col-span-6 lg:col-span-3">
        <h2 className="text-xl font-bold">Card 1</h2>
        <p>Content for Card 1</p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg col-span-12 md:col-span-6 lg:col-span-3">
        <h2 className="text-xl font-bold">Card 1</h2>
        <p>Content for Card 1</p>
      </div>
    </div>
  );
};

export default Comp1;
