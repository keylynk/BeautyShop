import Product from "./Home/Product";

const ProductListResponsive = (props) => {
  return (
    <div className="product-list-reponsive">
      {props.data.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductListResponsive;
