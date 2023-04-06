import { useState } from "react";
import ImagesComponent from "./ImageComponent";
import "./main.css";

function Main(props) {
  const { product } = props;
  // Quantity Counter
  const [counter, setCounter] = useState(0);

  const handleIncrementPlus = () => {
    setCounter(counter + 1);
  };
  //dont forget about this
  function test() {
    console.log(productInfo);
  }

  const handleIncrementMinus = () => {
    setCounter(counter - 1);
  };

  return (
    <main className="Main">
      <ImagesComponent></ImagesComponent>
      <section className="Main__product-info">
        <h1 className="Main__brand">Sneaker Company</h1>
        <h1 className="Main__product-name">{product.name}</h1>
        <p className="Main__product-description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <span className="Main__price-w-discount">
          <h1 className="Main__price"> ${product.price}.00</h1>{" "}
          <h1 className="Main__discount">{product.discount * 100}%</h1>
        </span>
        <h1 className="Main__original-price">${product.originalPrice}.00</h1>
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
          <button onClick={test} className="Main__add-to-cart">
            <img src="/icon-cart.svg" alt="add-to-cart" />
            Add to cart
          </button>
        </span>
      </section>
    </main>
  );
}

export default Main;
