import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import 'tachyons';
import { Lockone } from './components/pages/Lockone';
import { Locktwo } from './components/pages/Locktwo';
import { Lockthree } from './components/pages/Lockthree';
import { Lockfour } from './components/pages/Lockfour';
import  Teacher  from './components/Teacher/Teacher';
// This goes where the login component goes
import awsconfig from './aws';
import Amplify from 'aws-amplify';

Amplify.configure(awsconfig);

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Lockone} />
          <Route path="/locktwo" component={Locktwo} />
          <Route path="/lockthree" component={Lockthree} />
          <Route path="/lockfour" component={Lockfour} />
          <Route path="/teacher" component={Teacher} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
