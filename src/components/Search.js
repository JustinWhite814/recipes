import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../Search.css'

function Search() {
const [meals, setMeals] = useState([])
const [searchString, setSearchString] = useState('')

const handleChange =(e) => {
  setSearchString(e.target.value)
}

let key = process.env.REACT_APP_MEAL_KEY

const handleSubmit = (e) => {
  e.preventDefault()
  getMeals()
}
// Remind myself to redirect later/tomorrow
const getMeals = () => 
{
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchString}&number=12&apiKey=${key}`
    fetch(url)
    .then(res => {
    return res.json()
    })
    .then(data => {
    setMeals(data)
    setSearchString('')
    })
    .catch(console.error)  
}

return (
<div>

  <form className="" onSubmit={handleSubmit}>
    <input placeholder="Search"
      type="text" 
      name="searchString" 
      required 
      onChange={handleChange}
      value={searchString}
    />
  <button type='submit'>Submit</button>
</form>

<div className='container'>
  {meals.map((meal)=>{
    return(
    <Link to={`/meals/${meal.id}`} key={meal.id}>
    <div className="card">
    <div className='card-image'>  
    <img style={{width: '50%'}}src={meal.image} alt=''/></div>
    <div > 
    <div className='card-title'>
    <h2 style={{width: '100%'}} >{meal.title}</h2>
    </div>
    </div>
    </div>
    </Link>
    )
  })}
</div>
</div>
);
}

export default Search;