import React from 'react'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
// import user from '../assets/user.png'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center bg-[rgba(54,56,68,1)] py-3 relative z-10'>
        <div className="w-[90%] flex items-center justify-between">
            <div className="">
                <p className='font-bold text-[rgba(255,191,61,1)] text-4xl uppercase'>Logo</p>
            </div>
            <div className="flex items-center justify-center gap-6 uppercase font-bold text-lg text-white">
                <Link to={'/'} className='text-[rgba(255,191,61,1)] '>Home</Link>
                <Link to={'/productPage'} className='hover:text-[rgba(255,191,61,1)] transition-all ease-in-out duration-300'>Products</Link>
                <Link to={''} className='hover:text-[rgba(255,191,61,1)] transition-all ease-in-out duration-300'>Favorite</Link>
                <Link to={''} className='hover:text-[rgba(255,191,61,1)] transition-all ease-in-out duration-300'>New Arrival</Link>
                <Link to={''} className='hover:text-[rgba(255,191,61,1)] transition-all ease-in-out duration-300'>Most Popular</Link>
                <Link to={''} className='hover:text-[rgba(255,191,61,1)] transition-all ease-in-out duration-300'>About Us</Link>
            </div>
            <div className="flex items-center justify-center gap-4">
                    <div className="bg-[rgba(255,255,255,0.15)] rounded-2xl text-white p-2 ">< HiMagnifyingGlass className='w-6 h-6' /></div>
                   <div className="bg-[rgba(255,255,255,0.15)] rounded-2xl text-white p-2">< IoCartOutline className='w-6 h-6' /></div>
                   {/* <img src={user} alt="user" /> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar
