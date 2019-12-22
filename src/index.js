import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

// applyMiddleware(reduxPromise) returns a function 
// we pass createStore into it - which also returns a function
// we pass rootReducer into that function 
const theStore = applyMiddleware(reduxPromise, reduxThunk)(createStore)(rootReducer);

ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

