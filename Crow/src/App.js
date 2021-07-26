import React from 'react'
import { Route, Switch } from 'react-router-dom';
import AllMeetup from './Pages/AllMeetup';
import Fav from './Pages/Fav';
import NewMeetup from "./Pages/NewMeetup";

function App() {
	return (
		<div>
			<Switch>
				<Route path='/' exact>
					<AllMeetup />
				</Route>
				<Route path='/fav'>
					<Fav />
				</Route>
				<Route path='/newmeet'>
					<NewMeetup />
				</Route>
			</Switch>
		</div>
	);

}
export default App;