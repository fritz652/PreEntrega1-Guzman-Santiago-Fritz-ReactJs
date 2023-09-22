import './NavBar.css';
import CardWidget from '../CardWidget/CardWidget';


const NavBar = () => {
  return (
    <nav>
        <ul className='logo'>Fritz</ul>
        <ul className="navOne">
            <li><a href="#">Hombre</a></li> 
            <li><a href="#">Mujer</a></li>
            <li><a href="#">Kids</a></li>
        </ul>
            <CardWidget/>
    </nav>
  )
}

export default NavBar