import React, {useState} from "react";
import axios from 'axios';
import loginImg from './weed.svg'
import "./style.scss";
import { Link } from "react-router-dom";




export class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: {
        username: '',
        password: ''
      }
    }
  }
  


  
  render() {
  
   
      // make a post request to retrieve a token from the api
      // when you have handled the token, navigate to the BubblePage route
    
      const handleChange = (e) => {
        this.setState({
          login: {
            ...this.state.login,
          [e.target.name]: e.target.value
          }
        })
        console.log(this.state.login)
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('https://med-cab3-backend-api.herokuapp.com/api/auth/login', this.state.login)
        .then(res => {
          console.log(res);
          window.localStorage.setItem('token', res.data.token)
          // props.history.push('/WebApp')
        })
      }
    
    
     
  
    
    return (
      <div className="base-container">
        <form></form>
        <div className="header">Login</div>
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
                  value={this.state.login.username}
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
                  value={this.state.login.password}
                  onChange={handleChange}
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <Link to="/WebApp">
            <button type="button" className="btn" onClick={handleSubmit}>Login</button>
            </Link>
            
          </div>
          <form/>
      </div>
    )};
  
};
