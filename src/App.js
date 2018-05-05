import React, { Component } from 'react';
import TopNav from './components/top-nav';
import InfoSection from './components/info-section';

class App extends Component {
  render() {
    return (
        <div className="App">
          <TopNav />
        
          <main>
            <InfoSection />
          </main>
        </div>
    );
  }
}

export default App;
