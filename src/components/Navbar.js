import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavbarStyles.css";
import logo from "../images/logoipsum-223.svg";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
        <img src={logo} alt="logo" width="50" height="50" />Tripguru
        </h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu" }>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/SignIn">
              <button>Sign In</button>
            </Link>
          </li>
          <li>
            <Link to="/SignUp">
              <button>Sign Up</button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
