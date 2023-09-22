import './CardWidget.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CardWidget = () => {
  return (
    <ul className='navTwo'>
        <li><a href="#"><SearchIcon/></a></li>
        <li><a href="#"><PersonOutlineOutlinedIcon/></a></li>
        <li><a href="#"><ShoppingCartOutlinedIcon/></a></li>
    </ul>
  )
}

export default CardWidget