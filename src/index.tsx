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
import { NotFound } from './Screens/NotFound/NotFound';
import { UserProfile } from './Screens/Profile/Profile';
import { Signup } from './Screens/Signup/Signup';
import { AppStore } from './State/Store';

ReactDOM.render(
  <Provider store={AppStore}>
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/profiles/:id/favorites">
            <UserProfile showFavs={true} />
          </Route>
          <Route exact path="/profiles/:id">
            <UserProfile showFavs={false} />
          </Route>
          <Route exact path="/signin">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  , document.getElementById("root")
);

reportWebVitals();
