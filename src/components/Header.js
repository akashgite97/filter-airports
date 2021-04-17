import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';

const Header = () => {
  return (
    <div className='header-container'>
      <h1>
        Filter <span className='header-text'>airports</span>
      </h1>
      <DashboardIcon />
    </div>
  );
};

export default Header;
