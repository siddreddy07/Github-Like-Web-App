import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const LoginPage = () => {

  const handleLoginWithGithub = ()=>{
    window.open("http://localhost:5000/api/auth/github","_self")
   }
  

  return (
    <div className='flex w-full h-[580px]
     justify-center items-center lg:py-0 px-6 py-8 flex-col'>
      
      <div className='flex px-2 w-1/2 gap-6 items-center flex-col h-1/2 justify-center bg-gray-800 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-800'>
        <h1 className='font-semibold text-xl'>Login to Devhub</h1>
          <div>
          <button className='bg-gray-800 rounded-lg backdrop-blur-sm hover:text-white text-gray-200 hover:bg-opacity-15 bg-opacity-20 border flex
           items-center justify-center gap-3 border-gray-800 px-3 py-2' onClick={handleLoginWithGithub}> <FaGithub size={22}/>Login using Github</button>
          </div>
        
        <p>New here?<Link to='/signup' className='text-blue-500'> Signup now</Link></p>
        
      </div>

    </div>

  )
}

export default LoginPage