import axios from 'axios';
import React, { useContext, useState } from 'react';

const table = {
	sports: 21,
	history: 23,
	politics: 24,
	generalKnowledge: 9,
	scienceNature: 17,
	geography: 22,
	art: 25,
	celebrities: 26,
	music: 12,
	movies: 11,
	books: 10,
	tv: 14,
	mythology: 20,
};

const API_ENDPOINT = 'https://opentdb.com/api.php?';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [waiting, setWaiting] = useState(true);
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [index, setIndex] = useState(0);
	const [correct, setCorrect] = useState(0);
	const [error, setError] = useState(false);
	const [quiz, setQuiz] = useState({
		amount: 10,
		category: 'generalKnowledge',
		difficulty: 'easy',
	});
	const [isResultsOpen, setIsResultsOpen] = useState(false);

	const fetchQuestions = async (url) => {
		setLoading(true);
		setWaiting(false);
		const response = await axios(url).catch((err) => console.log(err));
		if (response) {
			const data = response.data.results;
			if (data.length > 0) {
				setQuestions(data);
				setWaiting(false);
				setLoading(false);
				setError(false);
			} else {
				setWaiting(true);
				setError(true);
			}
			console.log(data);
		} else {
			setWaiting(true);
		}
	};

	const nextQuestion = () => {
		setIndex((oldIndex) => {
			const index = oldIndex + 1;
			if (index > questions.length - 1) {
				openResults();
				return 0;
			} else {
				return index;
			}
		});
	};

	const checkAnswer = (value) => {
		if (value) {
			setCorrect((oldState) => oldState + 1);
		}
		nextQuestion();
	};

	const openResults = () => {
		setIsResultsOpen(true);
	};

	const closeResults = () => {
		setIsResultsOpen(false);
		setWaiting(true);
		setCorrect(0);
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setQuiz({ ...quiz, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { amount, category, difficulty } = quiz;
		const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`;
		fetchQuestions(url);
	};

	return (
		<AppContext.Provider
			value={{
				waiting,
				loading,
				questions,
				index,
				correct,
				error,
				isResultsOpen,
				nextQuestion,
				checkAnswer,
				closeResults,
				quiz,
				handleChange,
				handleSubmit,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
