import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { RiUserFollowFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext';


const ProfileInfo = ({userProfile}) => {

  const { authUser } = useAuthContext()


  const handleLikeButton =async()=>{

    try {
      const res = await fetch(`/api/users/like/${userProfile.login}`,{
        method: "POST",
        credentials:"include"
      })
  
      const data  = await  res.json()
  
      if(data.error) throw new Error(data.error)

        toast.success(data.message)
        
      
    } catch (error) {
      
      toast.error(error.message) 
    }

  }

  return (
    <div className='flex flex-col items-center justify-center'>

  
        
        {
          authUser && 
        <div className='bo
        rder-gray-800 border-b md:border-none flex flex-col items-center py-0 sm:py-2 w-full sm:h-full h-[220px] md:w-[380px]'>
            <h1 className='font-bold text-xl mt-0 sm:mt-2'>Profile Info</h1>
            <div className='flex w-[480px] md:w-full px-8 items-center mt-6 justify-evenly'>
            <div className='profilepic rounded-full overflow-hidden h-24 w-24'>
              <img src={userProfile?.avatar_url} className='hover:scale-110 cursor-pointer transition-all ease-in-out duration-300' alt="Profile Pic" />
            </div>
            <div>
              <h1 className='text-sm sm:text-[20px]'>{userProfile?.login}</h1>
              <button className='bg-gray-800 mt-1 hover:bg-gray-900 text-gray-200 hover:text-white px-1 sm:px-2 sm:py-1 py-1 rounded-md'><Link to={userProfile?.html_url} className='flex items-center gap-2'><FaGithub size={20}/> View on Github</Link></button> 
              <p className='text-gray-400 text-sm mt-1'>since 2018</p>
              {authUser && authUser.username!=userProfile?.login && 
              <button className='text-sm bg-gray-800 px-2 py-1 rounded-md' onClick={handleLikeButton}>Like Profile ❤️</button>
              }
            </div>
            </div>
            <div className='flex mt-4 flex-wrap items-center justify-between gap-4'>
                
            <button className='bg-transparent flex items-center text-sm md:text-base w-32 md:w-40 border rounded-xl gap-2 border-gray-700 p-2'> <IoIosPeople/><span>Followers {userProfile?.followers}</span></button>
            <button className='bg-transparent border-gray-700 flex text-sm md:text-base w-32 md:w-40 items-center gap-2 p-2 border rounded-xl'> <RiUserFollowFill/><span>Following {userProfile?.following}</span></button>
            </div>
            <div className='mt-4 flex-wrap md:flex hidden items-center justify-between gap-4'>
            <button className='bg-transparent flex items-center w-32 text-sm md:text-base md:w-40 gap-2 border-gray-700 p-2 border rounded-xl'> <IoIosPeople size={24}/><span>Public repos {userProfile?.public_repos}</span></button>
            <button className='bg-transparent border-gray-700 w-32 text-sm md:text-base md:w-40 flex items-center gap-2 p-2 border rounded-xl'> <RiUserFollowFill/><span>Public gists {userProfile?.public_gists}</span></button>
            </div>
          </div>
        }

           

    </div>      
  )
}

export default ProfileInfo