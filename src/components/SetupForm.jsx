import React from 'react';
import { useGlobalContext } from '../context/context';

export const SetupForm = () => {
	const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
	return (
		<main className='flex flex-col items-center justify-center h-screen bg-slate-300'>
			<section className='flex flex-col justify-around w-screen max-w-screen-sm p-3 m-4 align-middle bg-white shadow-xl rounded-2xl '>
				<form className='flex flex-col justify-end'>
					<h2 className='text-xl text-center'>Quiz Setup</h2>
					<div className='w-full form-control'>
						<label className='label' htmlFor='number'>
							<span className='label-text'>Number of Questions?</span>
						</label>
						<input
							type='number'
							placeholder='Type here'
							className='w-full input input-bordered'
							name='amount'
							id='amount'
							value={quiz.amount}
							onChange={handleChange}
							min={1}
							max={50}
						/>
					</div>
					<div className='w-full form-control'>
						<label className='label' htmlFor='category'>
							<span className='label-text'>Category</span>
						</label>
						<select
							className='select select-bordered'
							name='category'
							id='category'
							value={quiz.category}
							onChange={handleChange}
						>
							<option value='generalKnowledge'>General Knowledge</option>
							<option value='sports'>Sport</option>
							<option value='history'>History</option>
							<option value='geography'>Geography</option>
							<option value='scienceNature'>Science & Nature</option>
							<option value='politics'>Politics</option>
							<option value='art'>Art</option>
							<option value='celebrities'>Celebrities</option>
							<option value='music'>Music</option>
							<option value='movies'>Movies</option>
							<option value='books'>Books</option>
							<option value='tv'>TV</option>
							<option value='mythology'>Mythology</option>
						</select>
					</div>
					<div className='w-full form-control'>
						<label className='label' htmlFor='category'>
							<span className='label-text'>Difficulty</span>
						</label>
						<select
							className='select select-bordered'
							name='difficulty'
							id='difficulty'
							value={quiz.difficulty}
							onChange={handleChange}
						>
							<option value='easy'>Easy</option>
							<option value='medium'>Medium</option>
							<option value='hard'>Hard</option>
						</select>
					</div>
					{error && <p className='my-3 text-red-500'>ERROR!</p>}
					<button
						className='self-center w-2/5 my-10 btn btn-secondary'
						onClick={handleSubmit}
					>
						{' '}
						Start Quiz
					</button>
				</form>
			</section>
		</main>
	);
};
