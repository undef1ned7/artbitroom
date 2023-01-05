import React, { useContext } from "react";
import image from "../../../img/icon/home/Vector.svg";
import image1 from "../../../img/icon/home/Vector1.svg";
import image2 from "../../../img/icon/home/Vector2.svg";
import image3 from "../../../img/icon/home/Vector3.svg";
import { ModalContext } from "../../../contexts";
import "./cryptocurrencies.scss";
const Cryptocurrencies = () => {
  const { openModal, closeModal } = useContext(ModalContext);
  const handleClickFirstButton = () => {
    openModal({
      title: "Opened by First Button",
      children: "MODAL MODAL MODAL",
    });
  };
  const handleClickSecondButton = () => {
    openModal({
      title: "Opened by Second Button",
      children: <h1>SECOND MODAL</h1>,
    });
  };
  return (
    <section className="cryptocurrencies">
      <div className="wrapper">
        <div className="cryptocurrencies__content">
          <h2 className="cryptocurrencies__content-title">
            Прибыльный Арбитраж Криптовалют
          </h2>
          <p className="cryptocurrencies__content-text">
            Arbitroom — платформа, которая использует для работы
            автоматизированных
            <br /> ботов для получения максимальной прибыли с арбитражной
            торговли
          </p>
          <button onClick={openModal} className="cryptocurrencies__content-btn">
            Начать сейчас
          </button>
        </div>
        <div className="wrap">
          <div className="row">
            <div className="cryptocurrencies__col-3">
              <div className="cryptocurrencies__boximage">
                <img className="cryptocurrencies__image" src={image} />
              </div>
              <p className="cryptocurrencies__text">
                Межбиржевой и внутрибиржевой арбитраж
              </p>
            </div>
            <div className="cryptocurrencies__col-3">
              <div className="cryptocurrencies__boximage">
                <img className="cryptocurrencies__image" src={image1} />
              </div>
              <p className="cryptocurrencies__text">
                Гарантированная прибыль в том числе и на падающем рынке
              </p>
            </div>
            <div className="cryptocurrencies__col-3">
              <div className="cryptocurrencies__boximage">
                <img className="cryptocurrencies__image" src={image2} />
              </div>
              <p className="cryptocurrencies__text">
                Возврат инвестиции по окончанию контракта
              </p>
            </div>
            <div className="cryptocurrencies__col-3">
              <div className="cryptocurrencies__boximage">
                <img className="cryptocurrencies__image" src={image3} />
              </div>
              <p className="cryptocurrencies__text">
                Круглосуточная поддержка в чате
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cryptocurrencies;
