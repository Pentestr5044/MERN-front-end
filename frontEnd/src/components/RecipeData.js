import React from 'react';
import '../pages/Recipes.css';
import apple from './img/chris-dez-t2ZIt-WNXrk-unsplash.jpg';


const RecipeData = () => {
    return (
        <div>
           <section>
           <img className='img' src={apple} alt="" />
           <p className="txt-image">this is the text for the image</p>
           </section>
           <article className='item_cont'>This is going to be the steps.
            <ul className='item'> 
            <li>one</li>
            <li>two</li>
            <li>three</li>
            <li>four</li>
            <li>five</li>
            </ul>
           </article> 
        </div>
    )
}

export default RecipeData
