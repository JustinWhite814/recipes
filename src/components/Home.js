import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../Home.css'

function Home() {
const [meals, setMeals] = useState([])
// const [lastSearch, setLastSearch] = useState('');

const [searchString, setSearchString] = useState('')
const handleChange =(e) => {
  setSearchString(e.target.value)
}
let key = '4a2376c7369f4e6b878089fb4b4391d8'
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
    console.log(res)
    return res.json()
    })
    .then(data => {
    console.log(data)  
    setMeals(data)
    // setLastSearch(searchString)
    setSearchString('')
    })
    .catch(console.error)  
}

return (
  <div>
  {/* check todoList */}
  
      <form className="container" onSubmit={handleSubmit}>
        <input placeholder="Search"
          type="text" 
          name="searchString" 
          required 
          onChange={handleChange}
          value={searchString}
        />
      <button type='submit'>Submit</button>
    </form>

<div className='container' >
  {meals.map((meal)=>{
    return(
    <Link to={`/meals/${meal.id}`} key={meal.id}>
    <div className="row">
    <div className='column'>  
    <img style={{width: '30%'}}src={meal.image} alt=''/>
    
    <h2 style={{textDecoration: 'none'}}>{meal.title}</h2>
    
    </div>
    
    </div>
    </Link>
    )
  })}

</div>

</div>
);
}

export default Home;