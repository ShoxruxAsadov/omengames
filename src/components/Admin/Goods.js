import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillHouseFill } from "react-icons/bs";
import { HiLogout } from "react-icons/hi";
import { AiFillFileAdd } from "react-icons/ai";
import { TbAppsFilled } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { RiEditCircleFill } from "react-icons/ri";

export default function Goods() {
  const [goods, setGoods] = useState([]);
  useEffect(() => {
    axios
      .get("https://ogserver.onrender.com/goods")
      .then(({ data }) => setGoods(data));
  }, []);
  useEffect(() => {
    console.log(goods);
  }, [goods]);

  const navigate = useNavigate();

  function accessGoods() {}
  function editGoods() {}
  function openDelete() {}

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
        <h1>Товары</h1>
        <table>
          <thead>
            <tr>
              <th className="idth">Икона</th>
              <th>Название</th>
              <th>Платформа</th>
              <th>Тип товара</th>
              <th className="actionth">Действие</th>
            </tr>
          </thead>
          <tbody>
            {goods.map((item, index) => (
              <tr key={item.id}>
                <td className="id">
                  <img src={item.icon} />
                  <span>{index + 1}</span>
                </td>
                <td>{item.name}</td>
                <td>
                  <a target="_blank" href="${item.webapp}">
                    {item.platform}
                  </a>
                </td>
                <td>{item.type}</td>
                <td className="actionGoods">
                  <TbAppsFilled
                    onClick={() => accessGoods(index)}
                    className="fa-solid fa-grip"
                  />
                  <RiEditCircleFill
                    onClick={() => editGoods(index)}
                    className="fa-solid fa-pen-to-square"
                  />
                  <MdDelete
                    onClick={() => openDelete(index)}
                    className="fa-solid fa-trash"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
