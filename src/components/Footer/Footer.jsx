import Logo from "../Logo";
import logoSale from "../../assets/images/logoSaleNoti.png";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import { useRef, useState } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  GitHubIcon,
  UpIcon,
  DownIcon,
} from "../Icons/index";

const footerAboutLinks = [
  {
    display: "Giới thiệu",
    path: "/about",
  },
  {
    display: "Liên hệ",
    path: "/about",
  },
  {
    display: "Tuyển dụng",
    path: "/about",
  },
  {
    display: "Tin tức",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Chính sách & quy định chung",
    path: "/about",
  },
  {
    display: "Chính sách giao hàng & thanh toán",
    path: "/about",
  },
  {
    display: "Chính sách mua hàng",
    path: "/about",
  },
  {
    display: "Chính sách đổi trả",
    path: "/about",
  },
];

const Footer = () => {
  //open sub menu
  const subAboutRef = useRef();
  const [openAboutSub, setOpenAboutSub] = useState(false);

  const subPolicyRef = useRef();
  const [openPolicySub, setOpenPolicySub] = useState(false);

  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <hr className="line" style={{ marginTop: "60px" }} />
        <div className="footer__content">
          <div className="footer__content__left">
            <div className="footer__content__left__row">
              <div className="footer__content__left__row__col">
                <div className="footer__title">
                  VỀ BEAUTY SHOP
                  <div
                    className="openIcon"
                    onClick={() => {
                      subAboutRef.current.classList.toggle("active");
                      setOpenAboutSub(!openAboutSub);
                    }}
                  >
                    {openAboutSub ? <UpIcon color="#79747e" /> : <DownIcon />}
                  </div>
                </div>
                <ul className="footer__link" ref={subAboutRef}>
                  {footerAboutLinks.map((item, index) => (
                    <li className="footer__link__item" key={index}>
                      <Link to={item.path}> {item.display} </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer__content__left__row__col">
                <div
                  className="footer__title"
                  onClick={() => {
                    subPolicyRef.current.classList.toggle("active");
                    setOpenPolicySub(!openPolicySub);
                  }}
                >
                  CHÍNH SÁCH
                  <div className="openIcon">
                    {openPolicySub ? <UpIcon color="#79747e" /> : <DownIcon />}
                  </div>
                </div>
                <ul className="footer__link" ref={subPolicyRef}>
                  {footerCustomerLinks.map((item, index) => (
                    <li className="footer__link__item" key={index}>
                      <Link to={item.path}> {item.display} </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="footer__content__left__row">
              <ul>
                <div className="footer__item first">
                  <b>Thời gian làm việc:</b> Thứ 2 ~ Thứ 6 09:00 ~ 17:00 (trừ
                  Thứ 7, Chủ Nhật và ngày lễ)
                </div>
                <div className="footer__item">
                  <b>Tư vấn và chăm sóc khách hàng:</b> 012345678
                </div>
                <div className="footer__item">
                  <b>Email:</b> <Link to="/#">beautyshop_cskh@gmail.com</Link>
                </div>
                <Input.Group compact>
                  <Input
                    className="input"
                    placeholder="Đăng ký Email để nhận thông tin ưu đãi!"
                  />
                  <Button type="primary" className="footer__content__left__btn">
                    Đăng ký
                  </Button>
                </Input.Group>
              </ul>
            </div>
          </div>
          <div className="footer__content__right">
            <div className="footer__title" id="followTitle">
              THEO DÕI BEAUTY SHOP TRÊN
            </div>
            <div className="footer__content__right__icon">
              <div className="footer__content__right__icon__item">
                <FacebookIcon size={48} />
              </div>
              <div className="footer__content__right__icon__item instagram">
                <InstagramIcon size={28} />
              </div>
              <div className="footer__content__right__icon__item">
                <GitHubIcon size={44} />
              </div>
            </div>
            <p>
              <b>CÔNG TY TNHH THEBEAUTY VIỆT NAM </b>
            </p>
            <p id="address">
              123, Đường số 6, Khu phố Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh,
              Việt Nam.
            </p>
            <div id="logoSale">
              <img src={logoSale} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">&#169; 2023 All Rights Reserved</div>
    </div>
  );
};

export default Footer;
