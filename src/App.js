import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './login'
class App extends Component {
  constructor(props){
    super(props);
    
    
  }
  render() {
    return (
      <div>
        <a href='/User/Index/login.html'></a>
         <LoginForm />        
      </div>
    );
  }
}

export default App;
