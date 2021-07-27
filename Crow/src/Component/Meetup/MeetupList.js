import React from 'react'
import classes from '../Meetup/Mainnavigation.module.css';
import MeetupItems from './MeetupItems';
function MeetupList(props) {
	return (
		<li className={classes.list}>
			{props.meetup.map(meetup => (<MeetupItems 
			key={meetup.id} 
			id={meetup.id}
			image ={meetup.image}
			Description = {meetup.Description} 
			/>))}
		</li>
	);
}
export default MeetupList;