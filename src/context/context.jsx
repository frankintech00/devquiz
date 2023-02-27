// Importing necessary dependencies
import axios from 'axios';
import React, { useContext, useState } from 'react';

// A table containing categories of quizzes and their corresponding IDs
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

// The endpoint of the API used to retrieve quiz questions
const API_ENDPOINT = 'https://opentdb.com/api.php?';

// Creating a context for the application
const AppContext = React.createContext();

// Defining a provider component for the app context
const AppProvider = ({ children }) => {
	// Setting up state variables for the provider
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

	// A function to fetch quiz questions from the API
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

	// A function to move to the next quiz question
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

	// A function to check if the answer submitted by the user is correct
	const checkAnswer = (value) => {
		if (value) {
			setCorrect((oldState) => oldState + 1);
		}
		nextQuestion();
	};

	// A function to open the results of the quiz
	const openResults = () => {
		setIsResultsOpen(true);
	};

	// A function to close the results of the quiz
	const closeResults = () => {
		setIsResultsOpen(false);
		setWaiting(true);
		setCorrect(0);
	};

	// A function to update the state of the quiz when the user changes the settings
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setQuiz({ ...quiz, [name]: value });
	};

	// A function to handle the submission of the quiz settings
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

// A custom hook to use the app context in other components
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };

// This code defines an app context provider that manages the state of a quiz application. The provider defines a number of state variables and functions for the app, including a function to fetch quiz questions from an external API, a function to move to the next question, a function to check whether the answer provided by the user is correct, and functions to open and close the results of the quiz. The code also defines a custom hook for using the app context in other components.
