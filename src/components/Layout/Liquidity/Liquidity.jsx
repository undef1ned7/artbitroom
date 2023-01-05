import React, { useContext } from 'react'
import "./Liquidity.scss";
import { ModalContext } from "../../../contexts";
const Liquidity = () => {
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
    <div className='wrapper1'>
        <div className="liquidity__logo">
            <h2>Пул ликвидности</h2>
        </div>
        <main className='Mainer'>
        <section className='invest'>
            <div className="invest__content">
                <h2 className="invest__content-interest">15%</h2>
                <p className="invest__content-number">от 15% до 25%</p>
                <p className="invest__content-mouth">в месяц</p>
                <h3 className="invest__content-liquidity">Пул ликвидности <br/> от 100 USDT Бессрочный</h3>
                {/* <h3 className="invest__content-liquidity1"></h3> */}
                <p className="invest__content-text">Возврат инвестиций<br/> в любое время</p>
                <button className="invest__content-btn" onClick={openModal}>Инвестировать</button>
            </div>
        </section>
        <table className='table'>
            <thead>
            <tr className='table__head'>
                <th className='table__head-title padding'>№</th>
                <th className='table__head-title'>СУММА,%</th>
                <th className='table__head-title'>СРОК</th>
                <th className='table__head-title'>Базовый % прибыли</th>
            </tr>
            </thead>
            <tbody className='table__body'>
                <tr className='table__body'>
                <td className='table__body-text padding'>1</td>
                <td className='table__body-text'>100-2500</td>
                <td className='table__body-text'>активный сразу</td>
                <td className='table__body-link'>15%</td>
                </tr>
                <tr className='table__body'>
                <td className='table__body-text padding'>2</td>
                <td className='table__body-text'>до 5000</td>
                <td className='table__body-text'>активный 01.09.2022</td>
                <td className='table__body-link'>16%</td>
                </tr>
                <tr className='table__body'>
                <td className='table__body-text padding'>3</td>
                <td className='table__body-text'>до 7500</td>
                <td className='table__body-text'>активный 01.10.2022</td>
                <td className='table__body-link'>17%</td>
                </tr>
                <tr className='table__body'>
                <td className='table__body-text padding'>4</td>
                <td className='table__body-text'>до 10000</td>
                <td className='table__body-text'>активный 01.11.2023</td>
                <td className='table__body-link'>18%</td>
                </tr>
                <tr className='table__body'>
                <td className='table__body-text padding'>5</td>
                <td className='table__body-text'>до 15000</td>
                <td className='table__body-text'>активный 01.12.2022</td>
                <td className='table__body-link'>19%</td>
                </tr>
                <tr className='table__body'>
                <td className='table__body-text padding'>6</td>
                <td className='table__body-text'>до 20000</td>
                <td className='table__body-text'>активный 01.01.2023</td>
                <td className='table__body-link'>20%</td>
                </tr>
                <tr className='table__body'>
                <td className='table__body-text padding'>7</td>
                <td className='table__body-text'>до 25000</td>
                <td className='table__body-text'>активный 01.02.2023</td>
                <td className='table__body-link'>21%</td>
                </tr>
                <tr className='table__body'>
                <td className='table__body-text padding'>8</td>
                <td className='table__body-text'>до 30000</td>
                <td className='table__body-text'>активный 01.03.2023</td>
                <td  className='table__body-link'>23%</td>
                </tr>
                <tr className='table__body'>
                <td className='table__body-text padding'>9</td>
                <td className='table__body-text'>до 35000</td>
                <td className='table__body-text'>активный 01.04.2023</td>
                <td className='table__body-link'>24%</td>
                </tr>
                <tr className='table__body'>
                <td className='table__body-text padding'>10 </td>
                <td className='table__body-text'>до 40000</td>
                <td className='table__body-text'>активный 01.05.2023</td>
                <td className='table__body-link'>25%</td>
                </tr>
                <tr className='table__body'>
                <td className='table__body-text padding'>11 </td>
                <td className='table__body-text'>до 50000</td>
                <td className='table__body-text'>активный 01.06.2023</td>
                <td className='table__body-link'>26%</td>
                </tr>
            </tbody>
        </table>
        <section className='conditions'> 
                        <div className="wrapper"> 
                            <div className="conditions__body"> 
                                <h1 className='conditions__title'>Условия</h1> 
                                <ul className="conditions__box"> 
                                    <p className='conditions__text'> 
                                        Депозит возвращается в любое время, срок вывода 21 рабочий день 
                                    </p> 
                                    <p className='conditions__text'>Процент: 15 - 25% в месяц</p> 
                                    <p className='conditions__text'> 
                                        Дополнительно +1% к базовому вознаграждению за удержание депозита и процентов (каждую неделю) 
                                    </p> 
                                    <p className='conditions__text'> 
                                        Откат процентов обратно, если частично или полностью снимали проценты или депозит 
                                    </p> 
                                    <p className='conditions__text'> 
                                        Комиссия на вывод 5% 
                                    </p> 
                                    <p className='conditions__text'> 
                                        Внутренний перевод средств моментальный и без комиссий 
                                    </p> 
                                    <p className='conditions__text'> 
                                        Вывод процентов до 3-х рабочих дней 
                                    </p> 
 
                                </ul> 
                            </div> 
                        </div> 
        </section>
        </main>
    </div>
  )
}

export default Liquidity;
