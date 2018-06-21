import React, { Component } from 'react';
import Media from "react-media";
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import About from './About.js'
import Space from './Space.js'
import Contact from './Contact.js'
import Footer from './Footer.js'


class App extends Component {
  render() {
    return (
      <div className="Project-0">
        <Header/>
        <About/>
        <Space/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
