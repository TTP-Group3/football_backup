import React, { Component } from 'react';
import VenueInfo from './components/venue/VenueInfo';
import AboutUs from './components/aboutus/AboutUs';
import  Map from './components/map/map';
import About from './components/about/about';
import Linker from './components/linker/linker';


class App extends Component {
  render(){
    return<div className = "App">
    
    
    <VenueInfo/> 
    <Map/>
    <About/>
    <Linker/>
    <AboutUs/> 
    </div>
  };
}

export default App;