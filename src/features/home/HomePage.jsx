import React from 'react';
import { Link } from 'react-router-dom'
import './homepage.css';
const HomePage = ({history}) => {
  return (
    <div>
    <div id="wrapper">
       <div id="header">
          <h1><a href="/" title="PNASVC homepage"><img src="/assets/logo.png" width="205" height="220" alt="logo for the Philippine 
             Nurses Association of Silicon Valley"/></a></h1>
          <div id="nav">
             <ul>
                <li className="two">
                   <Link to={`/contact`}>
                   Contact</Link>
                </li>
                <li className="two">
                   <Link to={`/join-us`}>
                   Join Us</Link>
                </li>
             </ul>
             <ul>
                <li>
                   <Link to={`/`}>
                   Home</Link>
                </li>
                <li>
                   <Link to={`/about`}>
                   About</Link>
                </li>
                <li>
                   <Link to={`/events`}>
                   Events</Link>
                </li>
             </ul>
          </div>
       </div>
       <div id="content">
          <h2>Philippine Nurses Association</h2>
          <h3>Silicon Valley Chapter</h3>
          <h3>PNASVC</h3>
          <p><img src="/assets/president.jpg" width="355" height="438" alt="the president of the Philippine Nurses Association of Silicon Valley"/></p>
          <p>Founding President Grace Ibe MSN, BSN, RN</p>
          <p><img src="/assets/Welcome-Letter.jpg" width="500" height="647" alt="welcome letter for the Philippine Nurses Association of Silicon Valley"/></p>
          <p>Welcome Letter</p>
          <p><img src="/assets/invitation.jpg" width="400" height="400" alt="Invitation for the Induction of the PNA founding officers"/></p>
          <p>Invitation for the Induction of Founding Officers</p>
       </div>
       <div id="footer">
          <p>Philippine Nurses Association of Silicon Valley</p>
          <p>150 Palm Valley Blvd Suite 2193</p>
          <p>San Jose, CA 95123</p>
       </div>
    </div>
 </div>
  );
};

export default HomePage;
