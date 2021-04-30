import { useState } from 'react';
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

const getMeals = () => 
{
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchString}&number=40&apiKey=${key}`
    fetch(url)
    .then(res => {return res.json()})
    .then(data => {
    setMeals(data)
    setSearchString('')
    })
    .catch(console.error)  
}

return (
<div className='body'>
<div className='header'>
  <h1> The Recipe Corner</h1>
  <form className="" onSubmit={handleSubmit}>
    <input placeholder="Search"
      type="text" 
      name="searchString" 
      required 
      onChange={handleChange}
      value={searchString}
    />
</form>
<h1>Find the Recipe of Your Dreams</h1>
</div>

<div className='container'>
  {meals.map((meal)=>{
    return(
     <Link to={`/meals/${meal.id}`} key={meal.id}>
      <div className="card">
      <div className='card-image'>  
        <img style={{width: '50%'}}src={meal.image} alt=''/></div>
      <div> 
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