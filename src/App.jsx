import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Profile from "./components/Profile"
import Login from "./components/Login"
import Register from "./components/Register"
import { Toaster } from "react-hot-toast"
import axios from "axios"
import { useContext, useEffect } from "react"
import { Context } from "./main"

function App() {

  const { user, setuser, setisAuthenticated } = useContext(Context)

  useEffect(() => {
    axios.get("https://todo-jb1q.onrender.com/api/v1/users/me",
    {
      withCredentials:true,
    }).then((res)=>{
      setuser(res.data.user);
      setisAuthenticated(true);
    }).catch((error)=>{
      setuser({});
      setisAuthenticated(false);
    })

  }, [])







  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
