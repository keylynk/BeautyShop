import Helmet from "../components/Helmet";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb, Input, Button } from "antd";
import { HomeIcon, BackIcon } from "../components/Icons/index";
import CartItem from "../components/Cart/CartItem";
import productData from "../assets/data/product";
const Cart = () => {
  const list = productData.getProducts(4);

  return (
    <Helmet title="Giỏ hàng">
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <HomeIcon />
            <Link to="/">Trang chủ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Giỏ hàng</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="cart">
        <div className="title">
          <span>Giỏ hàng của bạn</span>
        </div>
        <hr className="line responsive" />
        <Link to="/">
          <div className="cart__back">
            <BackIcon /> <span>Tiếp tục chọn sản phẩm</span>
          </div>
        </Link>
        <div className="cart__total-item">
          Có<b>4</b>sản phẩm trong giỏ hàng
        </div>
        <hr className="line underline" />
        <div className="container">
          <div className="cart__list">
            {list.map((item, index) => (
              <CartItem item={item} key={index} />
            ))}
          </div>
          <div className="cart__payment">
            <div className="cart__payment__title">Tổng cộng</div>
            <div className="cart__payment__info">
              <div className="cart__payment__info__label">Tổng:</div>
              <div className="cart__payment__info__content">200.000 VNĐ</div>
            </div>
            <hr className="line payment" />
            <div className="cart__payment__info hide">
              <div className="cart__payment__info__label">Ưu đãi</div>
              <div className="cart__payment__info__content">200.000 VNĐ</div>
            </div>
            <hr className="line payment hide" />
            <div className="cart__payment__info">
              <Input.Group compact>
                <Input
                  className="cart__payment__info__input"
                  style={{ width: "calc(100% - 92px)" }}
                  placeholder="Nhập mã giảm giá tại đây"
                  size="large"
                />
                <Button
                  type="primary"
                  size="large"
                  className="cart__payment__info__submit"
                >
                  Sử dụng
                </Button>
              </Input.Group>
            </div>
            <Link to="/checkout">
              <div className="cart__payment__button">Thanh toán</div>
            </Link>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
