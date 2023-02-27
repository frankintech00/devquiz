// Importing necessary dependencies and components
import React from 'react';
import { Loading, Results, SetupForm } from './components';
import { useGlobalContext } from './context/context';

// Defining the main App component
export const App = () => {
	// Using the app context hook to retrieve necessary state variables and functions
	const {
		waiting,
		loading,
		questions,
		index,
		correct,
		nextQuestion,
		checkAnswer,
	} = useGlobalContext();
	// Conditional rendering of components based on the state of the app
	if (waiting) {
		return <SetupForm />;
	}
	if (loading) {
		return <Loading />;
	}

	// Retrieving the current question and its answers from the questions array
	const { question, incorrect_answers, correct_answer } = questions[index];
	let answers = [...incorrect_answers];

	// This block of code randomly selects a position for the correct answer among the answer choices for the current quiz question.

	// Generate a random integer between 0 and 3, inclusive, representing the index of an answer choice in the answers array.
	const tempIndex = Math.floor(Math.random() * 4);

	// If the randomly generated index is 3, which occurs with a probability of 1/4, the correct answer is added to the end of the answers array using the push() method.
	// This is because there are four answer choices in total, so if the index is 3, all other indices (0, 1, and 2) must already be occupied by incorrect answer choices, leaving the correct answer as the only remaining option.
	if (tempIndex === 3) {
		answers.push(correct_answer);
	}
	// If the randomly generated index is not equal to 3, one of the other answer choices at that index in the answers array is replaced with the correct answer.
	// The code accomplishes this by first pushing the answer currently at the randomly generated index to the end of the answers array using push().
	// Then, the answer at the randomly generated index is replaced with the correct answer using array indexing. This ensures that the correct answer is randomly placed among the other answer choices, which may help prevent the user from simply memorizing the position of the correct answer.
	else {
		answers.push(answers[tempIndex]);
		answers[tempIndex] = correct_answer;
	}

	// Rendering the quiz component with the current question and answers
	return (
		<main className='flex flex-col items-center justify-center h-screen bg-slate-300'>
			<Results />
			<section className='flex flex-col justify-around w-screen max-w-screen-md p-3 m-4 align-middle bg-white shadow-xl rounded-2xl '>
				<p className='m-2 font-sans text-right text-green-500 uppercase'>
					Correct Answers : {correct}/{index}
				</p>
				<article className='mx-2 my-10 text-center'>
					<h2
						className='my-10 text-xl md:text-2xl'
						dangerouslySetInnerHTML={{ __html: question }}
					/>
					<div className='flex flex-col items-center justify-center'>
						{answers.map((answer, index) => {
							return (
								<button
									key={index}
									onClick={() => checkAnswer(correct_answer === answer)}
									className='w-4/5 m-6 my-2 btn btn-primary bg-slate-900 hover:bg-slate-600'
									dangerouslySetInnerHTML={{ __html: answer }}
								/>
							);
						})}
					</div>
				</article>
				<button
					onClick={nextQuestion}
					className='self-end align-self btn btn-secondary w-44 btn-sm'
				>
					Next Question
				</button>
			</section>
		</main>
	);
};
