import { useState } from 'react';
import generateRandomColour from './helpers/generateRandomColour';
import Header from './components/Header';
import Main from './components/Main';

function App() {
	const [cards, setCards] = useState(generateCards());

	function generateCards() {
		let cardsArr = [];

		for (let i = 0; i < 10; i++) {
			cardsArr.push({
				id: 1,
				colour: generateRandomColour(),
				clicked: false,
			});
		}

		return cardsArr;
	}

	return (
		<>
			<Header />
			<Main cards={cards} />
		</>
	);
}

export default App;
