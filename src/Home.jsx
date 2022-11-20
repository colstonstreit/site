import './App.css';
import React from 'react';
import logo from './logo.svg';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Colston Streit's website! This is currently under construction.
          </p>
        </header>
      </div>

    );
  }

}

export default Home;