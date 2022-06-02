export default function shuffleArray(array) {
	let shuffledArr = [...array];

	for (let i = shuffledArr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
		[shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
	}

	return shuffledArr;
}
