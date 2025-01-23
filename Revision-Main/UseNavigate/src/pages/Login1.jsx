import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Login1 = () => {
  const navigate = useNavigate();

   useEffect(() => {
     const timer = setTimeout(() => {
       navigate("/");
     }, 1000);
     return () => clearTimeout(timer);
   }, []);

  return (
    <div>
      <h1 className="bg-blue-500 text-3xl">This is Login Page Componenets</h1>
      
    </div>
  );
};

export default Login1;
