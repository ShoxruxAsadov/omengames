import React from "react";
import { Link } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
import { HiLogout } from "react-icons/hi";
import { AiFillFileAdd } from "react-icons/ai";

export default function Interesting() {
  return (
    <div className="main">
      <div className="navbar">
        <div className="home">
          <Link to="/admin/goods">
            <BsFillHouseFill />
          </Link>
          <AiFillFileAdd className="addFileIcon" />
        </div>
        <Link to="/">
          <span>Выход</span>
          <HiLogout />
        </Link>
      </div>
      <div className="content goods">
        <h1>Интересная подборка</h1>
      </div>
    </div>
  );
}
