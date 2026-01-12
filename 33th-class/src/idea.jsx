
import { useEffect, useState } from "react";



function App() {

  const[name, setname] = useState()
  


  const handlesubmit = (e) => {
    e.preventDefault()

    console.log("here is the name enter ", name)
  }

  return (
    <>

      <div className="w-full flex flex-col items-center mt-10">
        <h1 className="text-2xl font-bold mb-5">User Form</h1>

        <form onSubmit={handlesubmit} className="flex flex-col gap-3 w-96">
          <input
            type="text"
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter Name"
            required
            className="border p-2 rounded"
          />

          <input
            type="email"
            placeholder="Enter Email"
            required
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Enter Contact Number"
            required
            className="border p-2 rounded"
          />

          <input
            type="number"
            placeholder="Enter Age"
            required
            className="border p-2 rounded"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

      </div>
    </>
  )
}

export default idea