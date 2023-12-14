import NavBar from "./NavBar";
import NavCategory from "./NavCategory";

import { useEffect } from "react";

const Header = () => {
  useEffect(() => {}, []);
  return (
    <div className="header">
      <NavBar />
      <NavCategory />
    </div>
  );
};

export default Header;
