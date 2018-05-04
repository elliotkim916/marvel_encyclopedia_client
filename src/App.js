import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TopNav from './components/top-nav';
import InfoSection from './components/info-section';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopNav />
        </header>
        <InfoSection />
      </div>
    );
  }
}

export default App;
