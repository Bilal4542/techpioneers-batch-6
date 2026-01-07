import React, { useState } from 'react'

function App() {
 
  const [count, setCount] = useState(0)

  const handlePlus = () => {
    setCount(count + 1)
  }

  const handleMinus = () => {
    if(count === 0){
      setCount(0)
    }else{
      setCount(count - 1)
    }
  }

  const handleReset = () => {
    setCount(0)
  }
  
  return (
    <>
    {/* <h1 className='text-9xl font-bold text-gray-700 text-center mt-6'><span className='text-red-700'>3</span><span className='text-blue-700'>3</span><sup className='text-yellow-700'>th</sup> <span className='text-amber-500'>-</span> <span className='text-orange-500'>C</span><span className='text-teal-500'>l</span><span className='text-fuchsia-700'>a</span><span className='text-pink-500'>s</span><span className='text-indigo-600'>s</span></h1> */}

    <div className="flex justify-center items-center mt-9">
      <button onClick={handlePlus} className='bg-blue-500 p-3 rounded m-2'>plus</button>
      <p className={`m-2 text-3xl py-1 px-5 rounded  ${count > 5 ? 'bg-red-500' : 'bg-yellow-400'}`}>{count}</p>
      <button onClick={handleMinus} className={`p-3 rounded m-2 ${count === 0 ? 'bg-red-600 hidden' : 'bg-blue-500 block'}`}>minus</button>
      <button onClick={handleReset} className='p-3 rounded m-2 bg-blue-500'>Reset</button>
    </div>
    </>
  )
}

export default App
