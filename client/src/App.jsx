import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast";

import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import ExplorePage from "./pages/ExplorePage"
import LikesPage from "./pages/LikesPage"
import SignupPage from "./pages/SignupPage"


import Navbar from "./components/Navbar"
import { useAuthContext } from "./context/AuthContext";


function App() {

  const { authUser,loading } = useAuthContext();
	console.log("Authenticated user:", authUser);
if(loading) return null

  return (
    <div className="flex flex-col text-white">
        <Navbar/>
          <div className="text-white w-full mx-auto my-5 transition-all duration-300 max-w-5xl">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={!authUser ? <LoginPage/> : <Navigate to={'/'}/>}/>
          <Route path="/signup" element={!authUser ? <SignupPage/> : <Navigate to={'/'}/>}/>
          <Route path="/explore" element={authUser ? <ExplorePage/> : <Navigate to={'/'}/>}/>
          <Route path="/likes" element={authUser ?<LikesPage/>: <Navigate to={'/'}/>}/>
          
        </Routes>
        <Toaster />
          </div>
    </div>
  )
}

export default App
