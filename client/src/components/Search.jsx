import {useState} from 'react'

const Search = ({onSearch}) => {

  const [username,setusername] = useState('')

  return (
    <form onSubmit={(e)=>{
      if(username!=''){
        onSearch(e,username)}
      }
      }>

    
    <div className='flex gap-4 mb-8 items-center'>
        <input className='px-4 w-52 md:w-96 focus:ring-gray-900 focus:border-gray-900 focus:bg-transparent py-2 rounded-lg bg-gray border-gray-800 border bg-gray-800 backdrop-blur-sm hover:text-white hover:bg-opacity-15 bg-opacity-20' type="search" value={username}
         placeholder='Search for devs /' onChange={(e)=>setusername(e.target.value)}/>
        <button type='submit' className='px-4 py-2 bg-blue-600 font-semibold rounded-lg text-white'>Search</button>
      </div>
      </form>
  )
}

export default Search