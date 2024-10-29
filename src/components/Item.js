import React from "react";
import {useState} from 'react';

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(false)
  const areYouBuying = addToCart ? "in-cart" : ""
  const buttonText = !addToCart ? "Add to Cart" : "Remove From Cart"
  const handleAddToCart = () => {
    setAddToCart(current => !current)
  }
  return (
    <li className={areYouBuying}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {handleAddToCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
