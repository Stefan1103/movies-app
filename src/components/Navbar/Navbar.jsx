import React from 'react';
// import {Link} from 'react-router-dom';
import { useState } from 'react';
import LocalMoviesOutlinedIcon from '@material-ui/icons/LocalMoviesOutlined';

const Navbar = ({ setOnSearch }) => {
	const [ searchTitle, setSearchTitle ] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		setOnSearch(searchTitle);
	};
	const handleInput = (e) => {
		const text = e.target.value;
		setSearchTitle(text);
	};

	return (
		<div className="customNavbar">
			<div className="customNav">
				<div className="left">
					<a href="/" className="logo">
						<span>
							<LocalMoviesOutlinedIcon style={{ color: 'lightgreen', fontSize: '1.7rem' }} />
						</span>TV.m.dB
					</a>
				</div>
				<div className="middle">
					<form onSubmit={submitHandler}>
						<input type="text" onChange={handleInput} value={searchTitle} placeholder="Search the title of the movie" />
						<button className="butn btn-search" type="submit">
							Search
						</button>
					</form>
				</div>
				<div className="right" />
			</div>
		</div>
	);
};

export default Navbar;
