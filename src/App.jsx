import { useState } from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import Product from "./Product";

function App() {
  const productInfo = {
    name: "Fall Limited Edition Sneakers",
    discount: 0.5,
    originalPrice: 250,
    price: 250 * 0.5,
  };

  const [qty, setQty] = useState(0);

  // const [productInfo, setProductInfo] = useState({
  //   name: "Fall Limited Edition Sneakers",
  //   discount: 0.5,
  //   originalPrice: 250,
  //   price: 250 * 0.5,
  //   qty: 0,
  // });

  //Test

  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  function removeFromCart(item) {
    setCartItems(cartItems.filter((cartItem) => cartItem !== item));
  }

  // quantity: counter,
  // total: 125 * counter,

  return (
    <div className="App">
      <Nav
        productInfo={productInfo}
        cartItems={cartItems}
        setCartItems={setCartItems}
      ></Nav>
      <Main
        qty={qty}
        setQty={setQty}
        productInfo={productInfo}
        cartItems={cartItems}
        setCartItems={setCartItems}
      ></Main>
      <Product qty={qty} setQty={setQty} productInfo={productInfo}></Product>
    </div>
  );
}

export default App;
