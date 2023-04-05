import { useState } from "react";
import "./main.css";

function Main() {
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

  //Product info, need

  const productInfo = {
    name: "Fall Limited Edition Sneakers",
    quantity: counter,
    total: 125 * counter,
    discount: 0.5,
    originalPrice: 250,
    price: 250 * 0.5,
  };

  //Thumbnails, make carousel component
  const [pos, setPos] = useState(1);

  const handleThumbnail = (num) => {
    setPos(num);
  };

  return (
    <main className="Main">
      <section className="Main__product-images">
        <img
          className="Main__product-preview"
          src={`/image-product-${pos}.jpg`}
          alt="product-image"
        />
        <span className="Main__product-thumbnail-wrapper">
          <img
            onClick={() => handleThumbnail(1)}
            className="Main__product-thumbnail"
            src="/image-product-1-thumbnail.jpg"
            alt="product-image-thumbnail"
          />
          <img
            onClick={() => handleThumbnail(2)}
            className="Main__product-thumbnail"
            src="/image-product-2-thumbnail.jpg"
            alt="product-image-thumbnail"
          />
          <img
            onClick={() => handleThumbnail(3)}
            className="Main__product-thumbnail"
            src="/image-product-3-thumbnail.jpg"
            alt="product-image-thumbnail"
          />
          <img
            onClick={() => handleThumbnail(4)}
            className="Main__product-thumbnail"
            src="/image-product-4-thumbnail.jpg"
            alt="product-image-thumbnail"
          />
        </span>
      </section>
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
