import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <Link to="/login" className="mr-4 text-lg hover:text-gray-300 transition duration-300">
        Login
      </Link>
      <Link to="/register" className="mr-4 text-lg hover:text-gray-300 transition duration-300">
        Register
      </Link>
      <Link to="/profile" className="text-lg hover:text-gray-300 transition duration-300">
        Profile
      </Link>
    </nav>
  );
};

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
