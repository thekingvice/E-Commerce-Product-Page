import { useState } from "react";
import "./nav.css";

function Nav() {
  return (
    <nav className="Nav">
      <div className="Nav__left">
        <img className="Nav__hamburger" src="/icon-menu.svg" alt="hamburger" />
        <img className="Nav__logo" src="public/logo.svg" alt="logo" />
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
        <img className="Nav__cart" src="public/icon-cart.svg" alt="" />
        <img className="Nav__avatar" src="public/image-avatar.png" alt="" />
      </div>
    </nav>
  );
}

export default Nav;
