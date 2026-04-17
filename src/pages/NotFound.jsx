import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">


        <h1 className="notfound-code">404</h1>
        
        <div className="notfound-image-container">
          
        <img src="/assets/logo.png" alt="Lost" className="notfound-img" />
        </div>

                         <h2 className="notfound-title">Oops! Page Not Found</h2>
        <p className="notfound-text">


          It seems you've wandered off the shelf. The page you are looking for 
          doesn't exist or has been moved.
        </p>



 <Link to="/" className="notfound-btn">


          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;