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
        <header>
          <h2>Client Auth Project</h2>
          <Link className='link' to='login'>Login</Link>
          <Link className='link' to='friends'>Friends List</Link>
          <Link className='link' to='friends/add'>Add Friends</Link>
          <Link className='link' to='friends'>Logout</Link>
        </header>
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
