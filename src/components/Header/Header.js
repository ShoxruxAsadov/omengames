import logo from "./OmenGames.png";
import { ImSearch } from "react-icons/im";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import "./header.scss";

function Header() {

  function leftCategory() {
    console.log("Left");
  }
  function rightCategory() {
    console.log("Right");
  }

  return (
    <header id="header">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={logo} width={"138px"} />
          </a>
        </div>
        <div className="navbar">
          <ul className="list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div className="search">
          <div className="search-wrapper">
            <div className="serach-icon">
              <ImSearch />
            </div>
            <input type="text" placeholder="Product search..." />
            <button>
              <MdOutlineShoppingCart />
              <span>Purchases</span>
            </button>
          </div>
          <HiMenuAlt3 className="menu" size={28} color="#FBBB43" />
        </div>
      </div>
    </header>
  );
}

export default Header;
