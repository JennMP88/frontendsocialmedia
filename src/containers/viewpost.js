import React from 'react';
import AuthContext from '../contexts/auth';
import '../styles/viewpost.css';
const defaultuser = require('../assets/user.png')
const placeholder = require('../assets/placeholder.jpg')

export default class Viewpost extends React.Component {

  render() {
    return (
      <div className='boxworld'>
        <AuthContext.Consumer>
          {
            (user) => {
              if (user) {
                return (
                  <>
                    <h2>Welcome back, {user.email}</h2>
                    <h4>Your ID is: {user.uid}</h4>





                    <div class="container">
                      <div className='boxed'>
                        <div class="row">

                          <img src={defaultuser} alt="..." class="rounded-circle" height="100" width="100" />
                          <div class="col-sm-8">
                            <p><b> Lala Sanchez  </b> </p>
                            <p> An hour ago </p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-8 col-sm-6">
                            <img src={placeholder} alt="..." height="300" width="400" />
                            <h6> 100 likes - 30 comments </h6>
                            <h5>caption..</h5>
                          </div>

                        </div>
                      </div>
                    </div>


                  

                    <div class="container border black">
                      <div class="row .d-flex">

                        <img src={defaultuser} alt="..." class="rounded-circle" height="200" width="200" />
                        <div class="col-sm-8">

                          <p>  <div class="col name">Person</div></p>
                        </div>
                      </div>
                    </div>
                    <div class="container border black">
                      <div class="row .d-flex">

                        <img src={defaultuser} alt="..." class="rounded-circle" height="200" width="200" />
                        <div class="col-sm-8">

                          <p>  <div class="col name">Person</div></p>
                        </div>
                      </div>
                    </div>





                  </>
                )
              } else {
                return <h2>You are not logged in.</h2>
              }
            }
          }
        </AuthContext.Consumer>
      </div>

    )
  }
}