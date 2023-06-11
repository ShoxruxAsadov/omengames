import logo from "./OmenGames.png";
import { ImSearch } from "react-icons/im";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import "./header.scss";
import { Link } from "react-router-dom";

export default function Header() {
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
          <Link to="/admin">
            <img src={logo} width={"138px"} />
          </Link>
        </div>
        <div className="navbar">
          <ul className="list">
            <li>
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">Телеграм</a>
            </li>
            <li>
              <a href="#">Отзывы</a>
            </li>
            <li>
              <a href="#">Поддержка</a>
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
