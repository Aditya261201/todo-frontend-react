import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { serverUrl } from '../main.jsx';
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


    const submitHandler = async (e) => {
        e.preventDefault();
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
            toast.success(data.message);
        } catch (error) {
            toast.error("Some error occured.");
            console.log(error);
        }
    }



    return (
        <div className="login">
            <section>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder='Name' value={name} onChange={(e) => { setname(e.target.value) }} required />
                    <input type="email" placeholder='Email' value={email} onChange={(e) => { setemail(e.target.value) }} required />
                    <input type="password" name="password" placeholder='password' value={password} onChange={(e) => { setpassword(e.target.value) }} required />
                    <button type='submit'>Sign Up</button>
                    <h4>or</h4>
                    <Link to="/login">Log In</Link>
                </form>
            </section>
        </div>
    )
}

export default Register
