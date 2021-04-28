import React from 'react';
import { useState, useEffect } from 'react'

function Meals({ match }) {
let key = '4a2376c7369f4e6b878089fb4b4391d8'
const [meal, setMeal] = useState([])
useEffect(()=> {
    fetch(`https://api.spoonacular.com/recipes/${match.params.id}/information?apiKey=${key}`)
    .then(res => res.json())
    .then(data=> setMeal(data))
     
}, [])
console.log(meal)
    return (
        <div>
            
        <div>{meal.title}</div>   
        <img src={meal.image} alt='' />   
        <p className='Summary' dangerouslySetInnerHTML={{__html:meal.summary}}></p>
        {/* <div>{meal.extendedIngredients.map(ingredient=> {
            return (
                <div>{ingredient.name}</div>
            )
        })}</div> */}
        
        </div>
    );
}

export default Meals;