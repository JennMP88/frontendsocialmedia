import React from 'react';
import AuthContext from '../contexts/auth';
import '../styles/home.css';

export default class Home extends React.Component {
  
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


    <div class="boxes">
        <div class="row">
            <div class="col">
                {/* <img src="./images/gummybear.png" alt="..." class="rounded-circle" height="200" width="200"> */}
                <div class='moveright'>
                    <h3> Ruth Boaz </h3>
                    <p> A hour ago </p>


                    <div class="boxes">
                        <div class="row">
                            <div class="col">

                            
                                <p>"For, "All people are like grass, and all their glory is like the flowers of the
                                    field;the grass withers and the flowers fall," -1 Peter 1:24</p>
                            </div>
                        </div>
                        <h6> 100 likes - 30 comments </h6>
                        <h6>view all comments</h6>
                    </div>
                </div>
        
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