=> To make the first compontent, follow below points

- import the react
- import the react dom
- make the class and return the single html element
- And render it, where you want to dump it.

=> dump the below code into index.js file

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

