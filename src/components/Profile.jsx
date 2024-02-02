import React, { useContext } from 'react'
import { Context } from '../main'
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Profile = () => {

    const { user, setuser, isAuthenticated } = useContext(Context);
    console.log(user);

    if (!isAuthenticated){
        toast.error("login first");
        return <Navigate to={"/login"} />
    }

    return (
        <div>
            <h1>{user?.name}</h1>
            <h3>{user?.email}</h3>
        </div>
    )
}

export default Profile
