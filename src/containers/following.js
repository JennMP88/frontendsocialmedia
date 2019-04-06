import React from 'react';
import AuthContext from '../contexts/auth';
import '../styles/search.css';
import axios from 'axios'
const defaultuser = require('../assets/user.png')

export default class Following extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      usersFollowing: [],
    }
  }
  
  componentWillMount() {
    const userId = this.props.user.id
    
    axios.get(`http://localhost:3001/follow/following/${userId}`)
      .then(({data}) => {
        const usersFollowing = data
        
        this.setState({ usersFollowing })
      })
      .catch(console.error)
  }
  
  render() {
    const users = this.state.usersFollowing.map(x => <li>{x.username}</li>)
    
    return (
      <>
        <div class="container border black">
        <div class="row .d-flex">

        <img src={defaultuser} alt="..." class="rounded-circle" height="200" width="200" />
        <div class="col-sm-8">
        <ul>
          {users}
        </ul>
        <p>  <div class="col name">Person</div></p>
        </div>
        </div>
        </div>
      </>
    )
  }
}