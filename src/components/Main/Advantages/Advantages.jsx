import React, { useContext } from 'react'
import "./advantages.scss"
import icon from "../../../img/icon/home/Vector4.svg"
import icon1 from "../../../img/icon/home/Vector5.svg"
import icon2 from "../../../img/icon/home/Vector6.svg"
import { ModalContext } from "../../../contexts";
const Advantages = () => {
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
		<section className='advanteges'>
			<div className="wrapper">
				<div className="advanteges__logo">
					<h2 className="advanteges__logo-title">Основные<br /> преимущества</h2>
				</div>
				<div className="row">
					<div className="col-4">
						<div className="advanteges__content">
							<p className="advanteges__content-text">Моментальное открытие и закрытие сделок при помощи
								ArbitroomBot</p>
							<div className="advanteges__content-block">
								<img className='value' src={icon} alt="" />
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="advanteges__content">
							<p className="advanteges__content-text">Отсутствие рисков связанных с просадкой вашего портфеля или всего крипторынка в целом</p>
							<div className="advanteges__content-block">
								<img className='value' src={icon1} alt="" />
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="advanteges__content">
							<p className="advanteges__content-text">Диверсификация инвестиций в разные торговые инструменты</p>
							<div className="advanteges__content-block">
								<img className='value' src={icon2} alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="advanteges__wrap">
					<p className="advanteges__wrap-text">Используйте свой шанс прямо сейчас</p>
					<button className="advanteges__wrap-btn" onClick={openModal}>Начать сейчас</button>
				</div>
			</div>
		</section>
	)
}

export default Advantages;
