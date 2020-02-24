import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import history from './history';
import Login from "../containers/login";
import Dashboard from "../containers/dashboard";

class Routes extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;