import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import logo from "./OGAdmin.png";

export default function Admin() {
  const navigate = useNavigate();

  // useEffect(()=>{
  //   navigate("/admin/goods")
  // },[])

  return (
    <div className="AdminPanel">
      <div className="sidebar">
        <div className="logo">
          <img onClick={()=>navigate("/admin")} src={logo} />
        </div>
        <ul className="list">
          <li className="sidebarli active">
            <div onClick={()=>navigate("/admin/goods")}>
              <i className="fa-solid fa-bag-shopping"></i>
              <span>Товары</span>
            </div>
          </li>
          <li className="sidebarli">
            <div onClick={()=>navigate("/admin/slider")}>
              <i className="fa-solid fa-square"></i>
              <span>Слайдер</span>
            </div>
          </li>
          <li className="sidebarli">
            <div onClick={()=>navigate("/admin/interesting")}>
              <i className="fa-solid fa-fire-flame-curved"></i>
              <span>Интересная подборка</span>
            </div>
          </li>
          <li className="sidebarli">
            <div onClick={()=>navigate("/admin/genres")}>
              <i className="fa-solid fa-diamond"></i>
              <span>Жанры</span>
            </div>
          </li>
          <li className="sidebarli">
            <div onClick={()=>navigate("/admin/activation")}>
              <i className="fa-solid fa-key"></i>
              <span>Активация</span>
            </div>
          </li>
          <li className="sidebarli">
            <div onClick={()=>navigate("/admin/settings")}>
              <i className="fa-solid fa-gear"></i>
              <span>Настройки</span>
            </div>
          </li>
          <li className="sidebarli">
            <div onClick={()=>navigate("/admin/modules")}>
              <i className="fa-solid fa-screwdriver-wrench"></i>
              <span>Модули</span>
            </div>
          </li>
          <li className="sidebarli">
            <div onClick={()=>navigate("/admin/updates")}>
              <i className="fa-solid fa-download"></i>
              <span>Обновления</span>
            </div>
          </li>
        </ul>
        <div className="created">
          <a target="_blank" href="https://www.shoxruxasadov.uz/">
            <div>
              <h1>Shokhdev</h1>
              <p>created by</p>
            </div>
          </a>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
