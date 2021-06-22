import Carousel from 'react-bootstrap/Carousel';
import { featuredMovies, defaultImg } from '../../data';
import { Link } from 'react-router-dom';

const Slider = ({ results }) => {
	let data = [];
	if (results.data) {
		data = results.data.Search || [];
	}
	return (
		<div className="customSlider">
			<Carousel fade>
				{(data.length > 0 ? data : featuredMovies).map((film) => {
					const { Poster, Title, imdbID, Year, Type } = film;
					return (
						<Carousel.Item key={imdbID}>
							<img className="d-block img-fluid" src={Poster} alt={defaultImg} />
							<Carousel.Caption>
								<h3>{Title}</h3>
								<h4>Year relased : {Year}</h4>
								<h4>Type : {Type}</h4>
								<Link to={`/movie/${imdbID}`} className="button-card">
									Learn more
								</Link>
							</Carousel.Caption>
						</Carousel.Item>
					);
				})}
			</Carousel>
			<h1>Welcome !</h1>
			<h1>This is the largest Television-movie database on the Internet !</h1>
			<h2>You can search information about your favourite movie or series here!</h2>
		</div>
	);
};

export default Slider;
