import React from 'react'
import classes from '../Meetup/Mainnavigation.module.css';

function MeetupItems(props) {
	return (
		<li className={classes.item}>
			<div className={classes.image}>
				<img src={props.image} alt={props.Description} />
			</div>
			<div className={classes.content}>
				<p>{props.Description}</p>
			</div>
			<div className={classes.actions}>
				<button>Add to Fav</button>
			</div>
		</li>
	);
}
export default MeetupItems;