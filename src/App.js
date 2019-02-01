import React, { Component } from 'react';
import './App.css';
import TopBar from './TopBar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <TopBar/>
          <div className="home">
            <h1 id="title">Hello World</h1>
          </div>
      </div>
    );
  }
}

export default App;
