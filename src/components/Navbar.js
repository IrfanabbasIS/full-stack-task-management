import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


 
export default function Navbar() {
  const navigate=useNavigate();
  const handleLogout=()=>{
   
  localStorage.removeItem("authToken")
  navigate("/login")
   }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-success sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" style={{ fontStyle: "italic", fontWeight: "bold", fontSize: "2rem" }} to="/">GoDelicious</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav  mr-auto ">

              <li className="nav-item" >
                <Link className="btn bg-white text-success active mx-1" aria-current="page" to="/">Home</Link>
              </li>

              {(localStorage.getItem("authToken")) ?
                <li className="nav-item" >
                  <Link className="btn bg-white text-success active mx-1" aria-current="page" to="/">My Orders</Link>
                </li>
                : ""}
            </ul>

            {!localStorage.getItem("authToken") ? (
              <div className='d-flex'>
                <Link className="btn bg-white text-success active mx-1" aria-current="page" to="/signup">Signup</Link>
                <Link className="btn bg-white text-success active mx-1" to="/login">Login</Link>
              </div>
            ) :

              <div>

                <div className='btn bg-white text-success mx-2'>My cart
                </div>

                <div className='btn bg-white text-success mx-2' onClick={handleLogout}>Logout
                </div>
              </div>
            }


            {/* <li className="nav-item">
          <Link className="nav-link active " to="/">MyCart</Link>
        </li> */}

          </div>
        </div>
      </nav>
    </>
  );
}
