import React from "react";
import "./Login.css";
import { checkLogin } from "../../service/httpservice";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      user: "",
      pswd: "",
      type:""
    };

  }

  handleLogin(event) {
    if(checkLogin({...this.state})){
      window.location.href ='/Books';
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h5>Library Management System</h5>
            <div className="userName">
              <label htmlFor="userName">UserName</label>
              <input
                type="text"
                name="userName"
                onChange={(event) => this.setState({user:event.target.value})}
                noValidate
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={(event) => this.setState({pswd:event.target.value})}
                noValidate
              />
            </div>
            <div className="type">
              <label>
                Login As:
              </label>
              <select onChange={(event) => this.setState({type:event.target.value})}>
                  <option value="" >Select</option>
                  <option value="member">Member</option>
                  <option value="Librarian">Librarian</option>
                </select>
            </div>

            <div className="submit">
              <button onClick={this.handleLogin} >Create</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Login;
