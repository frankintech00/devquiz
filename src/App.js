import React from 'react';
import { Loading, Results, SetupForm } from './components';
import { useGlobalContext } from './context/context';

export const App = () => {
	const { waiting, loading, questions, index, correct } = useGlobalContext();
	if (waiting) {
		return <SetupForm />;
	}
	if (loading) {
		return <Loading />;
	}
	return <main>Hello Main</main>;
};
