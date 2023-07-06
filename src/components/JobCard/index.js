import {Link} from 'react-router-dom'
import './index.css'

const JobCard = props => {
  const {jobDetails} = props
  const {
    jobDescription,
    employmentType,
    location,
    companyLogoUrl,
    packagePerAnnum,
    id,
    rating,
    title,
  } = jobDetails

  return (
    <div className="job-container">
      <Link to={`/jobs/${id}`}>
        <div className="logo-container">
          <img src={companyLogoUrl} className="logo-img" alt="logo" />
          <div>
            <h1 className="role">{title}</h1>
            <p className="rating">{rating}</p>
          </div>
        </div>
        <div className="my-container">
          <div className="location">
            <p className="city">{location}</p>
            <p>{employmentType}</p>
          </div>
          <p className="package">{packagePerAnnum}</p>
        </div>
        <hr className="linebreak" />
        <div className="description-container">
          <h1 className="description-heading">Description</h1>
          <p>{jobDescription}</p>
        </div>
      </Link>
    </div>
  )
}
export default JobCard
