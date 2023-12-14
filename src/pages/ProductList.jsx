import Helmet from "../components/Helmet";
import Category from "../components/ProductList/Category";
import Card from "../components/ProductList/Card";

import Row from "react-bootstrap/Row";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb, Select } from "antd";

import { HomeIcon } from "../components/Icons/index";
import productData from "../assets/data/product";
import categoryData from "../assets/data/category";

const ProductList = () => {
  let slug = useParams().categorySlug;
  const productList = productData.getProductsByCateSlug(slug);
  const category = categoryData.getCategoryBySlug(slug);
  const [products, setProducts] = useState(productList);

  //state 1 mặc định
  const [cateSlug, setCategory] = useState("deal-soc");

  function changeCategory(idCate) {
    //change category when click
    setCategory(idCate);
  }

  const changeProductList = useCallback(() => {
    let temp = productData.getAllProducts();
    if (cateSlug === "deal-soc") {
      temp = temp.filter((e) => e.dealSoc === true);
    } else if (cateSlug === "duong-da") {
      temp = temp.filter((e) => e.categorySlug === "duong-da");
    } else if (cateSlug === "trang-diem") {
      temp = temp.filter((e) => e.categorySlug === "trang-diem");
    } else if (cateSlug === "cham-soc-toc") {
      temp = temp.filter((e) => e.categorySlug === "cham-soc-toc");
    } else if (cateSlug === "cham-soc-co-the") {
      temp = temp.filter((e) => e.categorySlug === "cham-soc-co-the");
    } else if (cateSlug === "khac") {
      temp = temp.filter((e) => e.categorySlug === "khac");
    }
    setProducts(temp);
  }, [cateSlug, setCategory]);

  useEffect(() => {
    changeProductList();
  }, [changeProductList]);

  return (
    <Helmet title={category.display}>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <HomeIcon />
            <Link to="/">Trang chủ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link
              to="/product-list/deal-soc"
              onClick={() => {
                setCategory("deal-soc");
              }}
            >
              Sản phẩm
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{category.display}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {/* End breadcrumb */}
      <div className="product-list">
        {/* Title */}
        <div className="title">
          <span>{category.display}</span>
        </div>
        <hr className="line responsive" />
        {/* End title */}
        <div className="container">
          <div className="product-list__category">
            <Category category={changeCategory} />
          </div>
          <div className="product-list__area">
            <div className="product-list__area__sort">
              <Select
                className="product-list__area__sort__select"
                defaultValue={"Hiển thị theo mặc định"}
                size="large"
                options={[
                  { value: "1", label: "Hiển thị theo mặc định" },
                  { value: "2", label: "Hiển thị theo sản phẩm mới" },
                  { value: "3", label: "Hiển thị theo giá cao nhất" },
                  { value: "4", label: "Hiển thị theo giá thấp nhất" },
                ]}
              ></Select>
            </div>
            <div className="product-list__area__wrapper">
              <Row className="product-list__area__wrapper__row">
                {products.map((item) => (
                  <div
                    className="product-list__area__wrapper__row__item"
                    key={item.id}
                  >
                    <Card item={item} style={{ margin: 0 }} />
                  </div>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default ProductList;
