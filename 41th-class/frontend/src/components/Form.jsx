import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [phone, setPhone] = useState("")

  

  
   
        const handleSubmit = async (e) => {
            e.preventDefault()
            const userData = {
                userName:name,
                userEmail:email,
                userAge:age,
                userPhone:phone}
    try {
        
        const res = await axios.post('http://localhost:3000/user/postuser', userData)
        console.log(res.data.data)

        if(res.status === 200){
            alert('Form Submitted Submitted')
            setName('')
            setEmail('')
            setAge('')
            setPhone('')
        }

    } catch (error) {
        console.error("Error:", error);
    }
            }

  
   

  return (
    <>
     <div>
         <form onSubmit={handleSubmit} className="flex flex-col space-y-3 px-10 pt-5 w-[30%]">
          <h1 className='text-xl text-blue-500 font-bold text-center'>User Form</h1>
          <input value={name}  onChange={(e)=>setName(e.target.value)}  className="border p-2 rounded" type="text" placeholder="Enter Your Name" />
          <input value={email}  onChange={(e)=>setEmail(e.target.value)} className="border p-2 rounded " type="email" placeholder="Enter Your Email" />
          <input value={age} onChange={(e)=>setAge(e.target.value)} className="border p-2 rounded " type="number" placeholder="Enter Your Age" />
          <input value={phone}  onChange={(e)=>setPhone(e.target.value)} className="border p-2 rounded" type="number" placeholder="Enter Your Phone" />
          <button type="submit" className="p-2 rounded bg-blue-500 font-semibold cursor-pointer" >Submit</button>
        </form>
    </div>
    
    </>
  )
}

export default Form
