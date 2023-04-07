import { useState, useRef } from "react";
import "./nav.css";

function Nav() {
  // const { product, cartItems, setCartItems } = props;

  return (
    <nav className="Nav">
      <div className="Nav__left">
        <img className="Nav__hamburger" src="/icon-menu.svg" alt="hamburger" />
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
        <img className="Nav__cart-icon" src="/icon-cart.svg" alt="" />
        <div>0</div>
        <aside className="Nav__cart">
          <h1>Cart</h1>
          <div>Your cart is empty.</div>
        </aside>
        <img className="Nav__avatar" src="/image-avatar.png" alt="" />
      </div>
    </nav>
  );
}

export default Nav;
