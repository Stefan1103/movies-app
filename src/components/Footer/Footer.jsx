import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {
	return (
		<footer className="customFooter">
			<div className="left">
				<h6>Socials:</h6>
				<ul>
					<li>
						<a href="https://www.facebook.com/stefan.stevanovski">
							<FacebookIcon />
						</a>
					</li>
					<li>
						<a href="#">
							<InstagramIcon />
						</a>
					</li>
					<li>
						<a href="#">
							<TwitterIcon />
						</a>
					</li>
					<li>
						<a href="#">
							<YouTubeIcon />
						</a>
					</li>
				</ul>
			</div>
			<div className="middle">
				<h4>
					<span>
						<CopyrightIcon />
					</span>{' '}
					All rights reserved by TV.m.DB
				</h4>
			</div>
			<div className="right">
				<h6>Source:</h6>
				<ul>
					<li>
						<a href="https://github.com/Stefan1103/movies-app">
							<GitHubIcon />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
