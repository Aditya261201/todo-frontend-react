import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Profile from "./components/Profile"
import Login from "./components/Login"
import Register from "./components/Register"

function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
