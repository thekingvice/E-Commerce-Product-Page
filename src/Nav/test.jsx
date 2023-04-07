const product = { name: "shoe", qty: 0 };

function Content() {
  return (
    <div>
      <div>{product.qty}</div>
    </div>
  );
}

//ALL FUNCTIONS ARE SEPARATE COMPONENTS IN SEPARATE FILES, ALL COMPONENTS CAN ACCESS PRODUCT
// Btn() <button/> onclick => add Content() to Cart()
// Once Content() is in Cart().  Content() <Button class="delete"/> => onclick remove Content() from Cart()
