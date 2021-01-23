import React, { useEffect } from 'react';
//import components
import StartingPage from '../StartingPage/StartingPage';
import OneFeeling from '../OneFeeling/OneFeeling';
import TwoUnderstanding from '../TwoUnderstanding/TwoUnderstanding';
import ThreeSupport from '../ThreeSupport/ThreeSupport';
import FourComments from '../FourComments/FourComments';
import FiveReview from '../FiveReview/FiveReview';
import Finish from '../Finish/Finish';
import Admin from '../Admin/Admin';

import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
        </header>
        <Route path="/" exact component={StartingPage} />
        <Route path="/one" component={OneFeeling} />
        <Route path="/two" component={TwoUnderstanding} />
        <Route path="/three" component={ThreeSupport} />
        <Route path="/four" component={FourComments} />
        <Route path="/review" component={FiveReview} />
        <Route path="/finish" component={Finish} />
        <Route path="/admin">
          <Admin/>
        </Route>
      

      </div>
    </Router>
  );
}

export default App;
