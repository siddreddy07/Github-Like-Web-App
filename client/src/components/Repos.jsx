import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { CgGitFork } from 'react-icons/cg'
import { FaCopy, FaRegStar } from 'react-icons/fa'
import { FaCodeFork } from 'react-icons/fa6'
import Spinner from './Spinner'
import { Navigate } from 'react-router-dom'

const Repos = ({ repos ,userProfile}) => {

  

  const handleCopyClone = async(repo)=>{
    try {  
      
      
      await navigator.clipboard.writeText(repo.clone_url)
      toast.success("Copied to Clipboard");
      
    
    } catch (error) {
      toast.error("Falied to Copy")
    }
  }

  return (
    <div className='overflow-y-scroll no-scrollbar'>
      {userProfile!='' && repos && 
      
    <div className='w-full flex border-l border-zinc-900 flex-col font-bold text-xl mt-0 sm:mt-2 items-center h-full'>
            <div className='picks py-2 px-6 sm:mt-6 w-full bg-opacity-20'>
                
<ol className="relative border-s border-gray-200 dark:border-gray-700"> 
  
  {repos.map((repo)=>(

    <li key={repo.id} className="mb-6 ms-6">            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <div className='forkimg flex items-center w-12 h-12 overflow-hidden'>
                              <FaCodeFork size={20}/>
                            </div>
        </span>
        
        <h3 className="flex items-center mb-1 text-[16px] font-bold text-gray-900 dark:text-white">{repo?.name} <div className="text-[10px] bg-blue-600 text-white px-2 py-0 ms-4 me-2 rounded-md">Latest</div></h3>
        <div className='w-full gap-2 mb-2 text-sm flex items-center h-full'>
                          
                          <span className='flex rounded-xl bg-yellow-200 px-2 items-center justify-center text-yellow-800 gap-1 font-extrabold text-[10px]'><FaRegStar className='text-yellow-800' size={10}/>{repo?.stargazers_count}</span>
                          <span className='flex rounded-xl bg-purple-200 px-2 items-center justify-center text-purple-800 gap-1 font-extrabold text-[10px]'><CgGitFork className='text-purple-800' size={10}/>{repo?.forks_count}</span>
                          <span onClick={()=> handleCopyClone(repo)} className='flex cursor-pointer rounded-xl bg-green-200 px-2 items-center justify-center text-green-800 gap-1 font-extrabold text-[10px]'><FaCopy className='text-green-800' size={10}/>Clone</span>
                        </div>
        
        <time className="block mb-2 text-[10px] font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
        <p className="mb-4 text-[12px] leading-normal line-clamp-2 font-normal text-gray-500 dark:text-gray-400">{repo.description?repo.description:"No description provided"}</p>
        
    </li>
  ))}

  {repos.length ===0 && <div className='flex text-base sm:text-2xl items-center justify-center h-32'><Spinner/></div>}

                  
    
    
    
</ol>


            </div>
          </div>
      }

      
    </div>
  )
}

export default Repos