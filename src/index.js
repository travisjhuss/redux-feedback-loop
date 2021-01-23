import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const currentFeedback = (state = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ''
}, action) => {
    return state;
}

const feedbackList = (state = [], action) => {
    return state;
}

const reduxStore = createStore(
    combineReducers({
      currentFeedback
    }),
    applyMiddleware(logger)
  );

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
