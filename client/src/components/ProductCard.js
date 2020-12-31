import React from "react";

function ProductCard(props) {
  return (
    <div className="cardSize">
      <div className="Card" style={{ width: "18rem" }}>
        <img
          src={props.thumbnail}
          className="card-img"
          alt="thumbnail"
          style={{ margin: "auto", width: "100px" }}
        />
        <div className="card-body">
          <p className="card-title">{props.title}</p>
          <div className="card-text">
            <p>
              $ {props.price} {props.currency_id}
            </p>
            <p>
              <b>Available quantity</b>: {props.available_quantity}
            </p>
            <p>
              <b>Condition</b>: {props.condition}
            </p>
          </div>
          <button className="buttonAdd" onClick={() => props.addToCart()}>
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
