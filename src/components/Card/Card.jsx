import './Card.css'

//import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

//button
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const ItemListContainer = (data) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia 
          component="img"
          //height="140"
          image={data.data.image}
          alt="green iguana"
        />
        <CardContent component="div">
          <Typography gutterBottom variant="h6" component="div">
            {data.data.title}
          </Typography>
          <Typography variant="h5" color="text.secondary">
             S/ {data.data.price}
          </Typography>
          <Stack direction="row" spacing={2}>
              <Button variant="contained">Contained</Button>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemListContainer 

//const imgShoes = '{https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_1280.jpg}';
/* const ItemListContainer = (data) => {
    return (
    <div className='main'>
        <img src={data.data.image} alt="" />
        <p>{data.data.category}</p>
        <p>{data.data.title}</p>
        <p>Price :{data.data.price}</p>
    </div>
  )
}

export default ItemListContainer */