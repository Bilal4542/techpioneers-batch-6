import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
const Home = () => {

    const [books, setBooks] = useState([])

    const getbooks = async () => {
        try {
            const res = await axios.get('http://localhost:4000/book/getbooks')
            console.log(res.data.data)
            setBooks(res.data.data)
        } catch (error) {
            console.log('error getting books', error)
        }
    }
    useEffect(()=>{
        getbooks()
    },[])




  return (
    <div className='grid grid-cols-4'>
         {books.map((book)=>{
        return(
            <div key={book._id} className="w-[85%] mx-auto mt-16 bg-gray-200 p-2 rounded">
            <div className="p-2">
                      {book.bookImage ? (
            <img
              src={`http://localhost:4000/uploads/${book.bookImage}`}
              alt={book.bookTitle}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "150px",
                backgroundColor: "#eee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#999",
              }}
            >
              No Image
            </div>
          )}
                </div>
               <div className="p-2">
                <h1>{book._id}</h1>
                 <h3><span className='font-bold text-lg'>Category:</span> <span className='font-semibold text-gray-600'>{book.bookCategory}</span></h3>
                <h1><span className='font-bold text-lg'>Book Name:</span> <span className='font-semibold text-gray-600'>{book.bookTitle}</span></h1>
                <h4><span className='font-bold text-lg'>Description:</span> <span className='font-semibold text-gray-600'>{book.bookDescription}</span></h4>
                <p><span className='font-bold text-lg'>Price:</span> <span className='font-semibold text-gray-600'>{book.bookPrice}</span></p>
               </div>
            </div>
        )
      })}
     </div>
  )
}

export default Home
