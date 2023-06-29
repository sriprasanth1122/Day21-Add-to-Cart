import "./App.css";
import Product from "./Components/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import CartItem from "./Components/CartItem";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const product = [
    {
      id: 10041,
      pic: "assets/watch-40-alum.jpeg",
      title: "Apple Watch",
      title1: "Midnight Aluminium",
      details:
        "The aluminium case is lightweight and made from 100 per cent recycled aerospace-grade alloy",
      price: 34900,
      rating: 4,
    },
    {
      id: 10042,
      pic: "assets/Titanium-case.jpeg",
      title: "Apple Watch",
      title1: "Starlight Aluminium",
      details:
        "The aerospace-grade titanium case strikes the perfect balance of weight,100 per cent recycled",
      price: 89900,
      rating: 4,
    },
    {
      id: 10043,
      pic: "assets/alum-starlight.jpeg",
      title: "Apple Watch",

      title1: "Starlight Alpine",
      details:
        "The Sport Band is made from a durable yet surprisingly soft high-performance",
      price: 45900,
      rating: 3,
    },
    {
      id: 10044,
      pic: "assets/Titanium-ultra.jpeg",
      title: "Apple Watch",

      title1: "White Ocean",
      details:
        "The Ocean Band is moulded in a high-performance elastomer with a tubular geometry allowing it to stretch for a perfect fit",
      price: 74500,
      rating: 4,
    },
    {
      id: 10044,
      pic: "assets/Titanium-ultra_VW.jpeg",
      title: "Apple Watch",

      title1: "Midnight Ocean",
      details:
        "The Ocean Band is moulded in a high-performance elastomer with a tubular geometry allowing it to stretch for a perfect fit",
      price: 84000,
      rating: 4,
    },
  ];

  let addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
  };

  let removeCartItem = (item) => {
    //find which object to be removed
    let index = cart.findIndex((obj) => obj.id === item.id);
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - item.price);
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {product.map((wn) => {
              return (
                <Product
                  item={wn}
                  productItem={cart}
                  handleAddToCart={addToCart}
                ></Product>
              );
            })}
          </div>
        </div>
        <div class="col-lg-3">
          {cart.length === 0 ? (
            <div> No items in Cart </div>
          ) : (
            <div className="row mt-2">
              <ol className="list-group list-group-numbered">
                {cart.map((mw) => {
                  return (
                    <CartItem
                      cartItem={mw}
                      removeCartItem={removeCartItem}
                    ></CartItem>
                  );
                })}
              </ol>
              <h1>Total - {total}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
