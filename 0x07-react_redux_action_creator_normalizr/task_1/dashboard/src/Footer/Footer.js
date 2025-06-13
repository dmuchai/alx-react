import React, { useContext } from 'react';
import AppContext from '../App/AppContext';

function Footer() {
  const { user } = useContext(AppContext);

  return (
    <div className="footer">
      <p>Copyright - Holberton School</p>
      {user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </div>
  );
}

export default Footer;
