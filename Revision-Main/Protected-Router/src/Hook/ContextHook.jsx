import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({children}) => {
    const [user, setUser] = useState({ userName: "nirali", psw: "sanghani" });
    const [isLogin, setIsLogin] = useState(false);

    // console.log('isLogin' , isLogin);
    
    return (
        <LoginContext.Provider value={{user,setUser,isLogin,setIsLogin}}>
            {children}
        </LoginContext.Provider>
    )
}
export default LoginProvider;

export const useLogin=() => useContext(LoginContext)
