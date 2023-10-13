import { useState, useEffect} from "react";

import axios from "axios";

import { useParams } from 'react-router-dom';
import Card from '../components/Card/Card';


const DetailPage = () => {
    let { id } = useParams();
 
    const [item, setItem] = useState({});

    console.log(item)

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`)
        .then((res) =>  {
            console.log(res.data);
            setItem(res.data)
        })
        /* .then((res) => res.json())
        .then(data => setItem(data)) */
    },[id]);

    return (
        <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
            {item.id ? <Card data={item} /> : null}
        </div>
    );
};

export default DetailPage;