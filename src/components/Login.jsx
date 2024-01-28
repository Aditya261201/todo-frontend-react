import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login">
            <section>
                <form action="">
                    <input type="email" placeholder='Email'/>
                    <input type="password" name="password" placeholder='password'/>
                    <button type='submit'>Login</button>
                    <h4>or</h4>
                    <Link to="/register">Sign Up</Link>
                </form>
            </section>
        </div>
    )
}

export default Login
