import MovieSources from '../../api/MovieSources';
import React from 'react';
import { useState, useEffect } from 'react';
import { defaultImg, featuredMovies } from '../../data';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import StarIcon from '@material-ui/icons/Star';
import MovieFilterSharpIcon from '@material-ui/icons/MovieFilterSharp';
import { Link, useParams } from 'react-router-dom';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import Footer from '../Footer/Footer';

const Moviedetails = () => {
	const { id } = useParams();

	const [ defaultState, setDefaultState ] = useState(false);
	const [ loading, setLoading ] = useState(true);
	const [ details, setDetails ] = useState({ details: [] });

	const filmDetails = async () => {
		try {
			setLoading(true);
			const results = await MovieSources.get('/', { params: { i: id, apiKey: '35850bb5' } });
			if (results.data.Response === 'False') {
				setDefaultState(true);
			}

			setDetails((prevDet) => {
				return { ...prevDet, details: results.data };
			});
			setLoading(false);
		} catch (error) {
			console.log('There was an error !', error);
		}
	};
	useEffect(() => {
		filmDetails();
	}, []);

	if (loading) {
		return (
			<div className="app">
				<div className="loading">
					<h2>Loading...</h2>
					<div className="loader" />
				</div>
			</div>
		);
	}
	if (defaultState) {
		const movie = featuredMovies.filter((featuredMovie) => {
			return id === featuredMovie.imdbID;
		});
		setDetails((prevState) => {
			return { ...prevState, details: movie[0] };
		});
		setDefaultState(false);
	} else if (details) {
		const { Poster, Actors, Director, Rated, Production, Genre, Country, BoxOffice, Awards, Language, Plot, Title, Ratings } = details.details;
		return (
			<section className="container">
				<article className="movieDetails">
					<div className="row">
						<div className="col-lg-4 col-md-12 d-flex justify-content-center mb-5">
							<div className="imgContainer">
								<img src={Poster} alt={defaultImg} className="img-fluid" />
							</div>
						</div>
						<div className="col-lg-8 col-md-12">
							<h1>{Title}</h1>
							<Tabs defaultActiveKey="information">
								<Tab tabClassName="customTab" eventKey="information" title="Information">
									<div className="tab-content">
										<ul>
											<li>
												<span>
													<LocalMoviesIcon style={{ color: 'gold' }} />
												</span>Production : <h4>{Production ? Production : 'N/A'}</h4>
											</li>
											<li>
												<span>
													<LocalMoviesIcon style={{ color: 'gold' }} />
												</span>Genre: <h4>{Genre ? Genre : 'N/A'}</h4>
											</li>
											<li>
												<span>
													<LocalMoviesIcon style={{ color: 'gold' }} />
												</span>Available in : <h4>{Language ? Language : 'N/A'}</h4>
											</li>
											<li>
												<span>
													<LocalMoviesIcon style={{ color: 'gold' }} />
												</span>Country :<h4>{Country ? Country : 'N/A'}</h4>
											</li>
											<li>
												<span>
													<LocalMoviesIcon style={{ color: 'gold' }} />
												</span>Rated :<h4>{Rated ? Rated : 'N/A'}</h4>
											</li>
											<li>
												<span>
													<LocalMoviesIcon style={{ color: 'gold' }} />
												</span>Awards :<h4>{Awards ? Awards : 'There are no awards!'}</h4>
											</li>
											<li>
												<span>
													<LocalMoviesIcon style={{ color: 'gold' }} />
												</span>Box Office :<h4>{BoxOffice ? BoxOffice : 'N/A'}</h4>
											</li>
										</ul>
									</div>
								</Tab>
								<Tab tabClassName="customTab" eventKey="cast" title="Cast">
									<div className="tab-content">
										<h2>
											<span>
												<MovieFilterSharpIcon style={{ color: 'gold', fontSize: '2rem' }} />
											</span>{' '}
											Director :{' '}
										</h2>
										<h3>{Director ? Director : 'N/A'}</h3>
										<h2>
											<span>
												<StarIcon style={{ color: 'gold', fontSize: '2rem' }} />
											</span>{' '}
											Star actors :
										</h2>
										<h3>{Actors ? Actors : 'N/A'}</h3>
									</div>
								</Tab>
								<Tab tabClassName="customTab" eventKey="plot" title="Plot">
									<div className="tab-content">
										<p className="plot">{Plot}</p>
									</div>
								</Tab>
								<Tab tabClassName="customTab" eventKey="ratings" title="Ratings">
									<div className="tab-content">
										<div className="ratings">
											<h2 className={`${Ratings.length <= 0 ? 'textCenter' : ''}`}>
												{Ratings.length <= 0 ? 'This movie has no ratings' : 'Ratings:'}
											</h2>
											{Ratings.map((rating, index) => {
												const { Source, Value } = rating;
												let numb;
												if (Value.includes('/')) {
													numb = Value.split('/')[0];
													if (numb <= 10) {
														numb = Math.round(numb / 10 * 100);
													}
												} else if (Value.includes('%')) {
													numb = Value.split('%')[0];
												}

												return (
													<div key={index}>
														<h4>{Source}:</h4>
														<div className="progress">
															<div
																className={`progress-bar progress-bar-striped progress-bar-animated progress-util`}
																role="progressbar"
																aria-valuenow={numb}
																aria-valuemin="0"
																aria-valuemax="100"
																style={{ width: `${numb}%` }}
															>{`${numb}%`}</div>
														</div>
													</div>
												);
											})}
										</div>
									</div>
								</Tab>
							</Tabs>
						</div>
					</div>
					<div className="button-container">
						<Link to="/" className="btn-back">
							Back
						</Link>
					</div>
				</article>
			</section>
		);
	}
};

export default Moviedetails;
