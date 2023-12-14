import Helmet from "../components/Helmet";
import { Breadcrumb, Input } from "antd";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  LocationIcon,
  MobileIcon,
  EmailIcon,
} from "../components/Icons/index";

const Contact = () => {
  const { TextArea } = Input;

  return (
    <Helmet title="Liên hệ">
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <HomeIcon />
            <Link to="/">Trang chủ</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Liên hệ</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="contact">
        <div className="title">
          <span>Liên hệ</span>
        </div>
        <hr className="line responsive" />
        <div className="container">
          <div className="contact__info">
            <div className="contact__info__static">
              <div className="contact__info__static__row">
                <LocationIcon />
                <div className="contact__info__static__row__label">
                  123, Đường số 6, Khu phố Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí
                  Minh, Việt Nam.
                </div>
              </div>
              <div className="contact__info__static__row">
                <MobileIcon />
                <div className="contact__info__static__row__label">
                  012345678
                </div>
              </div>
              <div className="contact__info__static__row">
                <EmailIcon />
                <div className="contact__info__static__row__label">
                  <Link to="/contact#" style={{ cursor: "pointer" }}>
                    beautyshop_cskh@gmail.com
                  </Link>
                </div>
              </div>
              <hr className="line" />
            </div>
            <div className="contact__info__input">
              <div className="contact__info__input__title">
                Liên hệ với chúng tôi
              </div>
              <div className="contact__info__input__row">
                <Input placeholder="Họ và tên" size="large" className="contact__info__input__row__input"/>
              </div>
              <div className="contact__info__input__row">
                <Input placeholder="Số điện thoại" size="large" className="contact__info__input__row__input"/>
              </div>
              <div className="contact__info__input__row">
                <Input placeholder="Địa chỉ Email" size="large" className="contact__info__input__row__input"/>
              </div>
              <div className="contact__info__input__row">
                <TextArea rows={4} placeholder="Nội dung" size="large" className="contact__info__input__row__input"/>
              </div>
              <div className="contact__info__input__button">
                Gửi liên hệ của bạn
              </div>
            </div>
          </div>
          <div className="contact__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31345.849911702244!2d106.803054!3d10.870009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2sUniversity%20of%20Information%20Technology%20-%20VNUHCM!5e0!3m2!1sen!2sus!4v1675914199748!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Contact;
