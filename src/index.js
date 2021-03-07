import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import G from './GridTry'
import { createStore } from 'redux';
import allReducers from './Redux/reducers'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

const baseTheme = createMuiTheme();

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ThemeProvider>
    </Provider>,
  document.getElementById('root')
);

