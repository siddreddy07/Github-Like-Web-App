import React, { useState } from 'react'
import Repos from '../components/Repos'
import Spinner from '../components/Spinner'


import Dog from "../Dog.json"
import Lottie from "lottie-react"


const ExplorePage = () => {

  const [selectedlanguage,setselectedlanguage] = useState('')
  const [repos,setrepos] = useState([])
  const [loading,setloading] = useState(false);
 

const explorerepos = async(language)=>{
  setrepos([])
  setloading(true)
  

  try {

    const res = await fetch(`http://localhost:5000/api/explore/repos/${language}`)

    const {repos} = await res.json();
    
    setrepos(repos)
    
    setselectedlanguage(language)

    setloading(false);
    console.log(selectedlanguage)

  } 
  catch (error) {

    toast.error("Unable to fetch")
  
  }
  
}

  return (
    <div className='w-full h-full p-2'>

        <p className='text-center font-bold text-xl'>Explore Repos</p>

        <div className='flex flex-col sm:gap-2 sm:flex-row justify-evenly w-full'>

            <div className='flex flex-col items-center gap-4 justify-center sm:w-1/3'>

            <div className='flex py-2 sm:w-full w-72 flex-col bg-gray-900 overflow-x-scroll h-32 no-scrollbar mt-4 sm:mt-2 rounded-lg backdrop-blur-sm hover:text-white hover:bg-opacity-15 bg-opacity-20 border border-gray-800'>
              <p className='text-center font-semibold text-base'>Based on Tech</p>
              <div className='flex p-2 mt-2 gap-2 flex-wrap items-center'>
                <span className='bg-gray-800 px-2 py-1 sm:text-[14px] text-[10px] text-gray-400 font-semibold rounded-lg backdrop-blur-sm hover:text-white hover:bg-opacity-30 cursor-pointer bg-opacity-20 border border-gray-800' onClick={()=>explorerepos('javascript')}>Javascript</span>
                <span className='bg-gray-800 px-2 py-1 sm:text-[14px] text-[10px] text-gray-400 font-semibold rounded-lg backdrop-blur-sm hover:text-white hover:bg-opacity-30 cursor-pointer bg-opacity-20 border border-gray-800' onClick={()=>explorerepos('Java')}>Java</span>
                <span className='bg-gray-800 px-2 py-1 sm:text-[14px] text-[10px] text-gray-400 font-semibold rounded-lg backdrop-blur-sm hover:text-white hover:bg-opacity-30 cursor-pointer bg-opacity-20 border border-gray-800' onClick={()=>explorerepos('C++')}>C++</span>
                <span className='bg-gray-800 px-2 py-1 sm:text-[14px] text-[10px] text-gray-400 font-semibold rounded-lg backdrop-blur-sm hover:text-white hover:bg-opacity-30 cursor-pointer bg-opacity-20 border border-gray-800' onClick={()=>explorerepos('Python')}>Python</span>
                <span className='bg-gray-800 px-2 py-1 sm:text-[14px] text-[10px] text-gray-400 font-semibold rounded-lg backdrop-blur-sm hover:text-white hover:bg-opacity-30 cursor-pointer bg-opacity-20 border border-gray-800' onClick={()=>explorerepos('Go')}>Go lang</span>
                <span className='bg-gray-800 px-2 py-1 sm:text-[14px] text-[10px] text-gray-400 font-semibold rounded-lg backdrop-blur-sm hover:text-white hover:bg-opacity-30 cursor-pointer bg-opacity-20 border border-gray-800' onClick={()=>explorerepos('Rust')}>Rust</span>
                <span className='bg-gray-800 px-2 py-1 sm:text-[14px] text-[10px] text-gray-400 font-semibold rounded-lg backdrop-blur-sm hover:text-white hover:bg-opacity-30 cursor-pointer bg-opacity-20 border border-gray-800' onClick={()=>explorerepos('C#')}>C#</span>
              </div>
            </div>

            
            <div className='sm:flex py-2 w-72 h-64 hidden sm:w-full flex-col bg-gray-900 rounded-lg backdrop-blur-sm hover:text-white hover:bg-opacity-15 bg-opacity-20 border border-gray-800'>

                <p className='text-center font-semibold text-base'>Friends List</p>
                <div className='overflow-y-scroll no-scrollbar scroll-smooth rounded-lg backdrop-blur-sm hover:text-white text-gray-200 hover:bg-opacity-15 bg-opacity-20 flex
           items-center flex-col gap-1 border-gray-800 p-2'>
            <div className='items-center border-gray-800 border-b w-full justify-between bg-gray-800 p-2 rounded-lg backdrop-blur-sm hover:text-white text-gray-200 hover:bg-opacity-25 bg-opacity-30 flex
            gap-8'>
                <div className='flex items-center justify-center gap-2'>
                  <div className='h-[24px] overflow-hidden rounded-full w-[24px]'>
                    <img src="../../public/dp.jpg" alt="Profile Pic" className='cursor-pointer hover:scale-110 transition-all ease-in-out duration-200'/>
                  </div>
                <p className='text-[12px] sm:text-sm line-clamp-1'>Username</p>
                </div>
                <p className='text-[10px] sm:text-sm'>Friend</p>
                
            </div>
            
            
                </div>

            </div>

            </div>

            
            <div className='flex items-center mt-4 sm:w-1/2 p-2 flex-col bg-gray-900 overflow-x-scroll h-96 sm:h-[580px] no-scrollbar rounded-lg backdrop-blur-sm hover:text-white hover:bg-opacity-15 bg-opacity-20 border border-gray-800'>
              <p className='font-semibold text-base'>{selectedlanguage && <span className='bg-blue-400 px-2 rounded-lg'>{selectedlanguage.toUpperCase()}</span>} Top Repositories</p>
              {loading && <div className='flex items-center h-full w-full justify-center'><Spinner/>
                </div>}
              {!selectedlanguage && !loading && <div className='flex flex-col items-center h-full w-full justify-center'> 
                <Lottie loop={true} className='w-52 h-52' animationData={Dog}/>
                <p className='text-base font-semibold'>Choose Any One Technology</p>
                </div>}
              {!loading && repos.length > 0 &&
              <Repos repos={repos}/>
            }
            </div>


        </div>


    </div>
  )
}

export default ExplorePage