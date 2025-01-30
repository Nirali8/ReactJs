import React from 'react'
import { useLogin } from '../Hook/ContextHook'
import { Navigate } from 'react-router-dom'

const ProtectedRouter = ({ children }) => {
    const {isLogin} = useLogin()
 return <div>{isLogin ? children : <Navigate to="/login"></Navigate>}</div>;
}

export default ProtectedRouter
