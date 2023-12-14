import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div className="card-mobile">
      <Link to={`/product-list/${item.categorySlug}/${item.slug}`}>
        <div className="card-mobile__img">
          <img src={item.image01} alt="" />
        </div>
        <div className="card-mobile__info">
          <div className="card-mobile__info__title">
            {item.title.substring(0, 60)}
          </div>
          <div className="card-mobile__info__price">
            <div className="card-mobile__info__price__sale">
              <div className="card-mobile__info__price__sale__origin">
                {item.sale}.000 VNĐ
              </div>
              <div className="card-mobile__info__price__sale__percent">
                {item.percent}%
              </div>
            </div>
            <div className="card-mobile__info__price__new">
              {item.price}.000 VNĐ
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
