import React, { useCallback, useEffect, useState } from 'react'
import Search from '../components/Search'
import ProfileInfo from '../components/ProfileInfo'
import Repos from '../components/Repos'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'

const HomePage = () => {

  const [userProfile,setuserProfile] = useState(null);
  const navigate = useNavigate()
  const [repos,setrepos] = useState([]);
  const [loading,setloading] = useState(false);
  const { authUser } = useAuthContext()

  const GetuserProfileAndRepos = useCallback( async(username=authUser.username)=>{
    try {
      const res = await fetch(`http://localhost:5000/api/users/profile/${username}`)

      const data = await res.json();
     

      const {userProfile,repos} = data;
      

      setuserProfile(userProfile);
      setrepos(repos);

      
      
      
      return {userProfile,repos}

      
      
    } catch (error) {
      console.log(error.message)
    }
  },[]
)

  useEffect(()=>{
    GetuserProfileAndRepos();
  },[GetuserProfileAndRepos])


  const onSearch = async(e,username)=>{
    e.preventDefault();
    setrepos([])
    setuserProfile(null)

   const {userProfile,repos} =  await GetuserProfileAndRepos(username)

   setuserProfile(userProfile)
   setrepos(repos);

  }

  return (
    <div className='flex flex-col h-[620px] items-center justify-center'>

        <Search onSearch = {onSearch}/>

        {!userProfile && <Navigate to='/'/>}
        
{authUser &&
        <div className="flex items-center overflow-hidden w-full gap-4 h-[580px] md:h-[580px]">
        <div className='w-full flex md:flex-row flex-col gap-4 h-full bg-gray-800 rounded-lg backdrop-blur-sm hover:text-white hover:bg-opacity-15 bg-opacity-20'>
    
    
    
          <div className='main flex flex-col items-center'>
          
          <ProfileInfo userProfile={userProfile} />

          

          </div>
    
    
    
          <Repos repos = {repos} userProfile={userProfile}/>
          


        </div>
    </div>
}
        
    </div>
  )
}

export default HomePage