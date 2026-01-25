import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-blue-500 p-4 flex items-center justify-center'>
      <div className="flex items-center justify-center gap-10">
        <Link to='/' className='font-bold text-xl text-white hover:underline hover:scale-105 transition-all ease-in-out duration-300'>Home</Link>
        <Link to='/postbook' className='font-bold text-xl text-white hover:underline hover:scale-105 transition-all ease-in-out duration-300'>Post Book</Link>
        <a className='font-bold text-xl text-white hover:underline hover:scale-105 transition-all ease-in-out duration-300' href="">Update Book</a>
        <a className='font-bold text-xl text-white hover:underline hover:scale-105 transition-all ease-in-out duration-300' href="">Delete Book</a>
      </div>
    </div>
  )
}

export default Navbar
