import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from '../pages/Login';
import Homepage from '../pages/Homepage';

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route key="login" path="/login" component={Login} />
                <Route key="home" path="/" component={Homepage} />
            </Switch>
        </Router>
    )
}

export default Routing