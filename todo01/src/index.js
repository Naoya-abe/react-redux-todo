import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';
import {addTodo, toggleTodo, setVisibilityFilter} from './actions';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';

let store = createStore(reducers);

console.log(store.getState());
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
