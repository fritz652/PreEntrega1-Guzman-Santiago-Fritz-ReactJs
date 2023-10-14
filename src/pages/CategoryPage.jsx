import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "../components/Card/Card";

const Category = () => {
  let { categoryId } = useParams()
  
  const [items, SetItems] = useState([]);

  
  const map = {
    hombre : "men's clothing",
    mujer  : "women's clothing",
    kids   : "jewelery",
  }

  console.log(categoryId);
  // filtremos solamente los personajes que coincidan con el categoryId
  // que nos llega por paramentro
  useEffect(() => {
    axios(`https://fakestoreapi.com/products/category/${map[categoryId]}`)
    .then((res) => {
      console.log("resres",res.data);
      SetItems(res.data)
    }
    );
  }, [categoryId]);

  let filteredItems = items.filter((item) => {
    return item.category === map[categoryId];
  });

  return (
    <div className="Cards-List">
      {filteredItems.map((item) => {
        return (
          <div style={{ margin: 10 }} key={item.id}>
            <Card data={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Category;
