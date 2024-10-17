import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {

   const { user } = useAuth0();

  
  return (
    <div>
      <h1 className="heading">This is Profile Page</h1>
      <h1 className='heading p-6 m-24 '> Hi.....{user.given_name} ...Welcome </h1>
      <img src={user.picture} alt="" className='ml-[45%] w-36'/>
    </div>
  );
}

export default Profile
