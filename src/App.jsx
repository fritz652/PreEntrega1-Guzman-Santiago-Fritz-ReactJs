
//REACT ROUTER DOM
import  { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//COMPONETS
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
//import ItemListContainer from './components/itemListContainer/itemListContainer';

//PAGES
//import Home from "./pages/Home";
import ListCardProducts from "./components/ListCard/ListCardProducts";
/* import Hombre from "./pages/Hombre";
import Mujer from "./pages/Mujer";
import Kids from "./pages/Kids"; */
import NotFound from './pages/NotFound';
import DetailPage from "./pages/DetailPage";

import CategoryPage from './pages/CategoryPage';          


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
        <Route path="/" element={<ListCardProducts/>}/>
        <Route path="/detail/:id" element={<DetailPage/>}/>
        <Route path="/productos/:categoryId" element={<CategoryPage/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
    </Router>
  )
}

export default App
