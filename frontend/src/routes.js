import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Details from './pages/Details';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                {
                    localStorage.getItem("auth") &&
                    <>
                        <Route path='/home' exact component={Home} />
                        <Route path='/details/:id' exact component={Details} />
                    </>
                }
            </Switch>
        </BrowserRouter>
    );
}