import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import PostPage from './components/PostPage';
import Images from './components/external';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={PostPage}/>
      </div>
    );
  }
}

export default App;
