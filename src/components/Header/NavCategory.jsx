import { Link } from "react-router-dom";
import categoryList from "../../assets/data/category";

const NavCategory = (props) => {
  const onClick = (e) => {
    props.category(e);
  };

  return (
    <div className="navCate">
      {categoryList.getAllCategories().map((item) => (
        <Link
          key={item.id}
          to={`/product-list/${item.categorySlug}`}
          onClick={() => onClick(item.categorySlug)}
        >
          <div className="navCate__item">{item.display}</div>
        </Link>
      ))}
    </div>
  );
};

export default NavCategory;
