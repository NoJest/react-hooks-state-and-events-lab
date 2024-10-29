import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import {useState} from "react";

function App() {
  

  // Dark mode Toggle
  const [toggle, setToggle] = useState(false)
  const appClass = toggle ? "App dark" : "App light"
  const viewMode = toggle ? "Light Mode" : "Dark Mode"
  const toggleDarkMode= () => {
    setToggle(current => !current)
  }
  // Add to cart

  // Filter

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {toggleDarkMode}>{viewMode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
