// Import the React library and the useGlobalContext hook from a custom context
import React from 'react';
import { useGlobalContext } from '../context/context';

// Define a functional component called Results using an arrow function
export const Results = () => {
	// Destructure properties from the global context using the useGlobalContext hook
	const { isResultsOpen, closeResults, correct, questions } =
		useGlobalContext();

	// Render a div element that is either hidden or visible depending on the value of isResultsOpen
	return (
		<div
			className={`${
				isResultsOpen ? 'block' : 'hidden'
			} w-screen h-screen fixed top-0 left-0 z-50 flex flex-col justify-center	items-center`}
			style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
		>
			{/* Render a div element that contains the quiz results */}
			<div className='flex flex-col items-center justify-around bg-white shadow-2xl opacity-100 rounded-2xl'>
				<h2 className='m-5 text-2xl text-center'>Results</h2>
				{/* Render a paragraph element that displays the percentage of correct answers */}
				<p className='m-5 text-xl text-center'>
					You answered {((correct / questions.length) * 100).toFixed(0)}% of the
					questions correctly.
				</p>
				{/* Render a button element that calls the closeResults function when clicked */}
				<button className='m-10 my-3 btn btn-secondary' onClick={closeResults}>
					Play Again
				</button>
			</div>
		</div>
	);
};
