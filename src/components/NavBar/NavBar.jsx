import './NavBar.css';
import CardWidget from '../CardWidget/CardWidget';
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav>
        <ul className='logo'><Link to="/">Fritz</Link></ul>
        <ul className="navOne">
            <li><Link to="/Hombre">Hombre</Link></li>
            <li><Link to="/Mujer">Mujer</Link></li>
            <li><Link to="/Kids">Kids</Link></li> 
        </ul>
            <CardWidget/>
    </nav>
  )
}

export default NavBar