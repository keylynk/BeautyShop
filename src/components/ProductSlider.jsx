import Card from "./Home/Card";
import { LeftIcon, RightIcon } from "./Icons/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="next" onClick={onClick}>
      <RightIcon size={32} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prev" onClick={onClick}>
      <LeftIcon size={32} />
    </div>
  );
}

const ProductSlider = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="product-slider">
      <Slider {...settings}>
        {props.data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
