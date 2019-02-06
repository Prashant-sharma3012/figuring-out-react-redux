import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <div className="card mb-4 p-4 sms__header">
        <Link style={{ color: 'black' }} to="/">Student MS</Link>
      </div>
    );
  }
}

export default Header;