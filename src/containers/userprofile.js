import React from 'react';
import AuthContext from '../contexts/auth';
import '../styles/userprofile.css';



export default class Userprofile extends React.Component {

    render() {
        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return (
                                <>

                                    <div className="topbox"></div>
                                    <div className="row">
                                        <div className="col">
                                            <img src="./images/gummybear.png" alt="..." class="rounded-circle" height="200" width="200" />
                                            <div>
                                                <h3> Ruth Boaz  </h3>

                                                <p> Followers: 129 </p>
                                                <p> Following: 2</p>
                                            </div>
                                            <div>
                                                <p><button type="button" class="btn btn-dark">Follow</button> </p>

                                            </div>
                                        </div>
                                    </div>

                                    <body>
                                        <div className="col">
                                            <div className="row">
                                                <div className="boxes"> OTHER BOX</div>
                                                <img src="./images/victory.jpg" class="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title that wraps to a new line</h5>
                                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to
                    additional content. </p>
                                                </div>
                                            </div>
                                        </div>



                                    </body>
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
