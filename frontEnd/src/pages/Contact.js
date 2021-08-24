import React from 'react';
import Header from '../components/Header';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Header />
        <section className='container'>
        <h1>Contact-Us</h1>
         <ul className='list'>
         <li className='txt'>Business Name: Blizzards</li>
         <li className='txt'>Address: blah</li>
         <li className='txt'>Number: none</li>
         <li className='txt'>Location: None</li>
         </ul>
        </section> 
        </div>
    )
}

export default Contact
