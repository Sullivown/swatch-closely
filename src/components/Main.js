import React from 'react';

import CardGrid from './CardGrid';

export default function Main(props) {
	return (
		<main>
			<CardGrid cards={props.cards} />
		</main>
	);
}
