import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
  }

  onLoginSuccess(jwtToken) {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onLoginFailure(errorMsg) {
    this.setState({isError: true, errorMsg})
  }

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  render() {
    const {password} = this.state
    const {username} = this.state
    const {isError, errorMsg} = this.state

    return (
      <div className="main-container">
        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt=" website logo"
            className="website-logo"
          />

          <form onSubmit={this.submitForm}>
            <label htmlFor="user" className="input-label">
              USERNAME
            </label>
            <br />
            <input
              id="user"
              placeholder="Username"
              type="text"
              className="username-input-filed"
              value={username}
              onChange={this.getUsername}
            />
            <br />
            <label htmlFor="password" className="input-label">
              PASSWORD
            </label>
            <br />
            <input
              id="password"
              placeholder="Password"
              type="password"
              className="password-input-filed"
              value={password}
              onChange={this.getPassword}
            />
            {isError && <p>*{errorMsg}</p>}
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
