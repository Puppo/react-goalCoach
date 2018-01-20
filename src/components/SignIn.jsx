import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SingIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  singIn() {
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
      this.setState({error})
    });
  }

  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign In</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({email: event.target.value})}
            placeholder="email"
          />
          <input
            className="form-control"
            type="password"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({password: event.target.value})}
            placeholder="password"
          />
          <button
            className="btn btn-primary"
            onClick={() => this.singIn()}
          >
          Sign In
          </button>
          <div>{this.state.error.message}</div>
          <div><Link to={'/signup'}>Sign up instead</Link></div>
        </div>
      </div>
    );
  }
}

export default SingIn;