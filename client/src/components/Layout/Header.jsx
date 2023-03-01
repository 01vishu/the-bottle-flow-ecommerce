import Logo from "./../../assets/images/Logo.png";

import "./../../style/components/Header.scss";
import { FiMenu, FiSearch, FiShoppingCart } from "react-icons/fi";
const Header = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="icon_cover">
          <FiMenu />
        </div>
        <img src={Logo} alt="The Bottle Flow" loading="lazy" />
        <div className="box">
          <div className="icon_cover">
            <FiSearch />
          </div>
          <div className="icon_cover">
            <FiShoppingCart />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
