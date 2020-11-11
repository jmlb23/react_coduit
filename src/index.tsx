import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Footer } from './Screens/Common/Footer/Footer';
import { Header } from './Screens/Common/Header/Header';
import { Home } from './Screens/Home/Home';
import { Login } from './Screens/Login/Login';
import { Signup } from './Screens/Signup/Signup';
import { AppStore } from './State/Store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={AppStore}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
