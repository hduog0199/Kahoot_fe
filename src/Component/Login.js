import React, { useState } from 'react'
import {AppContext} from '../App'

import { useHistory } from "react-router-dom";
import axios from 'axios';
import './Login.css'

function Login() {
  
  const { setAuth } = React.useContext(AppContext);
  let navigate = useHistory();

  const [dataLogin, setDataLogin ] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    
    setDataLogin({
      ...dataLogin,[e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("quiz sau khi gui", update)
    axios.post("http://localhost:4000/auth", {
        username: dataLogin.email,
        password: dataLogin.password
    })
    .then((res) => {
        setAuth(res.data)
        navigate.push('/')
    })
    .catch((res) => alert('Ban da nhap sai tai khoan hoac mat khau'));
    // dispatch(login(dataLogin))
    // if(!isLogged) {
    //   return (
    //     <div class="spinner-border" role="status">
    //       <span class="sr-only">Loading...</span>
    //     </div>
    //   )
    // }
    // navigate('/')
  }



  return (
    <section className="auth-container">
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Enter Your Account</h2>
            {/* {
              error && (
                <div className="error-message">Error: {error}</div>
              )
            } */}
            <input type="text" name='email' required placeholder='Email' value={dataLogin.email} onChange={handleChange} />
            <input type="password" name='password' required placeholder='Password' value={dataLogin.password} onChange={handleChange} />
            <button className="btn" type='submit'>Login</button>
        </form>
    </section>
  )
}

export default Login