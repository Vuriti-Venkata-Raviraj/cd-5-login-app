// Write your code here
import {Component} from 'react'
import Message from '../Message/index'
import Login from '../Login/index'
import Logout from '../Logout/index'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  isLogged = () => {
    const {isLoggedIn} = this.state
    this.setState({
      isLoggedIn: !isLoggedIn,
    })
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Message message={isLoggedIn ? 'Welcome User' : 'Please Login'} />
        {isLoggedIn ? (
          <Logout isLogged={this.isLogged} />
        ) : (
          <Login isLogged={this.isLogged} />
        )}
      </div>
    )
  }
}

export default Home
