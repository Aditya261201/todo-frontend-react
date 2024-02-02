import axios from 'axios';
import React ,{useState,useContext} from 'react'
import { Link , Navigate } from 'react-router-dom'
import toast from "react-hot-toast";
import { Context } from '../main';

const Login = () => {

    const { isAuthenticated, setisAuthenticated, loading, setloading } = useContext(Context);
    if (isAuthenticated) { <Navigate to="/" /> }


    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


    const submitHandler = async(e) => {
        e.preventDefault();
        setloading(true);
        try {
            const { data } = await axios.post("https://todo-jb1q.onrender.com/api/v1/users/login",
                {
                    email, password
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
            setisAuthenticated(false);
            toast.error(error.response.data.message);
            console.log(error);
            setloading(false);
        }
    }

    return (
        <div className="login">
            <section>
                <form onSubmit={submitHandler}>
                    <input type="email" placeholder='Email' value={email} onChange={(e) => { setemail(e.target.value)}}/>
                    <input type="password" name="password" placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                    <button type='submit' disabled={loading}>Login</button>
                    <h4>or</h4>
                    <Link to="/register">Sign Up</Link>
                </form>
            </section>
        </div>
    )
}

export default Login
