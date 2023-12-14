import personIcon from "../../assets/images/icon-person.png";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="account">
      <div className="account__icon">
        <img src={personIcon} />
      </div>
      <div className="account_content">
        <div className="account__content__row">
          <p>Hãy đăng nhập để nhận thêm nhiều ưu đãi nhé!</p>
        </div>
        <div className="account__content__row">
          <div className="btn outline">
            <Link to="/register">Đăng ký</Link>
          </div>
          <div className="btn fill">
            <Link to="/login">Đăng nhập</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
