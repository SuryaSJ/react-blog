import React from 'react';
import './App.css';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ContactUS from './containers/ContactUS/ContactUS';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Post from './containers/Post/Post';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Hero/>
        <Switch>
          <Route path="/contact-us" component={ContactUS}/>
          <Route path="/post/:postId" component={Post}/>
          <Route path="/" component={Home}/>          
        </Switch> 
      </div>
    </BrowserRouter>
    
  );
}

export default App;
