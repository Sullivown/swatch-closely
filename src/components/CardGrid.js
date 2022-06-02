import React from 'react';
import Card from './Card';

export default function CardGrid(props) {
	const cardElements = props.cards.map((card) => (
		<Card
			key={card.id}
			data={card}
			handleCardClick={props.handleCardClick}
		/>
	));
	return <div className='card-grid'>{cardElements};</div>;
}
