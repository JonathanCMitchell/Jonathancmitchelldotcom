import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Jonathan Mitchell.com</h2>
        </div>
        <p className="Home-intro">
          We are inside home<code>src/Home.js</code>
        </p>
      </div>
    );
  }
}

export default Home;




