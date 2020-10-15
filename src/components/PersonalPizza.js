import React, { useState } from "react";

const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple", "Abobora"];

export default function PersonalPizza() {
  const [selected, setSelected] = useState([]);

  const toggleTopping = (event) => {
    const clickedTopping = event.target.value;
    setSelected((prevSelected) => {
        // check if clicked topping is already selected
        if (prevSelected.includes(clickedTopping)) {
        // filter the clicked topping out of state
        return prevSelected.filter(t => t !== clickedTopping);
        }

        // add the clicked topping to our state
        return [...prevSelected, clickedTopping];
    });
  };

  return (
    <div>
      {options.map(option => (
        <button value={option} onClick={toggleTopping} key={option}>
          {selected.includes(option) ? "Remove " : "Add "}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(" - _ _ -")} pizza</p>
    </div>
  );
}