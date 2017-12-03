import React, { Component } from 'react';
import IndexForm from './indexform'
import './style/user.css';
class LoginForm extends Component {
  constructor(props){
    super(props);
    this._onclick = this._onclick.bind(this)
  }
  _onclick(e){
    alert(1)
  }
  render() {
    return (
      <div className="loginDiv">
        <form>
            <h3>账号登录</h3>
            <IndexForm />
            <input type='button' value='登录' className='login'  onClick = {this._onclick}/>                     
        </form>
      </div>
    );
  }
}

export default LoginForm;
