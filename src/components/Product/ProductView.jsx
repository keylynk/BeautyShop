import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Rate } from "antd";
import { HeartOutline, HeartFill, PlusIcon, MinusIcon } from "../Icons/index";
import { Input } from "antd";
// import { withRouter } from "react-router";
// import { useDispatch } from "react-redux";
import policyData from "../../assets/data/policy";
// import { addItem } from '../redux/shopping-cart/cartItemsSlide'
// import { remove } from '../redux/product-modal/productModalSlice'

const ProductView = (props) => {
  let product = props.product;
  const [previewImg, setPreviewImg] = useState(product.image01);
  const [addWishlist, setWishlist] = useState(false);

  const saving = product.price - product.sale;

  console.log(product);

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
  console.log(quantity);
  useEffect(() => {
    setPreviewImg(product.image01);
    setQuantity(1);
  }, [product]);
  //   const dispatch = useDispatch();

  //   if (product === undefined)
  //     product = {
  //       title: "",
  //       price: "",
  //       image01: null,
  //       image02: null,
  //       categorySlug: "",
  //       colors: [],
  //       slug: "",
  //       size: [],
  //       description: "",
  //     };

  //   const [descriptionExpand, setDescriptionExpand] = useState(false);

  //   const check = () => {
  //     if (color === undefined) {
  //       alert("Vui lòng chọn màu sắc!");
  //       return false;
  //     }

  //     if (size === undefined) {
  //       alert("Vui lòng chọn kích cỡ!");
  //       return false;
  //     }

  //     return true;
  //   };

  //   const addToCart = () => {
  //     if (check()) {
  //       let newItem = {
  //         slug: product.slug,
  //         color: color,
  //         size: size,
  //         price: product.price,
  //         quantity: quantity,
  //       };
  //       if (dispatch(addItem(newItem))) {
  //         alert("Success");
  //       } else {
  //         alert("Fail");
  //       }
  //     }
  //   };

  //   const goToCart = () => {
  //     if (check()) {
  //       let newItem = {
  //         slug: product.slug,
  //         color: color,
  //         size: size,
  //         price: product.price,
  //         quantity: quantity,
  //       };
  //       if (dispatch(addItem(newItem))) {
  //         dispatch(remove());
  //         props.history.push("/cart");
  //       } else {
  //         alert("Fail");
  //       }
  //     }
  //   };

  return (
    <div className="product-view">
      <div className="product-view__top">
        <div className="product-view__top__visual">
          <div className="product-view__top__visual__list">
            <div
              className="product-view__top__visual__list__item"
              onClick={() => setPreviewImg(product.image01)}
            >
              <img src={product.image01} alt="" />
            </div>
            <div
              className="product-view__top__visual__list__item"
              onClick={() => setPreviewImg(product.image02)}
            >
              <img src={product.image02} alt="" />
            </div>
            <div
              className="product-view__top__visual__list__item"
              onClick={() => setPreviewImg(product.image03)}
            >
              <img src={product.image03} alt="" />
            </div>
            <div
              className="product-view__top__visual__list__item"
              onClick={() => setPreviewImg(product.image04)}
            >
              <img src={product.image04} alt="" />
            </div>
          </div>
          <div className="product-view__top__visual__main">
            <img src={previewImg} alt="" />
          </div>
        </div>
        <div
          className="product-view__top__info"
          //   className={`product-description ${descriptionExpand ? "expand" : ""}`}
        >
          <div className="product-view__top__info__title">{product.title}</div>
          <div className="product-view__top__info__status">
            Tình trạng: <span>{product.status}</span>
          </div>
          <div className="product-view__top__info__review">
            <li>
              <Rate allowHalf disabled defaultValue={product.stars} />
            </li>
            <li>{product.stars} (3)</li>
            <li>
              <a>Viết đánh giá </a>
            </li>
          </div>
          <div className="product-view__top__info__price">
            <div className="product-view__top__info__price__sale">
              {product.sale}.000 VNĐ
            </div>
            <div className="product-view__top__info__price__origin">
              {product.price}.000 VNĐ
            </div>
            <div className="product-view__top__info__price__percent">
              {product.percent}%
            </div>
            <div
              className="product-view__top__info__price__wishlist"
              onClick={() => {
                setWishlist(!addWishlist);
              }}
            >
              {addWishlist ? (
                <HeartFill size={28} />
              ) : (
                <HeartOutline size={28} />
              )}
            </div>
          </div>
          <div className="product-view__top__info__saving">
            (Tiết kiệm <span>{saving}.000 VNĐ)</span>
          </div>
          <div className="product-view__top__info__control">
            <div className="product-view__top__info__control__quantity">
              <div
                className="product-view__top__info__control__quantity__button"
                onClick={() => updateQuantity("minus")}
              >
                <MinusIcon />
              </div>
              <Input
                className="product-view__top__info__control__quantity__input"
                value={quantity}
                size="large"
                bordered={false}
                onChange={onInputChange}
              ></Input>
              <div
                className="product-view__top__info__control__quantity__button"
                onClick={() => updateQuantity("plus")}
              >
                <PlusIcon />
              </div>
            </div>
            <div className="product-view__top__info__control__add-cart">
              <div className="product-view__top__info__control__add-cart__button">
                Thêm vào giỏ
              </div>
            </div>
          </div>
          <div className="product-view__top__info__policy">
            {policyData.getAllPolicies().map((item) => (
              <div
                key={item.id}
                className="product-view__top__info__policy__item"
              >
                <div className="product-view__top__info__policy__item__icon">
                  {item.smallIcon}
                </div>
                <div className="product-view__top__info__policy__item__content">
                  {item.short}
                </div>
              </div>
            ))}
          </div>
          {/* <div
            className="product-description__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div> */}
          {/* <div className="product-description__toggle">
            <Button
              size="sm"
              onClick={() => setDescriptionExpand(!descriptionExpand)}
            >
              {descriptionExpand ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div> */}
        </div>
      </div>
      {/* 
        <div className="product__info__item">
          <Button onClick={() => addToCart()}>thêm vào giỏ</Button>
          <Button onClick={() => goToCart()}>mua ngay</Button>
        </div>
      </div>
      <div
        className={`product-description mobile ${
          descriptionExpand ? "expand" : ""
        }`}
      >
        <div className="product-description__title">Chi tiết sản phẩm</div>
        <div
          className="product-description__content"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
        <div className="product-description__toggle">
          <Button
            size="sm"
            onClick={() => setDescriptionExpand(!descriptionExpand)}
          >
            {descriptionExpand ? "Thu gọn" : "Xem thêm"}
          </Button>
        </div>
      </div> */}
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object,
};

// export default withRouter(ProductView);
export default ProductView;
