import React from 'react'
import Navbar from '../components/Navbar'
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Login() {


  const [credentials, setcredentials] = useState({ email:"", password:""})
const navigate = useNavigate();

const handleSubmit=async(e)=>{
    e.preventDefault();
    const response= await fetch("http://localhost:5000/api/loginuser", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
            
        },

        body:JSON.stringify({email:credentials.email,password:credentials.password})
    });
    const json=await response.json()
    console.log(json);

    
    if (json.success){
      localStorage.setItem("authToken", json.authToken);
    console.log(localStorage.getItem("authToken"))
        navigate('/'); }
    else{
      alert("wrong information")
    }

}


const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
}
  return (

    <div>
      <Navbar/>
      <div className="row mt-3">
    <h1 className="col-6 offset-3">Login </h1>
    <div className="col-6 offset-3">
       <form onSubmit={handleSubmit}  method="POST" className="needs-validation" novalidate>
        <div className="mb-3 ">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" id="email" name="email"  className="form-control" value={credentials.email} onChange={onChange} required/>
            
            </div>

    

                <div className="mb-3 ">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id="password" name="password"  className="form-control" value={credentials.password} onChange={onChange} required/>
                     </div>
                    <button className="btn btn-success">Login</button>
       </form>  
    </div>
</div>
    </div>
  )
}
