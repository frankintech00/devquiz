import React from 'react';
import { useGlobalContext } from '../context/context';

export const Results = () => {
	const { isResultsOpen, closeResults, correct, questions } =
		useGlobalContext();
	return (
		<div
			className={`${
				isResultsOpen ? 'block' : 'hidden'
			} w-screen h-screen fixed top-0 left-0 z-50 flex flex-col justify-center	items-center`}
			style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
		>
			<div className='flex flex-col items-center justify-around bg-white shadow-2xl opacity-100 rounded-2xl'>
				<h2 className='m-5 text-2xl text-center'>Results</h2>
				<p className='m-5 text-xl text-center'>
					You answered {((correct / questions.length) * 100).toFixed(0)}% of the
					questions correctly.
				</p>
				<button className='m-10 my-3 btn btn-secondary' onClick={closeResults}>
					Play Again
				</button>
			</div>
		</div>
	);
};
