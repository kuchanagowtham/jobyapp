import './index.css'

import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = props => {
  const {history} = props

  const logoutButton = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="header-component">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt=" website logo"
          className="image-sizing"
        />
      </div>
      <ul className="ulcomponent">
        <Link to="/">
          <li className="home-component">Home</li>
        </Link>
        <Link to="/jobs">
          <li className="home-component">Jobs</li>
        </Link>
      </ul>
      <div>
        <button type="button" onClick={logoutButton}>
          Log Out
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
