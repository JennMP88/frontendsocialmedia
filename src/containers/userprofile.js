import React from 'react';
import AuthContext from '../contexts/auth';
import '../styles/userprofile.css';
const defaultuser = require('../assets/user.png')
const placeholder = require('../assets/placeholder.jpg')



export default class Userprofile extends React.Component {

    render() {
        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return (
                                <>

                                    <div class="container">
                                        <div class="row .d-flex">
                                            
                                            <img src={defaultuser} alt="..." class="rounded-circle" height="200" width="200" />
                                            <div class="col-sm-8">
                                                <h3> Lala Sanchez </h3>
                                                <p> Followers: 129 </p>
                                                <p> Following: 2</p>
                                                <p> <button type="button" class="btn btn-dark">Follow</button>  </p> 
                                                </div>
                                        </div>
                                        
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="card">
                                                <div class="card-body">
                                                    <img src={placeholder} alt="..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="card">
                                                <div class="card-body">
                                                    <img src={placeholder} alt="..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="card">
                                                <div class="card-body">
                                                    <img src={placeholder} alt="..." />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-sm-4">
                                            <div class="card">
                                                <div class="card-body">
                                                    <img src={placeholder} alt="..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="card">
                                                <div class="card-body">
                                                    <img src={placeholder} alt="..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4 .mt-4">
                                            <div class="card">
                                                <div class="card-body">
                                                    <img src={placeholder} alt="..." />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        else {
                            return <h2>You are not logged in.</h2>
                        }
                    }
                }

            </AuthContext.Consumer>
        )
    }
}
