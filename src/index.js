import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { Provider } from 'react-redux';
import App from './App';
import './styles/app.scss';

const store = createStore(reducers, applyMiddleware(thunk));

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <App name="hentry" />
    </Provider>,
    root,
  );
}
