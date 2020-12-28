import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div>
      {cartItems.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        <div>You have {cartItems.length} different items in your cart !</div>
      )}
    </div>
  );
};

export default Cart;
