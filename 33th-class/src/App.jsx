import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { RiResetRightLine } from "react-icons/ri";
import { FaToggleOn, FaToggleOff  } from "react-icons/fa6";




function App() {
 
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(true)

  const handlePlus = () => {
    setCount(count + 1)
  }

  const handleMinus = () => {
   count === 0 ? setCount(0) : setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  
  return (
    <>
    {/* <h1 className='text-9xl font-bold text-gray-700 text-center mt-6'><span className='text-red-700'>3</span><span className='text-blue-700'>3</span><sup className='text-yellow-700'>th</sup> <span className='text-amber-500'>-</span> <span className='text-orange-500'>C</span><span className='text-teal-500'>l</span><span className='text-fuchsia-700'>a</span><span className='text-pink-500'>s</span><span className='text-indigo-600'>s</span></h1> */}

    <div className={`flex justify-between h-screen px-20 py-4 ${darkMode ? 'bg-gray-600 text-gray-200' : 'bg-white text-black'}`}>
     <div className="flex items-start">
       <button onClick={handlePlus} className='bg-blue-500 flex items-center gap-2 p-3 rounded m-2 text-xl font-semibold cursor-pointer hover:bg-blue-400 hover:scale-101 transition-all ease-in-out duration-300' ><FaPlus />
 Plus</button>
      <p className={`m-2 text-3xl py-1 px-5 rounded  ${count > 5 ? 'bg-red-500' : 'bg-yellow-400'}`}>{count}</p>
      <button onClick={handleMinus} className={`flex items-center gap-2 p-3 rounded m-2 text-xl font-semibold cursor-pointer hover:bg-blue-400 hover:scale-101 transition-all ease-in-out duration-300 ${count === 0 ? 'bg-red-600 hidden' : 'bg-blue-500 block'}`}><MdDeleteOutline />
 Minus</button>
      <button onClick={handleReset} className='flex items-center gap-2 p-3 rounded m-2 bg-blue-500 text-xl font-semibold cursor-pointer hover:bg-blue-400 hover:scale-101 transition-all ease-in-out duration-300'><RiResetRightLine />
 Reset</button>
     </div>
    <div className="">
      <button className='cursor-pointer' onClick={handleDarkMode}>{darkMode ? <FaToggleOn  size={30} /> : < FaToggleOff  size={30} />
}</button>
    </div>
    </div>


    </>
  )
}

export default App
