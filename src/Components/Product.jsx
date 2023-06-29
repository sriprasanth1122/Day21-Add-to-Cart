import React from "react";

function Product({ item, productItem, handleAddToCart, rating }) {
  return (
    <div className="card m-2" style={{ width: "17rem" }}>
      <img src={item.pic} className="card-img-top m-1" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <h4 className="card-title">{item.title1}</h4>

        <p className="card-text">{item.details}</p>
        <p>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </p>
        <h4 className="card-text">{item.price}</h4>
        <button
          disabled={productItem.some((obj) => obj.id === item.id)}
          onClick={() => {
            handleAddToCart(item);
          }}
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
