import { useState } from "react";

export default function ImagesComponent() {
  const [pos, setPos] = useState(1);

  const [highlight, setHighlight] = useState([
    "Main__product-thumbnail highlighted-thumbnail",
    "Main__product-thumbnail",
    "Main__product-thumbnail",
    "Main__product-thumbnail",
  ]);

  const handleHighlight = (num) => {
    const array = [...highlight];
    for (let i = 0; i < array.length; i++) {
      array[i] = "Main__product-thumbnail";
    }
    array[num] = "Main__product-thumbnail highlighted-thumbnail";
    setHighlight(array);
  };

  const handleThumbnail = (num) => {
    setPos(num);
  };

  const handleForward = () => {
    if (pos === 4) {
      setPos(1);
    } else {
      setPos(pos + 1);
    }
  };

  const handleBack = () => {
    if (pos === 1) {
      setPos(4);
    } else {
      setPos(pos - 1);
    }
  };

  const [vis, setVis] = useState("hidden");

  const handleVisibility = () => {
    if (vis === "hidden") {
      setVis("visible");
    } else {
      setVis("hidden");
    }
  };

  return (
    <section className="Main__images-component">
      <section className="Main__product-images">
        <span className="Main__carousel">
          <button
            className="Main__carousel-btn --Main__carousel-btn-back "
            onClick={handleBack}
          >
            <img
              className="Main__carousel-previous"
              src="/icon-previous.svg"
              alt="previous"
            />
          </button>
          <img
            className="Main__product-preview"
            src={`/image-product-${pos}.jpg`}
            alt="product-image"
            onClick={handleVisibility}
          />
          <button
            className="Main__carousel-btn --Main__carousel-btn-back-forward"
            onClick={handleForward}
          >
            <img className="Main__carousel-next" src="/icon-next.svg" alt="" />
          </button>
        </span>
        <span className="Main__product-thumbnail-wrapper">
          <img
            onClick={() => {
              handleThumbnail(1);
              handleHighlight(0);
            }}
            className={highlight[0]}
            src="/image-product-1-thumbnail.jpg"
            alt="product-image-thumbnail"
          />
          <img
            onClick={() => {
              handleThumbnail(2);
              handleHighlight(1);
            }}
            className={highlight[1]}
            src="/image-product-2-thumbnail.jpg"
            alt="product-image-thumbnail"
          />
          <img
            onClick={() => {
              handleThumbnail(3);
              handleHighlight(2);
            }}
            className={highlight[2]}
            src="/image-product-3-thumbnail.jpg"
            alt="product-image-thumbnail"
          />
          <img
            onClick={() => {
              handleThumbnail(4);
              handleHighlight(3);
            }}
            className={highlight[3]}
            src="/image-product-4-thumbnail.jpg"
            alt="product-image-thumbnail"
          />
        </span>
      </section>
      <section
        className="Main__product-images --Main__product-images-overlay"
        style={{ visibility: vis }}
      >
        <span className="Main__carousel">
          <img
            className="Main__close"
            src="/icon-close.svg"
            alt="close"
            onClick={handleVisibility}
          />
          <button
            className="Main__carousel-btn --Main__carousel-btn-back --Main__carousel-btn-overlay"
            onClick={handleBack}
          >
            <img src="/icon-previous.svg" alt="previous" />
          </button>
          <img
            className="Main__product-preview --Main__product-preview-overlay"
            src={`/image-product-${pos}.jpg`}
            alt="product-image"
          />
          <button
            className="Main__carousel-btn --Main__carousel-btn-back-forward --Main__carousel-btn-overlay"
            onClick={handleForward}
          >
            <img src="/icon-next.svg" alt="" />
          </button>
        </span>
        <span className="Main__product-thumbnail-wrapper">
          <img
            onClick={() => {
              handleThumbnail(1);
              handleHighlight(0);
            }}
            className={highlight[0]}
            src="/image-product-1-thumbnail.jpg"
            alt="product-image-thumbnail"
          />
          <img
            onClick={() => {
              handleThumbnail(2);
              handleHighlight(1);
            }}
            className={highlight[1]}
            src="/image-product-2-thumbnail.jpg"
            alt="product-image-thumbnail"
          />
          <img
            onClick={() => {
              handleThumbnail(3);
              handleHighlight(2);
            }}
            className={highlight[2]}
            src="/image-product-3-thumbnail.jpg"
            alt="product-image-thumbnail"
          />
          <img
            onClick={() => {
              handleThumbnail(4);
              handleHighlight(3);
            }}
            className={highlight[3]}
            src="/image-product-4-thumbnail.jpg"
            alt="product-image-thumbnail"
          />
        </span>
      </section>
    </section>
  );
}
