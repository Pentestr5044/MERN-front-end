import React from 'react';
import axios from 'axios';
import './Logout.css';
import Header from './Header'
const Logout = () => {
    const submit = () =>{
        const logout = axios.create({
            withCredentials: true
        })
        logout.post('http://localhost:8001/api/logout').then(res => res.data)
    }

    
    return (
        <div>
            <Header />
            <section className="lo-container">
                <h1>You have Reached the User page please use these links to navigate the website!</h1>
                <ul>
                    <li className='txt'><a className='txt' href='/Home'>HomePage</a></li>
                    <li className='txt'><a className='txt' href='/About'>About Our Business</a></li>
                    <li className='txt'><a className='txt' href='/Coupons'> Share your Coupons</a></li>
                    <li className='txt'><a className='txt' href='/Recipes'>Please share your recipes with us.</a></li>
                </ul>
                <button className='btn' name='btn' onClick={submit}>Logout</button>
            </section>
             
        </div>
    )
}

export default Logout