import Logo from '../assets/logo.png';

export default function Header(props) {
	return (
		<header>
			<div className='flex-row'>
				<img src={Logo} alt='Logo'></img>
				<h1>Swatch Closely</h1>
			</div>
			<div className='flex-row'>
				<div>Score: {props.score} / 10</div>
			</div>
		</header>
	);
}
