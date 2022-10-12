import './App.css';
import { Route } from 'react-router-dom';
import Landing from './modules/landing.jsx';
import Home from './modules/home.jsx';
import Nav from './modules/nav.jsx';
import CountryDetail from "./modules/paisDetail.jsx"

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={()=><Landing/>}/>
      <Route path="/home" exact render={()=><div><Nav/><Home/></div>}/>
      <Route path="/country/:name" exact render ={(e)=> <div><Nav/><CountryDetail/></div>}/>
    </div>
  );
}

export default App;
