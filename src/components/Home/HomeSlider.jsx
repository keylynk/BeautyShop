import styled from "styled-components";
import { LeftIcon, RightIcon } from "../Icons/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="next" onClick={onClick}>
      <RightIcon size={80} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prev" onClick={onClick}>
      <LeftIcon size={80} />
    </div>
  );
}
const Dot = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 1rem 0;
  position: absolute;
  bottom: 12px;
  list-style-type: none;

  li {
    margin: 0 0.5rem;
    border-radius: 50%;
    width: 12px;
    height: 12px;
  }

  li button {
    background: transparent !important;
    color: transparent !important;
    text-indent: -9999px;
  }

  li button::before {
    background-color: #5a4c9f;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
`;
const HomeSlider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <Dot style={{ margin: "0px" }}>{dots}</Dot>;
    },
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="home-slider">
      <Slider {...settings}>
        {props.data.map((item) => (
          <img key={item.id} src={item.img} alt="" />
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
