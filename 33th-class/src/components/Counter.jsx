import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { RiResetRightLine } from "react-icons/ri";
import { FaToggleOn, FaToggleOff } from "react-icons/fa6";


const Counter = () => {
      const [count, setCount] = useState(0);
     
      const [darkMode, setDarkMode] = useState(true);

    const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    count === 0 ? setCount(0) : setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

 
  return (
    <div>
         <div
        className={`flex h-screen justify-between px-20 py-4 ${
          darkMode ? "bg-gray-600 text-gray-200" : "bg-white text-black"
        }`}
      >
        <div className="flex items-start">
          <button
            onClick={handlePlus}
            className="bg-blue-500 flex items-center gap-2 p-3 rounded m-2 text-xl font-semibold cursor-pointer hover:bg-blue-400 hover:scale-101 transition-all ease-in-out duration-300"
          >
            <FaPlus />
            Plus
          </button>
          <p
            className={`m-2 text-3xl py-1 px-5 rounded  ${
              count > 5 ? "bg-red-500" : "bg-yellow-400"
            }`}
          >
            {count}
          </p>
          <button
            onClick={handleMinus}
            className={`flex items-center gap-2 p-3 rounded m-2 text-xl font-semibold cursor-pointer hover:bg-blue-400 hover:scale-101 transition-all ease-in-out duration-300 ${
              count === 0 ? "bg-red-600 hidden" : "bg-blue-500 block"
            }`}
          >
            <MdDeleteOutline />
            Minus
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 p-3 rounded m-2 bg-blue-500 text-xl font-semibold cursor-pointer hover:bg-blue-400 hover:scale-101 transition-all ease-in-out duration-300"
          >
            <RiResetRightLine />
            Reset
          </button>
        </div>
        <div className="">
           <button className="cursor-pointer" onClick={handleDarkMode}>
            {darkMode ? <FaToggleOn size={30} /> : <FaToggleOff size={30} />}
          </button>
        </div>
     
      </div>
    </div>
  )
}

export default Counter
