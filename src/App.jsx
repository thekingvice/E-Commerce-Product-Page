import { useState } from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import MobileNav from "./Nav/MobileNav";

function App() {
  const productInfo = {
    name: "Fall Limited Edition Sneakers",
    discount: 0.5,
    originalPrice: 250,
    price: 250 * 0.5,
  };

  const [qty, setQty] = useState(0);

  const [cartQty, setCartQty] = useState(0);

  const [listItems, setListItems] = useState([]);

  const [status, setStatus] = useState(true);

  const [sideMenu, setSideMenu] = useState("none");

  const handleAddItem = () => {
    const newItem = (
      <div className="Nav__cart-item">
        <img
          className="Nav__thumbnail"
          src="/image-product-1-thumbnail.jpg"
          alt="product-thumbnail"
        />
        <p>
          {productInfo.name} <br />${productInfo.price} x {qty} $
          {productInfo.price * qty}
        </p>
      </div>
    );
    if ((status === true) & (qty > 0)) {
      setListItems([...listItems, newItem]);
      setStatus(false);
      setCartQty(qty);
    }
  };

  const handleDeleteItem = (itemToDelete) => {
    setListItems(listItems.filter((item) => item !== itemToDelete));
    setStatus(true);
    setCartQty(0);
  };

  return (
    <div className="App">
      <MobileNav sideMenu={sideMenu} setSideMenu={setSideMenu}></MobileNav>
      <Nav
        setSideMenu={setSideMenu}
        listItems={listItems}
        handleDeleteItem={handleDeleteItem}
        cartQty={cartQty}
      ></Nav>
      <Main
        qty={qty}
        setQty={setQty}
        handleAddItem={handleAddItem}
        productInfo={productInfo}
      ></Main>
    </div>
  );
}

export default App;
