import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
const HamburgerNavigation = () => (
  <ul>
    <Link to="/Login"><li>Inlogg för arbetare</li></Link>
  </ul>
)

export default HamburgerNavigation;