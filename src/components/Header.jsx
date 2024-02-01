import React, { useState,useContext } from 'react'
import {Link} from "react-router-dom";
import { Context } from '../main';

const Header = () => {

    const { isAuthenticated, setisAuthenticated }=useContext(Context);


    return (
        <nav className='header'>
        <div>
            <h2> TOoDO app</h2>
        </div>
        <article>
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>Profile</Link>
            {
                isAuthenticated?<button className='btn'>Logout</button>:
                <Link to={"/login"}>Login</Link>
            }

        </article>

        </nav>
    )
}

export default Header
