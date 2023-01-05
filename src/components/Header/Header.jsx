import React, { useContext } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import img from "../../img/icon/header/Logo.svg";
import { ModalContext } from "../../contexts";
const Header = () => {
  const { openModal, closeModal } = useContext(ModalContext);
  const handleClickFirstButton = () => {
    openModal({
      title: "Opened by First Button",
      children: "MODAL MODAL MODAL",
    });
  };
  const handleClickSecondButton = () => {
	openModal({
		title: 'Opened by Second Button',
		children: <h1>SECOND MODAL</h1>
	});
  } 
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__all">
          <img className="header__logo" width={197} src={img} />
          <nav className="header__nav">
            <ul className="header__menu">
              <li className="header__menu-link header__menu-link-red">
                <Link to={"/"}>Главная</Link>
              </li>
              <li className="header__menu-link">
                <Link to={"/liquidity"}>Пул ликвидности</Link>
              </li>
              <li className="header__menu-link">
                <Link to={"/FAQ"}>FAQ</Link>
              </li>
            </ul>
          </nav>
          <div className="header__buttom">
            <div className="header__buttom-btn">
              <button className="btn" onClick={openModal}>
                Вход  /
              </button>
              <button className="btn" onClick={openModal}>
                Регистрация
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
