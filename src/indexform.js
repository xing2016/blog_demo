import React, { Component } from 'react';
class IndexForm extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
          <div>
                <input type="text" name="name" placeHolder='输入用户名' />                 
                <input type="password" name="password" placeHolder = '输入密码'/>    
          </div>
        );
      }
}

export default IndexForm