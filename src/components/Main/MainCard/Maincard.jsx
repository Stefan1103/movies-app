import { Link } from 'react-router-dom';
import { defaultImg } from '../../../data';

const Maincard = ({ data }) => {
	const { Title, Poster, imdbID, Year, Type } = data;
	return (
		<div
			className="customCard"
			style={{ backgroundImage: `${Poster && Poster !== 'N/A' ? `url(${Poster})` : `url(${defaultImg})`}` }}
		>
			<div className="card-content">
				<h2 className="card-title">{Title}</h2>
				<div className="cardBody">
					<h4 className="card-info">Year: {Year}</h4>
					<h4 className="card-info">Type: {Type}</h4>
					<Link to={`/movie/${imdbID}`} className="button-card">
						Learn more
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Maincard;
