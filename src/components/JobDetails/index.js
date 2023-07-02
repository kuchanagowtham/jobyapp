import {Component} from 'react'
import Cookies from 'js-cookie'
import JobCard from '../JobCard'

import './index.css'

class JobDetails extends Component {
  state = {
    jobsList: '',
  }

  componentDidMount() {
    this.getJobs()
  }

  getJobs = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/jobs'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.jobs.map(jobData => ({
        logoUrl: jobData.company_logo_url,
        employment: jobData.employment_type,
        id: jobData.id,
        description: jobData.job_description,
        location: jobData.location,
        salary: jobData.package_per_annum,
        rating: jobData.rating,
        title: jobData.title,
      }))
      this.setState({jobsList: updatedData})
    }
  }

  render() {
    const {jobsList} = this.state

    return (
      <>
        <ul className="job-details-item-container">
          {jobsList.map(eachData => (
            <JobCard key={eachData.id} jobDetails={eachData} />
          ))}
        </ul>
      </>
    )
  }
}
export default JobDetails
