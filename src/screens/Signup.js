import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
const [credentials, setcredentials] = useState({username:"", email:"", password:""})
const navigate = useNavigate();

const handleSubmit=async(e)=>{
    e.preventDefault();
    const response= await fetch("https://full-stack-task-management-2.onrender.com", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
            
        },

        body:JSON.stringify({username:credentials.username,email:credentials.email,password:credentials.password})
    });
    const json=await response.json()
    console.log(json);

    
    if (json.success) { navigate('/'); }

}


const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
}

    return (
        <div>
            <Navbar/>
            <div className="row mt-3">
                <h1 className="col-6 offset-3">Register on GoDelicious</h1>
                <div className="col-6 offset-3">
                    <form  onSubmit={handleSubmit}  method="POST" className="needs-validation" noValidate >
                        <div className="mb-3 ">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" id="username" name="username" className="form-control" value={credentials.username} onChange={onChange}  required />
                            <div className="valid-feedback">Looks good!!</div>
                        </div>

                        <div className="mb-3 ">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" name="email" className="form-control" value={credentials.email} onChange={onChange} required />
                            <div className="valid-feedback">Looks good!!</div>
                        </div>

                        <div className="mb-3 ">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" id="password" name="password" className="form-control" value={credentials.password} onChange={onChange} required />
                            <div className="valid-feedback">Looks good!!</div>
                        </div>
                        <button className="btn btn-success">Submit</button>

        
                        <Link  to='/login' className='btn btn-danger m-3'>Already a user</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
