import './App.css';
import React , { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {Projects} from './Projects';
import {NoMatch} from './NoMatch';

class App extends Component {
  render() {
      return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route  path = "/About Me" component = {About}/>
          <Route  path = "/contact" component = {Contact}/>
          <Route  path = "/Projects" component = {Projects}/>
          <Route component = {NoMatch}/>

          
        </Switch>
      </Router>
    </React.Fragment>
  );
}
}

export default App;
