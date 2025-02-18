import React, { useState } from 'react'
import axios from 'axios'

const PostRequest = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let response = axios.post("http://localhost:3000/profile",{name,email,phone})
        }
        catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
          <h1>This is Post Request</h1>
          <form onSubmit={handleSubmit}>
              <label>Enter Name:</label>
              <input type="text" name="" id="" onChange={(e)=>setName(e.target.value)}/>
              <br />
              <label>Enter Email:</label>
              <input type="email" name="" id="" onChange={(e) => setEmail(e.target.value)} />
              <br />
              <label>Enter PhoneNo:</label>
              <input type="tel" name="" id="" onChange={(e) => setPhone(e.target.value)} />
              <br />
              <button type='submit'>Submit</button>
          </form>
    </div>
  )
}

export default PostRequest
