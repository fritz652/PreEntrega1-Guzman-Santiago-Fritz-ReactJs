import './Card.css'
import { Typography } from '@mui/material';


const imgShoes = 'https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_1280.jpg';
const ItemListContainer = () => {
    return (
    <div className='main'>
        <img src={imgShoes} alt="" />
        <h3>Title card</h3>
        <p>Descripcion about shoes</p>
        <Typography>
          <p>Price : $120.00</p>
        </Typography>

    </div>
  )
}

export default ItemListContainer