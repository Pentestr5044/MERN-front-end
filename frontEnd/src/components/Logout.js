import React from 'react';
import axios from 'axios';
import './Logout.css';

const Logout = () => {
    const submit = () =>{
        const logout = axios.create({
            withCredentials: true
        })
        logout.post('http://localhost:8001/api/logout').then(res => res.data)
    }

    
    return (
        <div>
            <section className="lo-container">
                <h1>You have logged in!</h1>
                <button name='btn' onClick={submit}>Logout</button>
            </section>
             
        </div>
    )
}

export default Logout