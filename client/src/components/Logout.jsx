import React from 'react'
import toast from 'react-hot-toast';

import { IoMdCloseCircleOutline } from "react-icons/io";
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

  const navigate = useNavigate()
    const { authUser,setAuthUser } = useAuthContext()

  const handleLogout = async()=>{
    const res  = await fetch("/api/auth/logout",{credentials:'include'})
    const data = await res.json()

    if(data.message){
      toast.success("Logged Out")
      setAuthUser(null)
      navigate("/login")
    }

    else{
      toast.error("Unable to Logged Out at the moment")
    }
  }

  return (
    <div className='flex items-center gap-5'>

        <div className='rounded-full hidden sm:flex overflow-hidden'>
            <img src={authUser?.avatarurl} alt="Profile Pic" className='rounded-full cursor-pointer h-10 w-10  hover:scale-110 transition-all ease-in-out duration-200 object-cover'/>
        </div>

        <IoMdCloseCircleOutline className='text-white text-4xl sm:text-5xl hover:text-red-600 cursor-pointer rounded-md p-2 border-900 hover:backdrop-filter
         hover:bg-opacity-20 h-full hover:bg-gray-500 hover:backdrop-blur-4xl transition-all ease-in-out duration-100'onClick={handleLogout}/>
    </div>
  )
}

export default Logout