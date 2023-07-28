import React from 'react';
import '../components/Registration.css'
import { Link } from 'react-router-dom';
const RegistrationForm = () => {
    return (
      <form className="form">
        <p className="title">Register</p>
        
        <div className="flex">
          <label>
            <input required placeholder="" type="text" className="input" />
            <span>Firstname</span>
          </label>
  
          <label>
            <input required placeholder="" type="text" className="input" />
            <span>Lastname</span>
          </label>
        </div>
  
        <label>
          <input required placeholder="" type="email" className="input" />
          <span>Email</span>
        </label>
  
        <label>
          <input required placeholder="" type="password" className="input" />
          <span>Password</span>
        </label>
        <label>
          <input required placeholder="" type="password" className="input" />
          <span>Confirm password</span>
        </label><br></br>
        <button className="submit">Submit</button>
        <p className="signin">
          Already have an account?  <Link to={"/LoginBox"}><button>Signin</button></Link>
        </p>
      </form>
    );
  };
  
  export default RegistrationForm;
  