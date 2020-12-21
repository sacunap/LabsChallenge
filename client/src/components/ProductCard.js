import React from 'react'

function ProductCard(props) {

  const regex = /-I./;

  return (
    <div>
      <div>
        <p>{props.title}</p>
        <img src={props.thumbnail.replace(regex, "-O.")} style= {{margin: "auto", width: "100px"}} />
        <div>
          <p>$ {props.price} {props.currency_id}</p>
          <p>Available quantity: {props.available_quantity}</p>
          <p>Condition: {props.condition}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
