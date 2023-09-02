import React, { Component } from 'react'; 
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class myApp extends React.Component{
  render() {
    return (
      <div className="App">
        <Header/>
        <Sidebar/>
        <Footer/>
      </div>);
  }
}
export default myApp;
