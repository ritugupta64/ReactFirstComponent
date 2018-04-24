import React from 'react';
import {render} from 'react-dom';
import './index.css';

class App extends React.Component{
	render(){
		return(
			<div className="container">
			 <div className="row">
			   <h1>This is the first component without exporting any component</h1>
			   </div>
			</div>
		)
	}
}

render(<App />, document.getElementById('root'));

