import React, { useState, useContext } from 'react'
import { Link ,Navigate } from 'react-router-dom'
// import { serverUrl } from '../main.jsx';
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from '../main';

const Register = () => {

    const { isAuthenticated, setisAuthenticated ,loading , setloading } = useContext(Context);

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


    const submitHandler = async (e) => {
        e.preventDefault();
        setloading(true);
        try {
            const { data } = await axios.post("https://todo-jb1q.onrender.com/api/v1/users/new",
                {
                    name, email, password
                },
                {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            setisAuthenticated(true);
            toast.success(data.message);
            setloading(false);
        } catch (error) {
            toast.error("Some error occured.");
            console.log(error);
            setisAuthenticated(false);
            setloading(false);
        }
    }

    if (isAuthenticated) { <Navigate to="/"/> }

    return (
        <div className="login">
            <section>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder='Name' value={name} onChange={(e) => { setname(e.target.value) }} required />
                    <input type="email" placeholder='Email' value={email} onChange={(e) => { setemail(e.target.value) }} required />
                    <input type="password" name="password" placeholder='password' value={password} onChange={(e) => { setpassword(e.target.value) }} required />
                    <button type='submit' disabled={loading}>Sign Up</button>
                    <h4>or</h4>
                    <Link to="/login">Log In</Link>
                </form>
            </section>
        </div>
    )
}

export default Register
