import React, { useContext } from 'react'
import { Context } from '../main'

const Profile = () => {

    const { user, setuser, isAuthenticated } = useContext(Context);
    console.log(user);

    return (
        <div>
            <h1>{user?.name}</h1>
            <h3>{user?.email}</h3>
        </div>
    )
}

export default Profile
