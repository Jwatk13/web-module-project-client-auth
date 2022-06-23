import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';



function App() {
  return (
    <Router> 
      <div className="App">
        <h2>Client Auth Project</h2>
        <Switch>
          <Route path="/friends/add" component={AddFriends} />
          <Route path="/friends" component={FriendsList} />
          <Route path='/login' component={Login} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/**
 * <Route exact path="/">
 *  <Login/>
 * </Route>
 * <Route exact path="/login">
 *  <Redirect to="/" />
 * </Route
 */
