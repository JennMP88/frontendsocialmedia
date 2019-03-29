import React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth';
import Userprofile from '../containers/userprofile';
const logo = require('../assets/logo.png')
const following =require('../assets/heart.jpg')
const userprofile =require('../assets/person.png')
const search=require('../assets/compass.png')
const logout=require('../assets/exit.png')


export default (props) => {
  const loggedOut = 
  <>
   <li className="nav-item">
      <Link className="nav-link" to="/signup">Sign Up</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/login">Login</Link>
    </li>
    
    </>

  const loggedIn = 
  <>
  <form>
          <input className="box" type="search" id="search" placeholder="Search" />

           <input className='searchButton' type='submit' value='Search' />
  </form>

 <li className="nav-item">
    <Link className="nav-link" to="/search" ><img src={search} width="45" height="45" alt="searches" /></Link>
 </li>

  <li className="nav-item">
    <Link className="nav-link" to="/following" ><img src={following} width="45" height="45" alt="stalking" /></Link>
 </li>

 <li className="nav-item">
    <Link className="nav-link" to="/userprofile" ><img src={userprofile} width="45" height="45" alt="selfie" /></Link>
 </li>
 
 <li className="nav-item">
    <Link className="nav-link" to="/logout" ><img src={logout} width="45" height="45" alt="run" /></Link>
 </li>


    </>

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <Link className="navbar-brand" to="/">Authentication</Link> */}
     
     <img src={logo} width="100" height="100" alt="Fake-stah-gram"/>
     <h4>Fake-stah-gram</h4> 
      <ul className="navbar-nav">
        <li className="nav-item"> 
          <Link className="nav-link" to="/">Home</Link>
        </li>
        
        <AuthContext.Consumer>
          {
            user => {
              if (user) return loggedIn
              else return loggedOut
            }
          }
        </AuthContext.Consumer>
      </ul>
    </nav>
  )
}