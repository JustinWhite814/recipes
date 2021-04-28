
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route } from 'react-router-dom'
import Meals from './components/Meals'

function App() {

  return (
    <div className="App">
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route path="/meals/:id" render={routerProps=> <Meals match={routerProps.match}/>} />
    </div>
  );
}

export default App;
