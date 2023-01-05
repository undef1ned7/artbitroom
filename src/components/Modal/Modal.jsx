import React, { useContext, useState } from "react";
import { ModalContext } from "../../contexts";
import "./Modal.scss";
const Modal = (props) => {
  const [tab, setTab] = useState(1)
  const { children, title } = props;
  const { openModal, closeModal } = useContext(ModalContext);
  const [closing, setClosing] = useState(false);
  const handleClose = () => {
    setClosing(true);
    const closeTimeout = setTimeout(() => {
      closeModal();
      clearTimeout(closeTimeout);
    }, 300);
  };
  const handleClickSecondButton = () => {
    openModal({
      title: "Opened by Second Button",
      children: <h1>SECOND MODAL</h1>,
    });
  };
  const Usetab = (index) => {
    setTab(index);
  };
  const backdropClasses = closing ? "backdrop backdrop-hide" : "backdrop";
  return (
    <div className={backdropClasses} onClick={handleClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
      <div className="modal__link">
                <span onClick={handleClose}>&times;</span>
              <a className={Usetab === 1 ? "modal__link-a modal-active" : "modal__link-a"} onClick={() => Usetab(1)} href="#login" >Войти </a>
              <a className={Usetab === 1 ? "modal__link-a modal-active" : "modal__link-a"} onClick={() => Usetab(2)} href="#signUp">Зарегистироваться</a>
            </div>
        <form className={Usetab === 1 ? "form  form-content" : "form"} id="signUp">
          <label className="form__content">
            <div className="form__email">
            <p className="form__content-text">Email</p>
            <input type="email" className="form__email-int"/>
            </div>
            <div className="form__surname">
              <div className="row">
                <div className="col-6">
                <p className="form__content-text">Ваше имя</p>
                  <input type="text" className="form__surname-int"/>
                </div>
                <div className="col-6">
                <p className="form__content-text">Фамилия</p>
                  <input type="text" className="form__surname-int"/>
                </div>
              </div>
            </div>
            <div className="form__password">
            <p className="form__content-text text">Username</p><br/>
            <input type="password" name="" id="" className="form__password-int"/>
            <br />
            </div>
            <div className="form__password">
            <p className="form__content-text text">Password</p><br/>
            <input type="password" name="" id="" className="form__password-int"/>
            <br />
            </div>
            <div className="form__card">
            <p className="form__content-text text">Адрес кошелька</p><br/>
            <input type="number" className="form__card-int"/>
            </div>
            <div className="form__checkbox"> 
            <input type="checkbox" className="form__checkbox-int"/> 
            <p className="form__checkbox-text">Я принимаю Условия предоставления услуг и Политику конфиденциальности</p></div>
           
            <button type="submit" className="form__content-btn">Зарегистрироваться</button>
            {children}
          </label>
        </form>
        <form className={Usetab === 2 ? "form  form-content" : "form"} id="login">
          <label htmlFor="" className="formModal__content">
            <div className="formModal__login">
              <p className="formModal__login-text">Имя пользователя / Электронная почта</p><br/>
              <input type="text" className="formModal__login-int" />
            </div>
            <div className="formModal__password">
              <p className="formModal__password-text">Пароль</p><br/>
              <input type="password" className="formModal__password-int" />
            </div>
            <button className="formModal__content-btn" type="submit">Войти</button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Modal;
