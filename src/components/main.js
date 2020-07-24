import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './LandingPage';
import Contact from './Contact';
import Projects from './Projects';
import CV from './CV';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/cv" component={CV} />
    </Switch>
);

export default Main;