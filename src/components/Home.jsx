import axios from 'axios';
import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import toast from 'react-hot-toast';
import Todoitem from './Todoitem';
import { Context } from '../main';
import { Navigate } from 'react-router-dom';

const Home = () => {

    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [tasks, settasks] = useState([]);

    const { isAuthenticated, setisAuthenticated } = useContext(Context);

    const updateHandler=async(id)=>{
        try {
            const {data} = await axios.put(
                `https://todo-jb1q.onrender.com/api/v1/tasks/${id}`,
                {},
                {
                    withCredentials: true,
                }
            );
            toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    const deleteHandler = async (id)=>{
        try {
            const { data } = await axios.delete(
                `https://todo-jb1q.onrender.com/api/v1/tasks/${id}`,
                {
                    withCredentials: true,
                }
            );
            toast.success(data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "https://todo-jb1q.onrender.com/api/v1/tasks/new",
                {
                    title,
                    description,
                },
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            settitle("");
            setdescription("");
            toast.success(data.message);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
            // setLoading(false);
        }
    };




    useEffect(() => {
        axios.get(
            "https://todo-jb1q.onrender.com/api/v1/tasks/mytasks",
            {
                withCredentials: true,
            }).then((res)=>{
                settasks(res.data.tasks);
                // console.log(res.data.tasks)
            }).catch((error)=>{
                toast(error.response.data.message);
            });
    }, [tasks])







    if(!isAuthenticated) return <Navigate to={"/login"} />




    return (
        <>
            <div className="container">
                <div className="login">
                    <section>
                        <form onSubmit={submitHandler}>
                            <input type="text" placeholder='title' value={title} onChange={(e) => { settitle(e.target.value) }} />
                            <input type="text" name="description" placeholder='description' value={description} onChange={(e) => { setdescription(e.target.value) }} />
                            <button type='submit'>Add Task</button>
                        </form>
                    </section>
                </div>
                <section className="todosContainer">
                    {tasks.map((i) => (
                        <Todoitem
                            key={i._id}
                            id={i._id}
                            title={i.title}
                            description={i.description}
                            isCompleted={i.isCompleted}
                            updateHandler={updateHandler}
                            deleteHandler={deleteHandler}
                        />
                    ))}
                </section>
            </div>
        </>
    )
}

export default Home
