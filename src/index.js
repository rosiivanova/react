import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Search from "./containers/Search";
import Results from "./containers/Results";

import { Provider } from 'react-redux';
import store from './store';
ReactDOM.render(
  <Provider store={store}>
    <Search />
  </Provider>
  , document.getElementById('search'));
ReactDOM.render(
  <Provider store={store}>
    <Results />
  </Provider>
  , document.getElementById('results'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
