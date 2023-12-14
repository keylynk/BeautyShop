import Helmet from "../components/Helmet";
import { Link } from "react-router-dom";
import { Breadcrumb, Input, Select } from "antd";
import { HomeIcon, BackIcon } from "../components/Icons/index";
import Radio from "@mui/material/Radio";
import { useState } from "react";
import productData from "../assets/data/product";
import CheckoutCartItem from "../components/Checkout/CheckoutCartItem";

const Checkout = ({ item }) => {
  const list = productData.getProducts(4);
  const { TextArea } = Input;
  const handleChangeSelect = (value) => {
    // console.log(`selected ${value}`);
  };

  const [selectedValue, setSelectedValue] = useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Helmet title="Thanh toán">
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <HomeIcon />
            <Link to="/">Trang chủ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/cart">Giỏ hàng</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Thanh toán</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="checkout">
        <div className="title">
          <span>Thanh toán đơn hàng</span>
        </div>
        <hr className="line responsive" />
        <Link to="/cart">
          <div className="checkout__back">
            <BackIcon /> <span>Giỏ hàng</span>
          </div>
        </Link>
        <div className="container">
          <div className="checkout__information">
            <div className="checkout__information__section">
              <div className="checkout__title">Thông tin giao hàng</div>
              <hr className="line check" />
              <div className="checkout__information__section__navigation">
                Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link> để được
                <b> freeship và nhận ưu đãi</b>
              </div>
              <div className="checkout__information__section__input">
                <Input className="checkout__information__section__input__area" placeholder="Họ và tên" size="large" />
              </div>
              <div className="checkout__information__section__input">
                <Input className="checkout__information__section__input__area" placeholder="Số điện thoại" size="large" />
              </div>
              <div className="checkout__information__section__input">
                <Input className="checkout__information__section__input__area" placeholder="Địa chỉ Email" size="large" />
              </div>
              <div className="checkout__information__section__input">
                <Input className="checkout__information__section__input__area" placeholder="Địa chỉ" size="large" />
              </div>
              <div className="checkout__information__section__input">
                <Select
                  className="checkout__information__section__input__select"
                  placeholder="Thành phố/Tỉnh"
                  onChange={handleChangeSelect}
                  options={[
                    { value: "1", label: "Thành phố Hồ Chí Minh" },
                    { value: "2", label: "Hà Nội" },
                  ]}
                  size="large"
                />
              </div>
              <div className="checkout__information__section__input">
                <Select
                  className="checkout__information__section__input__select"
                  placeholder="Quận/Huyện"
                  onChange={handleChangeSelect}
                  options={[
                    { value: "1", label: "Quận" },
                    { value: "2", label: "Huyện" },
                  ]}
                  size="large"
                />
              </div>
              <div className="checkout__information__section__input">
                <Select
                  className="checkout__information__section__input__select"
                  placeholder="Phường/Xã"
                  onChange={handleChangeSelect}
                  options={[
                    { value: "1", label: "Phường" },
                    { value: "2", label: "Xã" },
                  ]}
                  size="large"
                />
              </div>
              <div className="checkout__information__section__input">
                <TextArea className="checkout__information__section__input__area" rows={4} placeholder="Ghi chú" size="large" />
              </div>
            </div>
            <div className="checkout__information__section">
              <div className="checkout__title">Phương thức vận chuyển</div>
              <hr className="line check" />
              <div className="checkout__information__section__radio">
                <Radio
                  defaultChecked
                  color="default"
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 20,
                    },
                  }}
                ></Radio>
                <span> Phí giao hàng: 30.000 VNĐ</span>
              </div>
            </div>
            <div className="checkout__information__section">
              <div className="checkout__title">Phương thức thanh toán</div>
              <hr className="line check" />
            </div>
            <div className="checkout__information__section__radio">
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                color="default"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 20,
                  },
                }}
              />
              <span>Thanh toán khi nhận hàng (COD)</span>{" "}
            </div>
            <div className="checkout__information__section__radio">
              <Radio
                checked={selectedValue === "b"}
                onChange={handleChange}
                value="b"
                color="default"
                name="radio-buttons"
                inputProps={{ "aria-label": "B" }}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 20,
                  },
                }}
              />
              <span>Chuyển khoản</span>
            </div>
            <div className="checkout__information__button">
              Tiếp tục thanh toán
            </div>
          </div>

          <div className="checkout__order">
            <div className="checkout__title">Đơn hàng của bạn</div>
            <hr className="line check" />
            <div className="checkout__order__cart">
              {list.map((item) => (
                <CheckoutCartItem item={item} />
              ))}
            </div>
            <hr className="line" />
            <div className="checkout__order__info">
              <div className="checkout__order__info__label">Tạm tính</div>
              <div className="checkout__order__info__content">200.000 VNĐ</div>
            </div>{" "}
            <div className="checkout__order__info">
              <div className="checkout__order__info__label">Phí vận chuyển</div>
              <div className="checkout__order__info__content">30.000 VNĐ</div>
            </div>
            <div className="checkout__order__info hide">
              <div className="checkout__order__info__label">Giảm giá</div>
              <div className="checkout__order__info__content">200.000 VNĐ</div>
            </div>
            <hr className="line" />
            <div className="checkout__order__total">
              <div className="checkout__order__total__label">Tổng cộng</div>
              <div className="checkout__order__total__content">200.000 VNĐ</div>
            </div>
            <div className="checkout__cart__button"></div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Checkout;
