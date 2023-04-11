import { useState } from "react";
import "./nav.css";

function Nav(props) {
  const { setSideMenu, cartQty, listItems, handleDeleteItem } = props;

  const [display, setDisplay] = useState("none");

  const handleClick = () => {
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };

  const handleSideMenu = () => {
    setSideMenu("flex");
  };

  return (
    <nav className="Nav">
      <div className="Nav__left">
        <img
          className="Nav__hamburger"
          src="/icon-menu.svg"
          alt="hamburger"
          onClick={handleSideMenu}
        />
        <img className="Nav__logo" src="/logo.svg" alt="logo" />
        <a className="Nav__link" href="">
          Collections
        </a>
        <a className="Nav__link" href="">
          Men
        </a>
        <a className="Nav__link" href="">
          Women
        </a>
        <a className="Nav__link" href="">
          About
        </a>
        <a className="Nav__link" href="">
          Contact
        </a>
      </div>
      <div className="Nav__right">
        <img
          className="Nav__cart-icon"
          onClick={handleClick}
          src="/icon-cart.svg"
          alt=""
        />
        <aside
          className="Nav__cart-qty"
          style={{ display: cartQty > 0 ? "block" : "none" }}
        >
          {cartQty}
        </aside>
        <aside className="Nav__cart" style={{ display: display }}>
          <h1 className="Nav__cart-heading">Cart</h1>
          <ul className="Nav__cart-list">
            {listItems.map((item, index) => (
              <li key={index}>
                {item}
                <button
                  className="Nav__delete"
                  onClick={() => handleDeleteItem(item)}
                >
                  {" "}
                  <img src="/icon-delete.svg" alt="delete" />{" "}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="Nav__checkout"
            style={{ display: cartQty > 0 ? "block" : "none" }}
          >
            Checkout
          </button>
          <div
            className="Nav__empty"
            style={{ display: cartQty > 0 ? "none" : "block" }}
          >
            Your cart is empty.
          </div>
        </aside>
        <img className="Nav__avatar" src="/image-avatar.png" alt="" />
      </div>
    </nav>
  );
}

export default Nav;
