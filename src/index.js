import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import axios from 'axios';
import cookie from 'js-cookie';
import { auth } from './redux/api'

// Redux 
import { Provider } from 'react-redux'
import store from './redux/store'

const token = cookie.get("token");
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
    ,
    document.getElementById('root')
  )
}


if (token) {
  console.log(11111111111111);
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };
  auth.defaults.headers.common["Authorization"] = `Bearer ${token}`
  auth.get('/user')
    .then(response => {
      console.log(response)
      store.dispatch({ type: "SIGN_IN", payload: { user: response.data, token } })
    })
    .catch(error => (console.log(error)))
  render()

} else {
  console.log(222222222222222);
  render()
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
