import React, { Component } from 'react';
import './style.scss';

class Header extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="menu-bar">
        {children}
      </div>
    );
  }
}

export default Header;