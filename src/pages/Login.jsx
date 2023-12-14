import Helmet from "../components/Helmet";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { Breadcrumb } from "antd";
import { Divider, FormControl, Input, InputLabel } from "@mui/material";
import {
  HomeIcon,
  FacebookIcon,
  InstagramIcon,
  GoogleIcon,
} from "../components/Icons/index";

const Login = () => {
  return (
    <Helmet title="Đăng nhập">
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
      <div className="login">
        {/* Title */}
        <div className="title">
          <span>Đăng nhập</span>
        </div>
        <hr className="line" />
        {/* End title */}
        {/* Login area */}
        <div className="main">
          <div className="login__row">
            <FormControl fullWidth variant="standard">
              <InputLabel
                htmlFor="standard"
                sx={{ color: grey[600], fontSize: "1.6rem" }}
              >
                Số điện thoại/Địa chỉ Email
              </InputLabel>
              <Input inputProps={{ style: { fontSize: "1.6rem" } }} />
            </FormControl>
          </div>
          <div className="login__row">
            <FormControl fullWidth variant="standard">
              <InputLabel
                htmlFor="standard"
                sx={{ color: grey[600], fontSize: "1.6rem" }}
              >
                Mật khẩu
              </InputLabel>
              <Input
                type="password"
                inputProps={{ style: { fontSize: "1.6rem" } }}
              />
            </FormControl>
          </div>
          <div className="login__forgot">
            <Link to="/login">Quên mật khẩu?</Link>
          </div>
          <div className="login__center">
            <div className="login__btn">Đăng nhập</div>
          </div>
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
          <div className="login__center">
            <div className="login__center__navigation">
              Bạn chưa có tài khoản ? Đăng ký{" "}
              <Link to="/register">tại đây</Link>
            </div>
          </div>
        </div>
        {/* End login area */}
      </div>
    </Helmet>
  );
};

export default Login;
