import React, { useState, useEffect, useCallback, useRef } from "react";
import { CloseIcon, PlusIcon, MinusIcon } from "../Icons/index";
import { Input } from "antd";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };
  const onInputChange = useCallback((e) => {
    setQuantity(e.target.value);
  }, []);

  //to know width device
  const [mobile, setMobile] = useState(false);
  const windowWidth = useRef(window.innerWidth);
  useEffect(() => {
    if (windowWidth.current <= 1180) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  const total = quantity * item.sale;

  return (
    <div className="cart__item">
      <div className="cart__item__top">
        <div className="cart__item__top__title">{item.title}</div>
        <div className="cart__item__top__close">
          <CloseIcon />
        </div>
      </div>
      <div className="cart__item__content">
        <div className="cart__item__content__img">
          <img src={item.image01} alt="" />
        </div>
        <div className="cart__item__content__quantity">
          <div
            className="cart__item__content__quantity__button"
            onClick={() => updateQuantity("minus")}
          >
            <MinusIcon />
          </div>
          <Input
            className="cart__item__content__quantity__input"
            value={quantity}
            size="large"
            bordered={false}
            onChange={onInputChange}
          ></Input>
          <div
            className="cart__item__content__quantity__button"
            onClick={() => updateQuantity("plus")}
          >
            <PlusIcon />
          </div>
        </div>
        <div
          className="cart__item__content__unit"
          style={{ display: quantity > 1 && !mobile ? "block" : "none" }}
        >
          {item.sale}.000 VNĐ
        </div>
        <div className="cart__item__content__total">{total}.000 VNĐ</div>
      </div>
      <hr className="line" />
    </div>
  );
};

export default CartItem;
