import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <>
        <Header />
        <div className="home-container">
          <div className="text-container">
            <h1 className="heading-container">
              Find The Job That. Fits Your Life
            </h1>
            <p className="pera">
              Millions of People searching for jobs,salary information, company
              reviews.Find the job that fits your abilities and potential.
            </p>
            <div>
              <button
                type="button"
                className="jobs-button"
                onClick={this.onFindJobs}
              >
                Find Jobs
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
