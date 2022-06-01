import React from 'react';
import Card from './Card';

export default function CardGrid(props) {
	const cardElements = props.cards.map((card) => <Card data={card} />);
	return <div className='card-grid'>{cardElements};</div>;
}
