import "./App.css";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";

function App() {
  const productInfo = {
    name: "Fall Limited Edition Sneakers",
    discount: 0.5,
    originalPrice: 250,
    price: 250 * 0.5,
  };

  // quantity: counter,
  // total: 125 * counter,

  return (
    <div className="App">
      <Nav></Nav>
      <Main product={productInfo}></Main>
    </div>
  );
}

export default App;
