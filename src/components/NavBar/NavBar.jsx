import './NavBar.css';
import CardWidget from '../CardWidget/CardWidget';
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <nav>
        <ul className='logo'><Link to="/">Fritz</Link></ul>
        <ul className="navOne">
            {/* <li><Link to="/productos/jewelery">jewelery</Link></li> */}
            <li><Link to="/productos/hombre">Hombre</Link></li> 
            <li><Link to="/productos/mujer">Mujer</Link></li>
            <li><Link to="/productos/kids">Kids</Link></li> 
        </ul>
            <CardWidget/>
    </nav>
  )
}

export default NavBar