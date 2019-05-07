import React from 'react';
import { Images } from '../../../images';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <img src={Images.AUTO1_LOGO} alt="Auto1 Logo" />
      <div className="header__menus">
        <a href="/">Purchase</a>
        <a href="/">My Orders</a>
        <a href="/">Sell</a>
      </div>
    </header>
  );
};

export default Header;
