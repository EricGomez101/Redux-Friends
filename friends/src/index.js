import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {friendsReducer} from './Reducers/FriendsReducer';

export const store = createStore(friendsReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'));