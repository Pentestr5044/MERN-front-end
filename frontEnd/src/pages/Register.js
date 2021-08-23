import React from 'react'
import './Register.css';
import RegisterComponent from '../components/RegisterComponent';
import Header from '../components/Header';

function Register() {
    return (
        <div className="reg-back">
          <Header />
            
          <RegisterComponent />
        </div>
    )
}

export default Register
