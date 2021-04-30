import React from 'react';
import { useState, useEffect } from 'react'
import "../Meals.css"

function Meals({ match }) {
let key = '4a2376c7369f4e6b878089fb4b4391d8'
const [meal, setMeal] = useState([])
useEffect(()=> {
    fetch(`https://api.spoonacular.com/recipes/${match.params.id}/information?apiKey=${key}`)
    .then(res => res.json())
    .then(data=> {
        setMeal(data)
    })     
}, [])

if(meal){
return (
    
    <div className='details-container body'>  
    <div className='header'>
    <h1>{meal.title}</h1> 
    <img style={{width: '40%'}} 
                src={meal.image} 
                alt={meal.title} 
            />   
    <h2>Summary:</h2>       
    <p className='summary fade-in-text' dangerouslySetInnerHTML={{__html:meal.summary}}></p>
    </div>

    <h1>Instructions:</h1>
    <ol className='instructions fade-in-text' dangerouslySetInnerHTML={{__html:meal.instructions}}></ol>

    <div className='ingredients'>
    <h1>Ingredients:</h1>
    {meal.extendedIngredients&&
    <ol className='ingredients fade-in-text'>{meal.extendedIngredients.map(ingredient => {return <li key={ingredient.id}>{ingredient.name}</li>})}</ol>}
    </div>
    </div>
);
} 
else {
return (
<div className='error-message'>
    <h2>Loading, please wait</h2>
</div>
)
}
}

export default Meals;