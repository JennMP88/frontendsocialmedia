import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import firebase from './firebase';

// ---- Pages
import Header from './components/header';
import Home from './containers/home';
import Signup from './containers/signup';
import Login from './containers/login';
import Error404 from './components/error404';
import Logout from './containers/logout';
import Userprofile from './containers/userprofile'; 
import Search from './containers/search';
import Createpost from './containers/createpost';
import Following from './containers/following';
import Viewpost from './containers/viewpost';
import Follower from './containers/follower';


// ---- Contexts
import AuthContext from './contexts/auth';




class App extends Component {

  state = {
    user: null
  }

  //api data retrieving for authentication portion
  //here we are assignin unsubscribe-->given a function
  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user }); //user shows user is logged in--->passed to auth context
      }
      else {
        this.setState({ user: null })
      }
    })
  }

  //invoking it to take it off memory
  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <HashRouter>
        <AuthContext.Provider value={this.state.user}>
          <Route path='/' component={ Header } />
          <div className='container mt-5'>
            <Switch>
              <Route path='/' exact component={ Home } />
              <Route path='/signup' exact component={ Signup } />
              <Route path='/login' exact component={ Login } />
              <Route path='/following' exact component={Following} />
              <Route path='/search' exact component={Search} />
              <Route path='/userprofile' exact component={ Userprofile } />
              <Route path='/createpost' exact component={ Createpost } />
              <Route path='/logout' exact component={ Logout } />
              <Route path='/viewpost' exact component={ Viewpost } />
              <Route path='/follower' exact component={ Follower } />
              <Route component={ Error404 } />
            </Switch>
          </div>
          </AuthContext.Provider>
      </HashRouter>
    );
  }
}

export default App;
