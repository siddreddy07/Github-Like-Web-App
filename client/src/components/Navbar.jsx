import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa6";
import Logout from './Logout';
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';



const Navbar = () => {

  const { authUser } = useAuthContext()




  return (
    <div className='flex border-b hover:border-white flex-row items-center justify-between px-4 h-12 sm:h-16 w-full
    bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-900 hover:backdrop-blur-sm hover:bg-opacity-5'>  
    
    <nav className='flex font-bold items-center text-2xl cursor-pointer text-gray-200 hover:text-white transition-all duration-100 ease-linear'>
      <Link to='/' className='text-[14px] sm:text-2xl'>
        Devhub
      </Link>
    </nav>

      <nav className='flex flex-row gap-5'>
    
    {authUser && (
      <Link to='/' className='flex'>
        <FaGithub className='text-4xl sm:text-5xl text-gray-200 hover:text-white rounded-md p-2 border-900 hover:backdrop-filter hover:bg-opacity-20 h-full hover:bg-gray-500 hover:backdrop-blur-4xl transition-all ease-in-out duration-100'/>
      </Link>   
    )}
             
      {authUser &&(
      <Link to='/likes' className='flex'>
      <FaHeart className='text-4xl sm:text-5xl text-gray-200 hover:text-white rounded-md p-2 border-900 hover:backdrop-filter hover:bg-opacity-20 h-full hover:bg-gray-500 hover:backdrop-blur-4xl transition-all ease-in-out duration-100'/>
      </Link>
      )}

      {authUser &&(
      <Link to='/explore' className='flex'>
      <FaRegCompass className='text-4xl sm:text-5xl text-gray-200 hover:text-white rounded-md p-2 border-900 hover:backdrop-filter hover:bg-opacity-20 h-full hover:bg-gray-500 hover:backdrop-blur-4xl transition-all ease-in-out duration-100'/>
      </Link>
      )}

      {!authUser && (
        <nav className='flex items-center flex-row gap-10'>

        <Link to='/login' className='flex'>
          <div className='flex items-center font-bold text-xl text-gray-200 hover:text-white'>
            Login
          </div>
        </Link>

          <Link to='/signup' className='flex'>
          <div className='flex items-center font-bold text-xl text-gray-200 hover:text-white'>
            Signup
          </div>
        </Link>
          
        </nav>
        
      )}




    </nav>
    
    {authUser &&(

      

        <nav className='flex font-bold items-center text-2xl text-gray-200 hover:text-white transition-all duration-100 ease-linear'>
              
            
              <Logout/>
            



        </nav>
      
      )}
    

    </div>
  )
}

export default Navbar