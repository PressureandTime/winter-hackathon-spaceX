import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import BalanceReducer from './store/BalanceReducer';
import LoanReducer from './store/LoanReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore(
	combineReducers({
        BalanceReducer,
        LoanReducer

	}),
	applyMiddleware(thunk),
);



ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
