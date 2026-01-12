import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const [phone, setPhone] = useState()


   
        const handleSubmit = (e) => {
            e.preventDefault()
                console.log('Name:', name)
                console.log('Email:', email)
                console.log('Age:', age)
                console.log('Phone:', phone)
            }

  return (
    <div>
         <form onSubmit={handleSubmit} className="flex flex-col space-y-3 px-10 pt-5 w-[30%]">
          <input  onChange={(e)=>setName(e.target.value)}  className="border p-2 rounded" type="text" placeholder="Enter Your Name" />
          <input  onChange={(e)=>setEmail(e.target.value)} className="border p-2 rounded " type="email" placeholder="Enter Your Email" />
          <input onChange={(e)=>setAge(e.target.value)} className="border p-2 rounded " type="number" placeholder="Enter Your Age" />
          <input  onChange={(e)=>setPhone(e.target.value)} className="border p-2 rounded" type="number" placeholder="Enter Your Phone" />
          <button type="submit" className="p-2 rounded bg-blue-500 font-semibold cursor-pointer" >Submit</button>
        </form>
    </div>
  )
}

export default Form
