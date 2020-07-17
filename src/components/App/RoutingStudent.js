import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Account from '../../pages/Account';
import Homepage from '../../pages/Student/Homepage';

const RoutingStudent = () => {
    return (
        <Router>
            <Switch>
                <Route key="login" path="/login" component={Login} />
                <Route key="register" path="/register" component={Register} />
                <Route key="profile" path="/account" component={Account} />
                <Route key="home" path="/" component={Homepage} />
            </Switch>
        </Router>
    )
}

export default RoutingStudent