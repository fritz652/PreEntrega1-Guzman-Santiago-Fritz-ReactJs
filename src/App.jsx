
//REACT ROUTER DOM
import  { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//COMPONETS
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';


//PAGES
import ListCardProducts from "./pages/ListCard/ListCardProducts";
import NotFound from './pages/NotFound/NotFound';
import DetailPage from "./pages/DetailPage/DetailPage";
import CategoryPage from './pages/CategoryPage/CategoryPage';
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";          


const  App = () => {
  return (
    <Router>
      <div><Header/></div>
      <div className='df-3'></div>
      <Routes>
        <Route element={<NavBar/>}>
            <Route path="/" element={<ListCardProducts/>}/>
            <Route path="/detail/:id" element={<DetailPage/>}/>
            <Route path="/productos/:categoryId" element={<CategoryPage/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Route>
            <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App
