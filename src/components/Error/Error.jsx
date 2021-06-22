import { Link } from 'react-router-dom';
const Error = () => {
	return (
		<div className="error">
			<h2>Error... this page does not exist go back to our homepage :</h2>
			<Link to="/" className="butn btn-back">
				Back
			</Link>
		</div>
	);
};

export default Error;
