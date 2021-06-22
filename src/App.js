import './app.scss';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Main from './components/Main/Main';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Moviedetails from './components/Moviedetails/Moviedetails';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAxiBySearch } from './hooks/useAxios';

function App() {
	const [ onSearch, setOnSearch ] = useState(null);

	const { isEmpty, isError, isLoading, state } = useAxiBySearch(onSearch);

	if (isEmpty) {
		return (
			<div className="app">
				<Navbar setOnSearch={setOnSearch} />
				<div className="loading">
					<h2>Movie not found!</h2>
				</div>
				<Footer />
			</div>
		);
	}

	if (isError.error) {
		return (
			<div className="app">
				<div className="loading">
					<h2>{isError.statusText}</h2>
				</div>
			</div>
		);
	}
	if (isLoading) {
		return (
			<div className="app">
				<div className="loading">
					<h2>Loading...</h2>
					<div className="loader" />
				</div>
			</div>
		);
	}
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route exact path="/">
						<Navbar setOnSearch={setOnSearch} />
						<div className="sections">
							<div className="container">
								<Slider results={state.results} />
								<Main results={state.results} />
							</div>
						</div>
						<Footer />
					</Route>
					<Route
						exact
						path="/movie/:id"
						children={
							<div className="app">
								<div className="sections">
									<Moviedetails />
								</div>
								<Footer />
							</div>
						}
					/>
					<Route path="/*">
						<Error />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
