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
        <div className='details-container'>  
        {console.log(meal)}
        <img style={{width: '40%'}} 
        src={meal.image} 
        alt='' 
        />   
        <div className='details'>
        <h2>{meal.title}</h2> 
        <p dangerouslySetInnerHTML={{__html:meal.summary}}></p>
        <p dangerouslySetInnerHTML={{__html:meal.instructions}}></p>
        {meal.extendedIngredients&&<ul>{meal.extendedIngredients.map(ingredient => {return <li key={ingredient.id}>{ingredient.name}</li>})}</ul>}
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