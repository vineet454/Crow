import React from 'react'
import MeetupList from '../Component/Meetup/MeetupList';

const Dummy_Data = [
	{
		id: 'M1',
		image:
		'https://media-exp1.licdn.com/dms/image/C5103AQE8yNqaSRSWYw/profile-displayphoto-shrink_200_200/0/1564393205452?e=1632355200&v=beta&t=bBS3yp6plHRbXNFftr1khtXEvT88MMbQBUGbg3e2G-8',
		Description: 'My Name is vineet'
	},
	{
		id: 'M2',
		image:
		'https://www.gannett-cdn.com/-mm-/675ba115506e09d3d7e32d07055fdcb503ebe995/c=0-2-1272-718/local/-/media/2020/05/28/USATODAY/usatsports/Reviewed.com-RvEW-24856-lead.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp',
		Description:'My name is ronny'
	}
];
 function Allmeetup(){
return(
<section>
<h1>All Meeting</h1>
<MeetupList meetup={Dummy_Data}/>

</section>

);

 }
 export default Allmeetup;