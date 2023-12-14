import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Product from "../pages/Product";
import ProductList from "../pages/ProductList";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import About from "../pages/About";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/product-list/:categorySlug", component: ProductList },
  { path: "/product-list/:categorySlug/:slug", component: Product },
  { path: "/cart", component: Cart },
  { path: "/checkout", component: Checkout },
  { path: "/contact", component: Contact },
  { path: "/about", component: About },
];

export { publicRoutes };
