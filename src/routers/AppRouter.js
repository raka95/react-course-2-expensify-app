// import {BrowserRouter, Route,Switch,Link,NavLink} from  'react-router-dom';
import {Router, Route,Switch,Link,NavLink} from  'react-router-dom';
import React from 'react';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import PageNotFound from '../components/PageNotFound';
import LoginPage from '../components/LoginPage';
import PrivateRoute from "./PrivateRoute";
import PublicRoute  from './PublicRoute';

export const history=createHistory();

const AppRouter=()=>(
    // <BrowserRouter>
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path ="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </Router>    
    // </BrowserRouter>
);
export default AppRouter;