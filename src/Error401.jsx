/*Custom 401 page - Just for funzies its cute*/
import React from 'react';
import errorImage from './images/401.jpg'; // Assuming 404.png is in the same directory
import './css/Error404.css';

const NotAuthorized = () => {
    return (
      <div className="error-404-not-found">
        <div className="error-404-not-found-content">  {/* Wrap content in a new div */}
          <h1>Uh oh! Your not allowed to see this page. <br></br> If your account has access, please contact your site coordinator.</h1>
          <div><img className = "error-404-error-image"src={errorImage} alt="401 Page Not Found" /></div>
          <p>
            401 Error: Unauthorized access, permission denied.
          </p>
        </div>
      </div>
    );
  };
  

export default NotAuthorized;