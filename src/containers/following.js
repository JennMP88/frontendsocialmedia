import React from 'react';
import AuthContext from '../contexts/auth';


export default class Following extends React.Component {

    render() {
        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return (
                            <>
                                    hello this is following page
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