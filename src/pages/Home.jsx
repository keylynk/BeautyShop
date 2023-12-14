import Helmet from "../components/Helmet";
import HomeSlider from "../components/Home/HomeSlider";
import Account from "../components/Home/Account";
import Policy from "../components/Home/Policy";
import ProductListResponsive from "../components/ProductListMobile";
import ProductSlider from "../components/ProductSlider";
import Section, { SectionBody, SectionTitle } from "../components/Section";

import productData from "../assets/data/product";
import sliderData from "../assets/data/slider";

const Home = () => {
  const suggest = productData.getProducts(8);
  const hotdeal = productData.getProducts(8);
  const newproduct = productData.getProducts(8);

  return (
    <Helmet title="Trang chủ">
      {/* Slider */}
      <HomeSlider data={sliderData} />
      {/* End slider */}
      {/* Account section */}
      <Section>
        <SectionBody>
          <Account />
        </SectionBody>
      </Section>
      {/* End account section */}
      {/* Suggest product section */}
      <Section>
        <SectionTitle>Gợi ý cho bạn</SectionTitle>
        <SectionBody>
          <ProductSlider data={suggest}></ProductSlider>
          <ProductListResponsive data={suggest}></ProductListResponsive>{" "}
        </SectionBody>
      </Section>
      {/* End suggest product section */}
      {/* Hot deal section */}
      <Section>
        <SectionTitle>Deal sốc tháng này</SectionTitle>
        <SectionBody>
          <ProductSlider data={hotdeal}></ProductSlider>
          <ProductListResponsive data={hotdeal}></ProductListResponsive>
        </SectionBody>
      </Section>
      {/* End hot deal section */}
      {/* New product section */}
      <Section>
        <SectionTitle>Sản phẩm mới</SectionTitle>
        <SectionBody>
          <ProductSlider data={newproduct}></ProductSlider>
          <ProductListResponsive data={newproduct}></ProductListResponsive>{" "}
        </SectionBody>
      </Section>
      {/* End new product section */}
      {/* Policy section */}
      <Section>
        <SectionBody>
          <Policy />
        </SectionBody>
      </Section>
      {/* End policy section */}
    </Helmet>
  );
};

export default Home;
