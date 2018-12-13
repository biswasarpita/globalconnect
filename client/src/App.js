import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./components/layout/navigation";
import Footer from "./components/layout/footer";
import Homepage from "./components/layout/homepage";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser } from "./actions/authActions";
import { logoutUser } from './actions/authActions';


import "./App.css";
import store from "./store";

//Check for Token
if(localStorage.jwtToken) {
  //Set Auth Token
  setAuthToken(localStorage.jwtToken);
  //Get User info from Token
  const decoded = jwt_decode(localStorage.jwtToken);
  //Set current User
  store.dispatch(setCurrentUser(decoded));
  //Check for expired token
  const currentTime = Date.now()/1000;
  if(decoded.exp < currentTime) {
    //Logout User
    store.dispatch(logoutUser());
    //TODO: Clear current Profile
    //Redirect to Login Page
    window.location.href='/login';
  };
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Homepage} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
