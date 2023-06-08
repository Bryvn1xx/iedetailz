import React from 'react';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <h3>
          iedetailz
        </h3>
      </div>
      <div>
        <ul className="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
