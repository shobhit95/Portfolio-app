import React, { Component } from "react";
import './App.css';
import Navbar from './Components/Navabr';
import ReactGA from 'react-ga';
import Introduction from "./Components/Introduction";
import Aboutme from "./Components/Aboutme";
import Contact from "./Components/Contact"

class App extends Component {
  render() {
    
  ReactGA.initialize('UA-000000-01');
  console.log(window.location.pathname + window.location.search);
  ReactGA.pageview(window.location.pathname + window.location.search);
  
    return (
      <div >
        <Navbar />
        <Aboutme></Aboutme>
        <Contact></Contact>
      </div>
    );
  }
}



export default App;
