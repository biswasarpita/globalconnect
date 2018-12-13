import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class navbar extends Component {

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <ul className="nav nav-pills">
        <li className="nav-item">
        {// eslint-disable-next-line
        <a href="/" onClick={this.onLogoutClick.bind(this)} className="nav-link text-white"> Logout </a>  }
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/register">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav id="navbar-example2" className="navbar navbar-light bg-dark">
        <Link className="navbar-brand text-white" to="/">
          GlobalConnect
        </Link>
        { isAuthenticated ? authLinks : guestLinks}
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white" data-toggle="dropdown" to="/" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#one">one</a>
            <a className="dropdown-item" href="#two">two</a>
            <div role="separator" className="dropdown-divider"></div>
            <a className="dropdown-item" href="#three">three</a>
          </div>
    </li> */}
      </nav>
    );
  }
}

navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(navbar);
