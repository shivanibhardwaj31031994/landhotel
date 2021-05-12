import React from 'react';
import './App.css';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Main from "./Components/Main"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Main />

        <Footer />
        
      </div>
    );
  }
}

export default App;
