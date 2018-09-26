import React from 'react';
import { Link } from 'react-router-dom'

const ContactPage = ({history}) => {
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
            <h2>Contact</h2>
            <p>Philippine Nurses Association of Silicon Valley <br/> 150 Palm Valley Blvd Suite 2193
            <br/> San Jose, CA 95123
            </p>
            <br/>
            <p>President Grace Ibe: <br/> (408) 250-6351</p>
            <p>President-Elect Orchid Quiton-Chefalo: <br/> (626) 327-9423</p>
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

export default ContactPage;
