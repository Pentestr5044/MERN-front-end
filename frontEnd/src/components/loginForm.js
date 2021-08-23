import React, {useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';
import Header from '../components/Header';
import '../pages/Login.css';



const LoginForm = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [redirect, setRedirect]= useState(false)
    const submit= event => {
        event.preventDefault();
    
    const transport = axios.create({
  withCredentials: true
})

transport
  .post('http://localhost:8001/api/login',{
      email,
      password
  })
  .then(res => {
    console.log(res.data)
  })
  .catch(err => { /* not hit since no 401 */ })
  
  setRedirect(true);
    }
  
    if(redirect) {
      return <Redirect to='/Logout'/>
    }



    return (
        <div className='bkgrnd'>
            <Header />
            <form className="login-cont" onSubmit={submit}action="login">
                <label htmlFor="userName">Please Enter your Username here: </label><br/>
                <input type="text" id="userName" onChange={e => setEmail(e.target.value)}/><br/>
                <label htmlFor="passName">Please Enter your password:</label><br/>
                <input type="password" id='passName' onChange={e => setPassword(e.target.value)}/><br/>
                <button type="submit" id='sbutton' className="sbutton">Log-in</button>
            </form>                    
        </div>
    )
    }
  



export default LoginForm
