import "./ListCardProducts.css";
import { useState, useEffect} from "react";
import Card from '../Card/Card'
import { Link } from "react-router-dom";

//import axios from "axios";

const ListCardProducts = () => {
    const [items, setItems] = useState([]);

    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
       /*  .then((res) =>  {
            console.log(res.data);
            setItems(res.data)
        }); */
        .then((res) => res.json())
        .then(data => {
            //console.log(data);
            setItems(data)
        })
    },[]);

  return (
    <div className="Cards-List">
        {
            items?.map( item => (
                    <div key={item.id}>
                        <Link to={`/detail/${item.id}`}>
                            <Card  data={item}/>
                        </Link>
                    </div>
            ))
        }
    </div>
  )
}

export default ListCardProducts