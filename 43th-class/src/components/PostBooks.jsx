import axios from 'axios'
import React, { useState } from 'react'

const PostBooks = () => {

    const [bookCategory, setBookCategory] = useState('')
    const [bookTitle, setBookTitle] = useState('')
    const [bookDescription, setBookDescription] = useState('')
    const [bookPrice, setBookPrice] = useState('')

    const handleSubmit = async (e) => {
        const formdata = {
            bookCategory,bookTitle,bookDescription,bookPrice
        }
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:4000/book/postbook', formdata)
            // console.log(res.data.data)

            if(res.status === 200){
                alert("Book Posted Successfuly")
                setBookCategory('')
                setBookTitle('')
                setBookDescription('')
                setBookPrice('')
            }
        } catch (error) {
            console.log('error',error)
        }
    }
  return (
    <div className=''>
      <form onSubmit={handleSubmit} className='flex flex-col items-center space-y-3 px-10 pt-5 w-[80%] mx-auto'>
        <h1 className="text-xl text-blue-500 font-bold text-center">
           Post Book
       </h1>
        <input value={bookCategory} onChange={(e)=>setBookCategory(e.target.value)} className="border p-2 rounded w-[60%]" type="text" placeholder='book category' name="" id="" />
        <input value={bookTitle} onChange={(e)=>setBookTitle(e.target.value)} className="border p-2 rounded w-[60%]" type="text" placeholder='book title' name="" id="" />
        <textarea value={bookDescription} onChange={(e)=>setBookDescription(e.target.value)} type="text" className="border p-2 rounded w-[60%]" rows={5} placeholder='book description' name="" id="" />
        <input value={bookPrice} onChange={(e)=>setBookPrice(e.target.value)} type="number" className="border p-2 rounded w-[60%]" placeholder='book price' name="" id="" />
        <button type='submit' className="p-2 rounded bg-blue-500 font-semibold cursor-pointer px-10 hover:scale-105 transition-all ease-in-out duration-300">submit</button>
      </form>
    </div>
  )
}

export default PostBooks
