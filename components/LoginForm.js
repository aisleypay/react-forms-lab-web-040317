import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      password: ''
    };

    this.logIn = this.logIn.bind(this)
    this.updateUserName = this.updateUserName.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
  }

  updateUserName(event){
    this.setState({
      userName: event.target.value
    })
  }

  updatePassword(event){
    this.setState({
      password: event.target.value
    })
  }

  logIn(event) {
    event.preventDefault()
    if (this.state.userName === '' || this.state.password === '') {
      return
    } else {
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.logIn}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.updateUserName}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.updatePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form >
    );
  }
}
