import Helmet from "../components/Helmet";
import { Link } from "react-router-dom";
import { Input, DatePicker, Select, ConfigProvider, Breadcrumb } from "antd";
import { Divider } from "@mui/material";
import {
  HomeIcon,
  FacebookIcon,
  InstagramIcon,
  GoogleIcon,
} from "../components/Icons/index";
import locale from "antd/locale/vi_VN";
import "dayjs/locale/vi";

const Register = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const handleChange = (value) => {
    // console.log(`selected ${value}`);
  };

  function Required() {
    return <b style={{ color: "#ee1414" }}>*</b>;
  }

  return (
    <Helmet title="Đăng ký">
      {/* Breadcrumb */}
      <div className="breadcrumb" style={{ visibility: "hidden" }}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <HomeIcon />
            <a href="/">Trang chủ</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {/* End breadcrumb */}
      <div className="register">
        {/* Title */}
        <div className="title">
          <span>Đăng ký</span>
        </div>
        {/* <Note style={{ textAlign: "right", color: COLORS.mediumgrey }}>
          Vui lòng nhập đầy đủ các mục <Required />
        </Note> */}
        <hr className="line" />
        {/* End title */}
        {/* Register area */}
        <div className="main">
          {/* Name*/}
          <div className="register__row">
            <div className="register__row__label">
              Họ và tên <Required />
            </div>
            <div className="register__row__col">
              <div className="register__row two-cols">
                <div className="two-cols__item">
                  <Input 
                    placeholder="Họ" 
                    size="large" 
                    className="register__row__input"
                  />
                </div>
                <div className="two-cols__item">
                  <Input 
                    placeholder="Tên" 
                    size="large" 
                    className="register__row__input"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* End name*/}
          {/* Phone*/}
          <div className="register__row">
            <div className="register__row__label">
              Số điện thoại <Required />
            </div>
            <div className="register__row__col">
              <Input 
                placeholder="Vui lòng nhập số điện thoại" 
                size="large" 
                className="register__row__input"
              />
            </div>
          </div>
          {/* End phone*/}
          {/* Email*/}
          <div className="register__row">
            <div className="register__row__label">
              Địa chỉ Email <Required />
            </div>
            <div className="register__row__col">
              <Input 
                placeholder="Vui lòng nhập địa chỉ Email" 
                size="large" 
                className="register__row__input"
              />
            </div>
          </div>
          {/* End email*/}
          {/* Birthday */}
          <div className="register__row">
            <div className="register__row__label">
              Ngày sinh <Required />
            </div>
            <div className="register__row__col">
              <ConfigProvider locale={locale}>
                <DatePicker
                  placeholder="Vui lòng chọn ngày sinh"
                  onChange={onChange}
                  className="register__row__input"
                  size="large"
                />
              </ConfigProvider>
            </div>
          </div>
          {/* End birthday */}
          {/* Gender */}
          <div className="register__row">
            <div className="register__row__label">
              Giới tính <Required />
            </div>
            <div className="register__row__col">
              <Select
                placeholder="Vui lòng chọn giới tính"
                className="register__row__input"
                onChange={handleChange}
                options={[
                  { value: "female", label: "Nữ" },
                  { value: "male", label: "Dành cho Nam" },
                ]}
                size="large"
              />
            </div>
          </div>
          {/* End gender */}
          {/* Password */}
          <div className="register__row">
            <div className="register__row__label">
              Mật khẩu <Required />
            </div>
            <div className="register__row__col">
              <Input
                placeholder="Vui lòng nhập 6 - 12 ký tự gồm chữ cái/chữ số"
                size="large"
                type="password"
                className="register__row__input"
              />
              <div className="register__row__note">
                * Mật khẩu tối thiểu 6 - 12 ký tự gồm chữ cái hoa, chữ cái
                thường và chữ số
              </div>
            </div>
          </div>
          {/* End password */}
          {/* Confirm password */}
          <div className="register__row">
            <div className="register__row__label">
              Xác nhận mật khẩu <Required />
            </div>
            <div className="register__row__col">
              <Input
                placeholder="Vui lòng nhập lại mật khẩu"
                size="large"
                type="password"
                className="register__row__input"
              />
            </div>
          </div>
          {/* End confirm password */}
        </div>
        {/* <hr className="line" style={{ margin: "40px 0 20px" }} /> */}
        <div className="login__center">
          <div className="login__btn">Đăng ký</div>
        </div>
        {/* <div style={{ width: "80%", justifySelf: "center" }}>
          <Divider plain>
              <span style={{ color: "#79747e" }}>HOẶC</span>
          </Divider>
          <div className="login__icon">
            <div className="login__icon__item">
              <FacebookIcon size={63} />
            </div>
            <div className="login__icon__item instagram">
              <InstagramIcon size={38} />
            </div>
            <div className="login__icon__item">
              <GoogleIcon size={40} />
            </div>
          </div>
        </div> */}
        <div className="login__center">
          <div className="login__center__navigation">
            Bạn đã có tài khoản? Đăng nhập <Link to="/login">tại đây</Link>
          </div>
        </div>
        {/* End register area */}
      </div>
    </Helmet>
  );
};

export default Register;
