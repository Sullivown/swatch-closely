import React from 'react';

export default function Card(props) {
	const styles = {
		backgroundColor: props.data.colour,
	};
	return (
		<div
			className='card'
			style={styles}
			onClick={() => props.handleCardClick(props.data.id)}
		></div>
	);
}
