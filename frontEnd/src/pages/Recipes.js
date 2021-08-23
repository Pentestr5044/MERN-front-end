import React from 'react'
import './Recipes.css';
import RecipeData from '../components/RecipeData';
import Header from '../components/Header';


function Recipes() {
    return (
        <div>
            <Header />
            <section className="heading-text"><h1>This is the heading text</h1>
            </section>
           <section className="recipe-grid">
           <RecipeData />
           <RecipeData />
           <RecipeData />
           <RecipeData />
           <RecipeData />
           <RecipeData />
           </section>
        </div>
    )
}

export default Recipes
