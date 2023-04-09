import React, { useState } from "react";

export default function App() {
  const [listItems, setListItems] = useState([]);

  const [qty, setQty] = useState(0);

  const handleAddItem = () => {
    const newItem = (
      <button onClick={() => handleDeleteItem(newItem)}>
        delete qty:{qty}
      </button>
    );
    setListItems([...listItems, newItem]);
  };

  const handleDeleteItem = (itemToDelete) => {
    setListItems(listItems.filter((item) => item !== itemToDelete));
  };

  return (
    <>
      <Test handleAddItem={handleAddItem} setQty={setQty} />
      <List listItems={listItems} handleDeleteItem={handleDeleteItem} />
    </>
  );
}

function Test({ handleAddItem, setQty }) {
  const [counter, setcounter] = useState(0);

  function plus() {
    setcounter(counter + 1);
  }

  function minus() {
    setcounter(counter - 1);
  }

  function addToCart() {
    setQty(counter);
    handleAddItem();
  }
  return (
    <>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button id="add" onClick={addToCart}>
        add
      </button>
    </>
  );
}

function List({ listItems, handleDeleteItem }) {
  return (
    <ul>
      {listItems.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => handleDeleteItem(item)}>delete</button>
        </li>
      ))}
    </ul>
  );
}

// If I increment the counter by 1 then click the add button, what would the value of qty be in the newItem button
