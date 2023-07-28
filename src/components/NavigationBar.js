import React from 'react';
import '../components/Navigation.css';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    
    <nav id="navigationBar">
        
      <div className="logo">
        <h1>Stopbus.com</h1>
      </div>
      <ul>
        <li>
          {/* <a href="#" className="link">Home</a> */}
          <Link to="/searchform"><button>Home</button></Link>
        </li>
        <li>
        
          <Link to="/About"><button>About</button></Link>
        </li>
        <li>
          {/* <a href="#" className="link">Contact</a> */}
          <Link to="/ContactForm"><button> Contact</button></Link>
        </li>
        <li>
          <Link to="/LoginBox" className="link">Logout</Link>
          </li>
          <li>
          <Link to="/AccountSettings" className="link">Profile</Link>
        </li>
        
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>
          <i className="fa fa-search">&#x1F50E;&#xFE0E;</i>
        </button>
      </div>
    </nav>
  );
}

export default NavigationBar;
