import React from 'react';
import '../pages/Coupons.css';
import apple from './img/chris-dez-t2ZIt-WNXrk-unsplash.jpg';
import pear from './img/heather-barnes-1pJLkDYasfY-unsplash.jpg';
import cherry from './img/irene-kredenets-sV0KXYrb-5s-unsplash.jpg';
import nut from './img/mae-mu-U1iYwZ8Dx7k-unsplash.jpg';

const CouponData = () => {
    return (
        <div className='container2'>
            <section className='item item1'>
                <img className='item_img' src={pear} alt="" /><br />
                <p className="txt-image">this is the coupon</p>
            </section>
            <section className='item item2'>
                <img className='item_img' src={cherry} alt="" /><br />
                <p className="txt-image">this is the coupon</p>
            </section>
            <section className='item item3'>
                <img className='item_img' src={nut} alt="" /><br />
                <p className="txt-image">this is the coupon</p>
            </section>
            <section className='item item4'>
                <img className='item_img' src={apple} alt="" /><br />
                <p className="txt-image">this is the coupon</p>
            </section>

        </div>
    )
};

export default CouponData
