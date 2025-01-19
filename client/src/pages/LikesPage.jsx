import React from 'react'
import { useAuthContext } from '../context/AuthContext'

const LikesPage = () => {

  const { authUser } = useAuthContext()

  const likedby = authUser?.likedby 


  return (
   

<div className="flex items-center flex-col gap-4 h-[470px]">
  <h1 className='font-bold text-2xl'>Notification Center</h1>

  {likedby.map((likes)=>{
    <div key={likes.id} className='overflow-y-scroll no-scrollbar scroll-smooth rounded-lg backdrop-blur-sm hover:text-white text-gray-200 hover:bg-opacity-15 bg-opacity-20 flex
           items-center flex-col gap-1 border-gray-800 p-2'>
            <div className='items-center border-gray-800 border-b w-[320px] sm:w-[580px] justify-between bg-gray-800 p-3 rounded-lg backdrop-blur-sm hover:text-white text-gray-200 hover:bg-opacity-25 bg-opacity-30 flex
            gap-8'>
                <div className='flex items-center justify-center gap-2'>
                  <div className='h-5 w-5 sm:h-10 overflow-hidden rounded-full sm:w-10'>
                    <img src="../../public/dp.jpg" alt="Profile Pic" className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-200'/>
                  </div>
                <p className='text-[12px] sm:text-sm line-clamp-1'>Username</p>
                </div>
                <p className='text-[10px] sm:text-sm'>❤️ your repo</p>
                <p className='text-[10px] sm:text-sm text-gray-400'>3 days ago</p>
            </div>
            
            
    </div>
  })}

  {likedby.length ===0 && <div className='text-2xl font-semibold'>
    No Likes Yet 😅
    </div>}
</div>

  )
}

export default LikesPage