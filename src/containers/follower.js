import React from 'react';
import AuthContext from '../contexts/auth';
import '../styles/search.css';
const defaultuser = require('../assets/user.png')


export default class Follower extends React.Component {

    render() {
        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return (
                            <>
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