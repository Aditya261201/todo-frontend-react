import axios from 'axios';
import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import toast from "react-hot-toast";

const Login = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


    const submitHandler = async(e) => {
        e.preventDefault();
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
                    <input type="email" placeholder='Email' value={email} onChange={(e) => { setemail(e.target.value)}}/>
                    <input type="password" name="password" placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                    <button type='submit'>Login</button>
                    <h4>or</h4>
                    <Link to="/register">Sign Up</Link>
                </form>
            </section>
        </div>
    )
}

export default Login
