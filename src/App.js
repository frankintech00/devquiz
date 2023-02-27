import React from 'react';
import { Loading, Results, SetupForm } from './components';
import { useGlobalContext } from './context/context';

export const App = () => {
	const {
		waiting,
		loading,
		questions,
		index,
		correct,
		nextQuestion,
		checkAnswer,
	} = useGlobalContext();
	if (waiting) {
		return <SetupForm />;
	}
	if (loading) {
		return <Loading />;
	}
	const { question, incorrect_answers, correct_answer } = questions[index];
	let answers = [...incorrect_answers];
	const tempIndex = Math.floor(Math.random() * 4);
	if (tempIndex === 3) {
		answers.push(correct_answer);
	} else {
		answers.push(answers[tempIndex]);
		answers[tempIndex] = correct_answer;
	}

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
									className='w-4/5 m-6 my-2 btn btn-primary bg-zinc-800'
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
