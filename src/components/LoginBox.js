import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
const LoginBox = () => {
  return (
    <div className="login-box">
      <form>
        <div className="user-box">
          <input type="text" name="" required />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required />
          <label>Password</label>
        </div>
        <center>
          <a href="#">
            <Link to={'/NavigationBar'}>Login</Link>
            
            <span></span>
          </a><br></br><br></br>
          <h4 id="lower" className="abc">Dont have an account? <br></br>     <Link to={'/RegistrationForm'}>Signup</Link></h4>
        </center>
      </form>
    </div>
  );
};

export default LoginBox;
