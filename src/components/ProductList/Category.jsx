import { Link } from "react-router-dom";
import categoryList from "../../assets/data/category";

const Category = (props) => {
  const onClick = (e) => {
    props.category(e);
  };
  return (
    <ul className="category">
      {categoryList.getAllCategories().map((item) => (
        <Link
          key={item.id}
          to={`/product-list/${item.categorySlug}`}
          onClick={() => onClick(item.categorySlug)}
        >
          <li className="category__item">
            {item.display}
            <hr className="line" />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default Category;
