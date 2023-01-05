import React from 'react';
import './friendly.scss'
import png from '../../../img/image/friendly.png'

const Friendly = () => {
	return (
		<div className='Friendly'>
			<div className='wrapper'>
				<div className='Friendly__body'>
					<h1 className='Friendly__title'>Мы делаем сложное простым</h1>
					<p className='Friendly__text'>Платформа Arbitroom - это автоматизированная площадка как для внутрибиржевой, так и межбиржевой торговли</p>
					<div className='Friendly__box'>
						<div className='Friendly__img'></div>
					</div>
					<p className='Friendly__bottomText'>Используя наши инструменты появилась возможность зарабатывать на арбитраже криптовалют с минимальными рисками и экономией личного времени</p>
				</div>
			</div>
		</div>
	)
}

export default Friendly;
