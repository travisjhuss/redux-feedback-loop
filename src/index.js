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
    switch (action.type) {
        case 'SET_FEELING':
            state.feeling = action.payload;
            return state;
        case 'SET_UNDERSTANDING':
            state.understanding = action.payload;
            return state;
        case 'SET_SUPPORT':
            state.support = action.payload;
            return state;
        case 'SET_COMMENTS':
            state.comments = action.payload;
            return state;
        case 'CLEAR':
            state = {};
            return state;
        default:
            return state;
    }
}

const feedbackList = (state = [], action) => {
    switch (action.type) {
        case 'SET_FEEDBACK_LIST':
            return action.payload;
        default:
            return state;
    }
}

const reduxStore = createStore(
    combineReducers({
        currentFeedback,
        feedbackList
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
