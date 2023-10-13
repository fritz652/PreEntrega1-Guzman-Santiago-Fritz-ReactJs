
//REACT ROUTER DOM
import  { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//COMPONETS
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
//import ItemListContainer from './components/itemListContainer/itemListContainer';

//PAGES
import Home from "./pages/Home";
import Hombre from "./pages/Hombre";
import Mujer from "./pages/Mujer";
import Kids from "./pages/Kids";
import NotFound from './pages/NotFound';

const  App = () => {
  return (
    <Router>
      <div><Header/></div>
      <div><NavBar/></div>
      <div className='df-3'>
        {/* <ItemListContainer/>
        <ItemListContainer/>
        <ItemListContainer/>
        <ItemListContainer/> */}
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hombre" element={<Hombre/>}/>
        <Route path="/mujer" element={<Mujer/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
    </Router>
  )
}

export default App
