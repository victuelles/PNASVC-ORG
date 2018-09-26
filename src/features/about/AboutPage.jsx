import React from 'react';
import { Link } from 'react-router-dom'

const HomePage = ({history}) => {
  return (
    <div>
     <div id="wrapper">
<div id="header">
<h1><a href="/" title="PNASVC homepage"><img src="/assets/logo.png" width="205" height="220" alt="logo for the Philippine 
Nurses Association of Silicon Valley"/></a>
</h1>
<div id="nav">
<ul>
  <li className="two"><Link to={`/contact`}>Contact</Link></li>
	<li className="two"><Link to={`/join-us`}>Join Us</Link></li>
</ul>
<ul>
	<li> <Link to={`/`}>Home</Link></li>
	<li><Link to={`/about`}>About</Link></li>
	<li><Link to={`/events`}>Events</Link></li>
</ul>
</div> 
</div> 
<div id="content">
<h2>About</h2>
<h3>About:</h3>
<p>The name of the organization is Philippine Nurses Association of Silicon Valley Chapter.
The official abbreviation is PNASVC.</p>
<p>PNASVC is a not-for-profit organization incorporated 
under the laws of the state of California.</p>
<h3>Mission Statement:</h3>
<p>To promote and advocate for the development of the Nursing profession through multi-cultural
education, community service, development and utilization of healthcare technology for the
benefit of the Filipino-American nurses in Silicon Valley.</p>
<h3>Goals:</h3>
<p>The goals of the association are:<br/>Promote activities that will unify Filipino-American
nurses in Silicon Valley area.<br/>Collaborate with other professional organizations and agencies
in Silicon Valley area. <br/>Develop and implement programs related to nursing practice, education,
and research. <br/>Actively participate in nursing and health care activities in the community.</p>
<h3>PNA Pledge:</h3>
<p>PNA Silicon Valley is composed of nurses like me, I help make it what it is. <br/> It will 
be friendly and respectful if I am.<br/> It's membership will be filled if i help fill them.<br/>
It will do great meaningful and purposeful work if I contribute with compassion.<br/> It will
make generous gifts to many causes if I am generous giver of my time. <br/> It will bring
others into advocacy if I reach out for others to support our mission. <br/> It will be a chapter
of loyalty and love of service, fearlessness and faith of compassion. <br/> Therefore, with
the help of God, I now dedicate myself to this chapter to do the task of being all things
that I want PNA Silicon Valley to be...</p>
<h3>PNA Hymn</h3>
<p>By Paul Francis Padillo</p>
<p>We care for you
That’s what we oath to do
With hard works and dedication
We deliver care with love and compassion
<br/>
We’re here for you
To heal and comfort you
 With competence and drive
We hold your hands with confidence and pride
<br/>
Chorus 1
<br/>
We are the PNA who cares
We pledge to help those who are in need
 Provides proficient health care service
In God our strength and faith rest-on.
<br/>
We are the PNA your friends
We give our hearts and minds and souls
Promoting safety and advocacy
Preserving life with care and dignity
<br/>
Bridge
We protect the client’s rights and privacy
We respect and uphold social duty.
<br/>
Repeat Chorus 1
<br/>
(Instrumental)
<br/>
Chorus 2
<br/>
We are PNA your friends 
We stand to make our country proud
We soar up high with integrity
We bind to love and care with harmony
<br/>
Coda
<br/>
We bind to love and care with harmony</p>
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
