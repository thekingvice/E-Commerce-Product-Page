import { useState, useEffect } from "react";
import ImagesComponent from "./ImageComponent";
import "./main.css";

function Main(props) {
  const { handleAddItem, setQty, productInfo } = props;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setQty(counter);
  }, [counter]);

  const handleIncrementPlus = () => {
    setCounter(counter + 1);
  };

  const handleIncrementMinus = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <main className="Main">
      <ImagesComponent></ImagesComponent>
      <section className="Main__product-info">
        <h1 className="Main__brand">Sneaker Company</h1>
        <h1 className="Main__product-name">{productInfo.name}</h1>
        <p className="Main__product-description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <span className="Main__price-w-discount">
          <h1 className="Main__price"> ${productInfo.price}.00</h1>{" "}
          <h1 className="Main__discount">{productInfo.discount * 100}%</h1>
        </span>
        <h1 className="Main__original-price">
          ${productInfo.originalPrice}.00
        </h1>
        <span className="Main__counter-w-add-to-cart">
          <span className="Main__counter">
            <button
              className="Main__counter-button --Main__counter-button-minus"
              onClick={handleIncrementMinus}
            >
              <img src="/icon-minus.svg" alt="minus" />
            </button>
            <div className="Main__counter-indicator">{counter}</div>
            <button
              className="Main__counter-button --Main__counter-button-plus"
              onClick={handleIncrementPlus}
            >
              <img src="/icon-plus.svg" alt="plus" />
            </button>
          </span>
          <button className="Main__add-to-cart" onClick={handleAddItem}>
            <img
              className="Main__cart-icon"
              src="/icon-cart.svg"
              alt="add-to-cart"
            />
            Add to cart
          </button>
        </span>
      </section>
    </main>
  );
}

export default Main;
