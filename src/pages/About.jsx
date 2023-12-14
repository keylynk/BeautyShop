import Helmet from "../components/Helmet";
import Logo from "../components/Logo";
import { Breadcrumb, Input } from "antd";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  LocationIcon,
  MobileIcon,
  EmailIcon,
} from "../components/Icons/index";

const About = () => {
  return (
    <Helmet title="Về chúng tôi">
      <div className="breadcrumb" style={{ visibility: "hidden" }}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <HomeIcon />
            <Link to="/">Trang chủ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Liên hệ</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="about">
        <div className="about__logo">
          <Logo />
        </div>
        <div className="about__content">
          <p>
            <span className="about__content__label">Beauty Shop </span> là
            <b> hệ thống cửa hàng mỹ phẩm chính hãng</b> và dịch vụ chăm sóc sắc
            đẹp chuyên sâu với hệ thống cửa hàng trải dài trên toàn quốc; và
            <b> hiện đang là đối tác phân phối chiến lược</b> tại thị trường
            Việt Nam của hàng loạt thương hiệu lớn như:
            <i>
              La Roche-Posay, Eucerin, L'oreal, Bioderma, Klairs, Naris
              Cosmetics, Maybelline, Vichy, Skin1004, Cocoon, Australis,
              Cetaphil, Anessa, Paula's Choice, Some By Mi, B.O.M, Vaseline,
              Sunplay, Silky Girl, Senka, Naruko, Angel's Liquid, DHC, SVR,
              Simple, Bio-essence, Tsubaki, 3CE, BNBG, Laneige, Vacosi,
              Lemonade, Hatomugi, Avène, Silcot, Neutrogena, Garnier, Mediheal,
              Timeless, Curél,...
            </i>
          </p>
          <p>
            Với phương châm mang đến giá trị tốt nhất,
            <span className="about__content__label"> Beauty Shop </span> luôn nỗ
            lực không ngừng nhằm nâng cao chất lượng sản phẩm & dịch vụ để khách
            hàng có được những trải nghiệm mua sắm tốt nhất. Toàn bộ sản phẩm có
            ở <span className="about__content__label"> Beauty Shop </span> đều được
            cam kết 100% chính hãng, đảm bảo nguồn gốc xuất xứ, có đầy đủ hóa
            đơn mua hàng VAT và tem phụ Tiếng Việt, với mức giá luôn tốt hàng
            đầu thị trường trong mọi thời điểm.
          </p>
          <p>
            <span className="about__content__label"> Beauty Shop </span> sở hữu đa
            dạng các mặt hàng từ cao cấp đến bình dân, đáp ứng mọi nhu cầu của
            khách hàng. Đặc biệt, tại{" "}
            <span className="about__content__label"> Beauty Shop </span> luôn có
            đầy đủ mẫu thử của mỗi sản phẩm và nhân viên tư vấn, giúp khách hàng
            dễ dàng chọn lựa và tăng trải nghiệm mua sắm. sở hữu đa dạng các mặt
            hàng từ cao cấp đến bình dân, đáp ứng mọi nhu cầu của khách hàng.
          </p>
        </div>
      </div>
    </Helmet>
  );
};

export default About;
