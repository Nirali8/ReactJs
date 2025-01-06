import React from 'react'

const UserStatus = ({ status }) => {
  return (
    <div>
      <h1 className='bg-yellow-400 m-4 p-4 text-3xl'>This is UserStatus Display</h1>
      <h2 className='bg-yellow-400 m-4 p-4 text-3xl'>You are {status}</h2>
    </div>
  );
};

export default UserStatus
