import React, { useState,useContext } from 'react'
import {Link} from "react-router-dom";
import { Context } from '../main';
import axios from 'axios';
import toast from 'react-hot-toast';

const Header = () => {

    const { isAuthenticated, setisAuthenticated , loading , setloading }=useContext(Context);

    const logoutHandler = ()=>{
        setloading(true);
        try {
            axios.get("https://todo-jb1q.onrender.com/api/v1/users/logout",
                {
                    withCredentials: true
                })
            setisAuthenticated(false);
            toast.success("Logged out successfully");
            setloading(false);
        } catch (error) {
            toast.error("Some error occured.");
            console.log(error);
            setisAuthenticated(true);
        }
    }

    return (
        <nav className='header'>
        <div>
            <h2> TOoDO app</h2>
        </div>
        <article>
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>Profile</Link>
            {
                isAuthenticated?<button className='btn' onClick={logoutHandler} disabled={loading}>Logout</button>:
                <Link to={"/login"}>Login</Link>
            }

        </article>

        </nav>
    )
}

export default Header
