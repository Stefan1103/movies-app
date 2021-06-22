import MovieSources from '../api/MovieSources';
import { useState, useEffect } from 'react';

export const useAxiBySearch = (text) => {
	const [ isEmpty, setIsEmpty ] = useState(false);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ isError, setIsError ] = useState({ error: false, status: null, statusText: '' });
	const [ state, setState ] = useState({
		results: [],
	});

	const onSearch = async () => {
		try {
			setIsLoading(true);
			const results = await MovieSources.get('/', { params: { s: text, apiKey: '35850bb5' } });

			//is there movies from the search
			let data = [];
			if (results.data) {
				data = results.data.Search || [];
				if (data <= 0 && results.data.Response !== 'False') {
					setIsEmpty(true);
				} else {
					setIsEmpty(false);
				}
			}

			setState((prevState) => {
				return { ...prevState, results: results };
			});
			setIsLoading(false);
		} catch (error) {
			console.log('THERE IS AN ERROR :', error);
			setIsError({ error: true, status: '', statusText: 'ERROR...' });
		}
	};
	useEffect(
		() => {
			onSearch();
		},
		[ text ],
	);
	return { isLoading, isError, isEmpty, state };
};
