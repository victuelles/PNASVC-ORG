import React from 'react';
import { Link } from 'react-router-dom'
const JoinUsPage = ({history}) => {
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
       <h2>Join Us</h2>
            <h3>Click below to become a part of the Philippine Nurses Association of Silicon Valley 
            Chapter:</h3>
            <p><a href="http://www.mypnaa.org/Join-Us" title="Click to join the PNASVC" 
            rel="external" target="_blank">http://www.mypnaa.org/Join-Us</a></p>
            <br/> <p> Please select Silicon Valley when filling it out</p>
            <p><img src="/assets/pna3.png" width="273" height="270" alt="photo of 3 members of the 
            PNASVC"/><img src="/assets/pna1.png" width="270" height="270" alt="collage of photos of members of the PNASVC"/>
            <img src="/assets/pna2.png" width="489" height="270" alt="photo of 5 members of the PNASVC"/></p>
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

export default JoinUsPage;
