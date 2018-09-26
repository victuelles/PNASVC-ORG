import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../../features/nav/NavBar/NavBar';
import HomePage from '../../features/home/HomePage';
import AboutPage from '../../features/about/AboutPage';
import EventsPage from '../../features/events/EventsPage';
import ContactPage from '../../features/contact/ContactPage';
import JoinUsPage from '../../features/joinus/JoinUsPage';
class App extends Component {
  render() {
    return (
      <div>
        
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
            <div>
              
              <Container className="main">
                <Switch>
                  <Route path="/about" component={AboutPage} />
                  <Route path="/events" component={EventsPage} />
                  <Route path="/join-us" component={JoinUsPage} />
                  <Route path="/contact" component={ContactPage} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
