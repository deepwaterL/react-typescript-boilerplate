import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';
import Component1 from './Component1';
import Component2 from './Component2';

export interface IRouterProps {}

export interface IRouterState {}

class AppRouter extends React.PureComponent<IRouterProps, IRouterState> {
    render() {
        return(
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='' >Home</Link>
                            </li>
                            <li>
                                <Link to='/comp1' >Comp1</Link>
                            </li>
                            <li>
                                <Link to='/comp2' >Comp2</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route path='/' exact component={App} />
                    <Route path='/comp1' exact component={Component1} />
                    <Route path='/comp2' exact component={Component2} />
                </div>
            </Router>
        );
    }
}

export default AppRouter;