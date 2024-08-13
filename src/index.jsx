import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import App from './components/App/App';

let dummyAirline1 = { name: 'Spirit' }
let dummyAirline2 = { name: 'Delta' }

/** TODO: Add REDUCERS */
const airlineList = (state = [], action) => {
    if (action.type === 'ADD_AIRLINE') {
        let newAirlineList = [...state, action.payload]
        return newAirlineList;
    }
    return state;
}

/** TODO: Create store */
const store = createStore(
    combineReducers({
        airlineList,
    }),
    applyMiddleware(logger)
);


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);