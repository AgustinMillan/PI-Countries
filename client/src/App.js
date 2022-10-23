import './App.css';
import { Route } from 'react-router-dom';
import Landing from './modules/landing.jsx';
import Home from './modules/home.jsx';
import Nav from './modules/nav.jsx';
import CountryDetail from "./modules/paisDetail.jsx"
import Crear from "./modules/crear.jsx"
import CentroHome from './modules/centroHome';
import EditorActividad from './modules/editorActividad';

function App() {

  return (
    <div className="App">
      <Route path="/" exact render={()=><Landing/>}/>
      <Route path="/home" exact render={()=><div><Nav/><Home/></div>}/>
      <Route path="/country/:name" exact render={(e)=> <div><Nav/><CountryDetail/></div>}/>
      <Route path="/crearActividad/:s" exact render={()=><div><Nav/><Crear/></div>}/>
      <Route path="/centroDeActividades/:s" exact render={()=><div><Nav/><CentroHome/></div>}/>
      <Route path="/editor/:id" exact render={()=><div><Nav/><EditorActividad/></div>}/>
    </div>
  );
}

export default App;
