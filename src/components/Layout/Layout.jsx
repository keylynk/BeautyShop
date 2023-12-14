import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="main">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
