import React from 'react';
import AuthContext from '../contexts/auth';


export default class Search extends React.Component {

    render() {
        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return (
                            <>
                                     search page
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