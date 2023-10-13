import "./ListCardProducts.css";
import { useState, useEffect} from "react";
import Card from '../Card/Card'

const ListCardProducts = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then(data => setItems(data))
    },[]);

  return (
    <div className="Cards-List">
        {
            items?.map( item => (
                <Card key={item.id} data={item}/>
            ))
        }
    </div>
  )
}

export default ListCardProducts