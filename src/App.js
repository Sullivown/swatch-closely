import React from 'react';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

import CreateCard from './factories/CreateCard';
import shuffleArray from './helpers/shuffleArray';

import Header from './components/Header';
import Main from './components/Main';

Modal.setAppElement('#root');

function App() {
	const [cards, setCards] = useState(generateCards());
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const { width, height } = useWindowSize();

	// Check for win state
	useEffect(() => {
		if (cards.every((card) => card.clicked)) {
			setGameOver(true);
		}
	}, [cards]);

	// Game end state check
	useEffect(() => {
		gameOver && toggleModal();
	}, [gameOver]);

	function toggleModal() {
		setModalIsOpen((prevState) => !prevState);
	}

	function generateCards() {
		let cardsArr = [];

		for (let i = 0; i < 10; i++) {
			cardsArr.push(CreateCard());
		}
		return cardsArr;
	}

	function handleCardClick(id) {
		// Check if card has been previously clicked
		const card = cards.find((card) => card.id === id);
		if (card.clicked === true) {
			setGameOver(true);
		} else {
			setCards((prevCards) => {
				const tempCards = prevCards.map((card) =>
					card.id === id
						? {
								...card,
								clicked: true,
						  }
						: card
				);
				return shuffleArray(tempCards);
			});
			setScore((prevScore) => prevScore + 1);
		}
	}

	function resetGame() {
		setScore(0);
		setCards(generateCards());
		setGameOver(false);
	}

	return (
		<>
			<Header score={score} />
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={toggleModal}
				className='modal'
				overlayClassName='overlay'
				contentLabel='Game Over'
				onAfterClose={resetGame}
			>
				<>
					{score === 10 && <Confetti width={width} height={height} />}
					<h2>Game Over!</h2>
					<p>Your score is {score} / 10</p>
					<button onClick={toggleModal}>Close</button>
				</>
			</Modal>
			<Main cards={cards} handleCardClick={handleCardClick} />
		</>
	);
}

export default App;
