import React from 'react';
import Header from '../components/Header';
import CouponData from '../components/CouponData';
import './Coupons.css';

const Coupons = () => {
    return (
        <div>
          <Header />
           <section className='container1'>
            <h1>This is the Coupons section</h1>
            <div className="row1">
           <CouponData className='item'/>
           <CouponData className='item'/>
           <CouponData className='item'/>
           </div>
           <div className="row2">
            <CouponData className='item'/>
            <CouponData className='item'/>
            <CouponData className='item'/>
           </div>
           </section>

        </div>
    )
}

export default Coupons
