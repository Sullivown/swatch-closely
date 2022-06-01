import React from 'react';

export default function Card(props) {
	console.log(props);
	const styles = {
		backgroundColor: props.data.colour,
	};
	return <div className='card' style={styles}></div>;
}
