import React from "react";
import gblogo from "../../../img/icon/home/bgBombers.svg";
import "./howit.scss";
import { Link } from "react-router-dom";
const Howit = () => {
  return (
    <section className="howit">
      <div className="wrapper">
        <div className="howit__body">
			<div className="howit__logo">
				<h2 className="howit__logo-title">Как это работает</h2>
			</div>
          <div className="row">
            <div className="col-4">
              <div className="howit__content">
                <div className="number">
                  <p className="howit__content-number">01</p>
                </div>
                <p className="howit__content-text">
                  Пройти простую регистрацию
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="howit__content">
                <div className="number">
                  <p className="howit__content-number">02</p>
                </div>
                <p className="howit__content-text">
                  Пополнить баланс в личном кабинете
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="howit__content">
                <div className="number">
                  <p className="howit__content-number">03</p>
                </div>
                <p className="howit__content-text">
                  Инвестировать в пул согласно лимитам
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="howit__content">
                <div className="number">
                  <p className="howit__content-number">04</p>
                </div>
                <p className="howit__content-text">
                  Получать проценты и при необходимости выводить
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="howit__content">
                <div className="number">
                  <p className="howit__content-number">05</p>
                </div>
                <p className="howit__content-text">
                  Средства из пула ликвидности доступны к выводу в любое время
                </p>
              </div>
            </div>
            <div className="col-4">
              <Link className="howit__content-btn" to={"/liquidity"} >
                Инвестировать в пул
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howit;
