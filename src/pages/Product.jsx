import Helmet from "../components/Helmet";
import ProductListResponsive from "../components/ProductListMobile";
import ProductSlider from "../components/ProductSlider";
import ProductView from "../components/Product/ProductView";
import Section, { SectionBody, SectionTitle } from "../components/Section";

import { Link, useParams } from "react-router-dom";
import { Breadcrumb, Rate, Select } from "antd";
import { HomeIcon } from "../components/Icons/index";

import productData from "../assets/data/product";
import reviewData from "../assets/data/review";
import categoryData from "../assets/data/category";

const Product = () => {
  const { slug } = useParams();
  const product = productData.getProductBySlug(slug);
  const category = categoryData.getCategoryBySlug(product.categorySlug);
  const relative = productData.getAllProducts(8);
  const reviewCount = reviewData.count();
  const avgStar = reviewData.average();
  const review = reviewData.getAllReviews();
  // console.log(slug, category);
  return (
    <Helmet title={product.title}>
      <div className="product">
        <div className="breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>
              <HomeIcon />
              <Link to="/">Trang chủ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/product-list/deal-soc">Sản phẩm</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to={`/product-list/${product.categorySlug}`}>
                {category.display}
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{product.title}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <ProductView product={product} />
        <Section>
          <SectionBody>
            <div className="product__description">
              <div className="product__description__container">
                <div className="product__description__container__title">
                  Mô tả sản phẩm
                </div>
                <div className="product__description__container__content">
                  {product.description}
                </div>
              </div>
            </div>
          </SectionBody>
        </Section>
      </div>
      <Section>
        <SectionTitle>Có thể bạn sẽ thích</SectionTitle>
        <SectionBody>
          <ProductSlider data={relative}></ProductSlider>
          <ProductListResponsive data={relative}></ProductListResponsive>
        </SectionBody>
      </Section>
      <Section>
        <SectionBody>
          <div className="product__review">
            <div className="product__review__container">
              <div className="product__review__container__title">
                {reviewCount} Đánh giá
              </div>
              <hr className="line" />
              <div className="product__review__container__overview">
                <div className="product__review__container__overview__total">
                  <span>{avgStar}/5.0</span>
                </div>
                <div className="product__review__container__overview__rating">
                  <Rate allowHalf disabled defaultValue={product.stars} />
                </div>
                <div className="product__review__container__overview__button">
                  Viết đánh giá
                </div>
                <div className="product__review__container__overview__sort">
                  <Select
                    className="product__review__container__overview__sort__select"
                    defaultValue={"Mới nhất"}
                    size="large"
                    options={[
                      { value: "1", label: "Mới nhất" },
                      { value: "2", label: "Cũ nhất" },
                      { value: "3", label: "Cao nhất" },
                      { value: "4", label: "Thấp nhất" },
                    ]}
                  ></Select>
                </div>
                <hr className="line review-overview" />
              </div>
              <div className="product__review__container__list">
                {review.map((item) => (
                  <div
                    key={item.id}
                    className="product__review__container__list__item"
                  >
                    <div className="product__review__container__list__item__user">
                      <div className="product__review__container__list__item__user__stars">
                        <div className="product__review__container__list__item__user__stars__label">
                          Đánh giá:
                        </div>
                        <div className="product__review__container__list__item__user__stars__rating">
                          <Rate allowHalf disabled defaultValue={item.star} />
                        </div>
                      </div>
                      <hr className="line review-item" />
                      <div className="product__review__container__list__item__user__name">
                        {item.user} <hr className="line review-item" />
                      </div>
                      <div className="product__review__container__list__item__user__date">
                        Ngày đăng: <span>{item.date}</span>{" "}
                        <hr className="line review-item last" />
                      </div>
                    </div>
                    <div className="product__review__container__list__item__content">
                      <div className="product__review__container__list__item__content__title">
                        {item.title}
                      </div>
                      <div className="product__review__container__list__item__content__comment">
                        {item.comment}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
