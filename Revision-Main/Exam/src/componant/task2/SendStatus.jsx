import React from 'react'
import UserStatus from './UserStatus'


const SendStatus = ({status}) => {
  return (
    <div>
      <UserStatus status="offline"/>
      {/* <UserStatus status="online"/> */}
    </div>
  )
}

export default SendStatus
