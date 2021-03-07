import React from 'react';
import './Header.css';

function Header() {
	return (
		<header className='header'>
			<img
				src='https://www.tech4goodawards.com/wp-content/uploads/2018/03/Do-IT-Logo-600px.png'
				className='header__logo'
				alt='logo'
			/>
			<div className='header__counters'>
				<div className='header__counter'>
					In-progress Tasks: <span>0</span>
				</div>
				<span></span>
				<div className='header__counter'>
					Finished Tasks: <span>0</span>
				</div>
			</div>
		</header>
	);
}

export default Header;
