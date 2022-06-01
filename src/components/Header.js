import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';

export default function Header() {
	return (
		<header>
			<div className='flex-row'>
				<img src={Logo} alt='Logo'></img>
				<h1>Swatch Closely</h1>
			</div>
			<div className='flex-row'>Controls</div>
		</header>
	);
}
