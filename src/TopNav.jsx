import React from 'react';
import { Link } from "react-router-dom";
import { GitHubIcon, LinkedInIcon } from './Icons';

export default function TopNav() {
  return <nav id="topNav">
    <div id="topNavListContainer">
      <ul id="topNavList">
        <li><Link to="/">Welcome Page</Link></li>
        <li><Link to="yes">Hello</Link></li>
      </ul>
    </div>
  </nav>
}