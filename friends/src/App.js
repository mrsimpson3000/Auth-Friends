import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import Friends from "./components/Friends";

function App() {
  return (
    <Router>
      <div className='sticky-top navBar text-dark'>
        <h1>Friends</h1>
        <ul className='links'>
          <li className='p-2'>
            <Link to='/login'>Login</Link>
          </li>
          <li className='p-2'>
            <Link to='/addFriend'>Add Friend</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/addFriend' component={Friends} />
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
