import React from 'react'
import Navbar from './components/Navbar'
import { Route } from 'react-router-dom'
import Meals from './components/Meals'
import About from './components/About'
import Search from './components/Search'

function App() {

  return (
    <div className="App">
    <Navbar />
    <Route exact path='/about' component={About}/>
    <Route exact path="/" component={Search} />
    <Route path="/meals/:id" render={routerProps=> <Meals match={routerProps.match}/>} />
    </div>
  );
}

export default App;
