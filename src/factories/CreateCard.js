import { nanoid } from 'nanoid';
import generateRandomColour from '../helpers/generateRandomColour';

export default function CreateCard() {
	return {
		id: nanoid(),
		colour: generateRandomColour(),
		clicked: false,
	};
}
