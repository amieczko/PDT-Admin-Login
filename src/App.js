import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, withRouter,Redirect} from 'react-router-dom';

import Routing from './containers/Routing/Routing';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>  
    );
  }
}



export default App;
