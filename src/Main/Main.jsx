import "./main.css";

function Main() {
  return (
    <main className="Main">
      <section className="Main__product-images">
        <img
          className="Main__product-preview"
          src="public/image-product-1.jpg"
          alt="product-image"
        />
        <span className="Main__product-thumbnail-wrapper">
          <img
            className="Main__product-thumbnail"
            src="public/image-product-1-thumbnail.jpg"
            alt="product-image-thumbnail"
          />
          <img
            className="Main__product-thumbnail"
            src="public/image-product-2-thumbnail.jpg"
            alt="product-image-thumbnail"
          />
          <img
            className="Main__product-thumbnail"
            src="public/image-product-3-thumbnail.jpg"
            alt="product-image-thumbnail"
          />
          <img
            className="Main__product-thumbnail"
            src="public/image-product-4-thumbnail.jpg"
            alt="product-image-thumbnail"
          />
        </span>
      </section>
      <section className="Main__product-info">
        <h1 className="Main__brand">Sneaker Company</h1>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <span>
          <h1> $125.00</h1> <h1>50%</h1>
        </span>
        <h1> $250.00</h1>
        <span>
          <span>
            <button>
              <img src="/icon-minus.svg" alt="minus" />
            </button>
            <button>0</button>
            <button>
              <img src="/icon-plus.svg" alt="plus" />
            </button>
          </span>
          <button>
            <img src="/icon-cart.svg" alt="add-to-cart" />
            Add to cart
          </button>
        </span>
      </section>
    </main>
  );
}

export default Main;
