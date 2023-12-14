import React from "react";

const CheckoutCartItem = ({ item }) => {
  const quantity = 2;
  const total = item.sale * quantity;
  return (
    <div className="cart__checkout">
      <div className="cart__checkout__img">
        <img src={item.image01} />
      </div>
      <div className="cart__checkout__title">{item.title}</div>
      <div className="cart__checkout__sub">
        <div className="cart__checkout__sub__quantity">SL: {quantity}</div>
        <div className="cart__checkout__sub__price">{total}.000 VNĐ</div>
      </div>
    </div>
  );
};

export default CheckoutCartItem;
