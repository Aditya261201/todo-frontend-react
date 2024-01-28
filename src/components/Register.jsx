import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(name,email,password);
    }


    return (
        <div className="login">
            <section>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder='Name' value={name} onChange={(e)=>{setname(e.target.value)}} required/>
                    <input type="email" placeholder='Email' value={email} onChange={(e) => { setemail(e.target.value) }} required/>
                    <input type="password" name="password" placeholder='password' value={password} onChange={(e) => { setpassword(e.target.value) }} required/>
                    <button type='submit'>Sign Up</button>
                    <h4>or</h4>
                    <Link to="/login">Log In</Link>
                </form>
            </section>
        </div>
    )
}

export default Register
