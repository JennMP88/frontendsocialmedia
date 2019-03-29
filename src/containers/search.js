import React from 'react';
import AuthContext from '../contexts/auth';
import '../styles/search.css';
const defaultuser = require('../assets/user.png')

export default class Search extends React.Component {

    render() {
        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return (
                             <>


<div class="container">
  <div class="row">
  <div class="bordering">
  <div class="col"> <img src={defaultuser} alt="..." class="rounded-circle" height="200" width="200"/>
  <div class="col name">Person</div>
  </div>
  </div>
  </div>
  </div>
   
  


                                 
                                </>
                            )
                        }
                        else {
                            return <h2>You are not looged in.</h2>
                        }
                    }
                }

            </AuthContext.Consumer>
        )
    }
}
