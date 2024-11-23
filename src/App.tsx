// import "./App.css";

// function App() {
//   return (
//     <div className="flex flex-row h-screen w-screen">
//       <div className="w-[5%] h-full bg-blue-500"> Side</div>
//       <div className="flex flex-col w-full h-full">
//         <div className="w-full h-[8%] bg-red-500">Navbar</div>
//         <div className="bg-green-400 h-full w-full pt-6">
//           {/* card1 comp */}
//           <div className="flex flex-row  ml-8 justify-around  ">
//             <div className="w-[20%] h-[20%] bg-yellow-300"> Card1</div>
//           </div>

//           {/* Card2 comp */}

//           {/* <div className="flex flex-row ml-8 mt-8 justify-around ">
//             <div className="w-[915.15px] h-[299px] bg-pink-300"> Card1</div>
//             <div className="w-[444px] h-[299px] bg-yellow-300"> Card1</div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";

const App: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 bg-gray-100 p-4">
          <Comp1 />
          <Comp2 />
          <Comp3 />
        </div>
      </main>
    </div>
  );
};

export default App;
