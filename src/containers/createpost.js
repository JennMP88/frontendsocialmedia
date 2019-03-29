import React from 'react';
import AuthContext from '../contexts/auth';
const pictureholder = require('../assets/piclogo.png')


export default class Createpost extends React.Component {

    render() {
        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return (
                            <>
<div class='d-flex' >
    <div class="boxes">
        <div class="jumbotron jumbotron-fluid">

           
                <div class="col col-4">
                    <h1 class="display-4">Drop File</h1>
                    <img src={pictureholder} alt="..." height="200" width="200" />
                </div>
            </div>
        </div>

         <div class="col-sm-8">
        <form>
            <div class="form-group">
                    <label for="exampleFormControlTextarea1">Comment</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button type="button" class="button">Post</button>
                </div>
            </form>
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