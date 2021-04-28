import React from 'react';
import { useState, useEffect } from 'react'
import "../Meals.css"

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
        <div className='details-container'>  
         
        <img style={{width: '40%'}} 
        src={meal.image} 
        alt='' 
        />   
        <div className='details'>
        <h2>{meal.title}</h2> 
        <p dangerouslySetInnerHTML={{__html:meal.summary}}></p>
        
        </div>
        </div>
    );
}

export default Meals;