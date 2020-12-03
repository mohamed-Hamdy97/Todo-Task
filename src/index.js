import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Reducer from "./Reducers/indexReducer";
import App from './pages/App';

const store = createStore(Reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
