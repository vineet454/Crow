import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Mainnavigation.module.css';

function Mainnavigation() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Meeting Details</div>
			<nav>
				<ul>
					<li>
						<Link to='/'>All Meetings</Link>
					</li>
					<li>
						<Link to='/fav'>Faviortes</Link>
					</li>
					<li>
						<Link to='/newmeet'>New Meeting</Link>
					</li>
				</ul>
			</nav>
		</header>
	);

}
export default Mainnavigation;