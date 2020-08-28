import React, {useState} from "react";
import axios from 'axios';
import loginImg from './weed.svg'
import "./style.scss";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: {
        username:'',
        password:''
      }
    }
  }
    
  
     
        // make a post request to retrieve a token from the api
        // when you have handled the token, navigate to the BubblePage route
      
        

  render() {
    const handleChange = (e) => {
      this.setState({
        signUp: {
          ...this.state.signUp,
        [e.target.name]: e.target.value
        }
      })
      console.log(this.state.signUp)
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
      .post('https://med-cab3-backend-api.herokuapp.com/api/auth/register', this.state.signUp)
      .then(res => {
        console.log(res);
        window.localStorage.setItem('token', res.data.token)
        // props.history.push('/WebApp')
      })
    }
    
    return (
      <div className="base-container">
        <form></form>
        <div className="header">Register</div>
          <div className="content">
            <div className="image">
            <img src={loginImg} />
  
  
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  label="username"
                  value={this.state.signUp.username}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  name="password"
                  label="password"
                  value={this.state.signUp.password}
                  onChange={handleChange}
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <button type="button" className="btn" onClick={handleSubmit}>Register</button>
          </div>
          <form/>
      </div>
    )}
  }
