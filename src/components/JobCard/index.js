import './index.css'

const JobCard = props => {
  const {jobDetails} = props
  const {
    description,
    employment,
    location,
    logoUrl,
    salary,

    rating,
    title,
  } = jobDetails

  return (
    <>
      <div className="job-container">
        <div className="logo-container">
          <img src={logoUrl} className="logo-img" alt="logo" />
          <div>
            <h1 className="role">{title}</h1>
            <p className="rating">{rating}</p>
          </div>
        </div>
        <div className="my-container">
          <div className="location">
            <p className="city">{location}</p>
            <p>{employment}</p>
          </div>
          <p className="package">{salary}</p>
        </div>
        <hr className="linebreak" />
        <div className="description-container">
          <h1 className="description-heading">Description</h1>
          <p>{description}</p>
        </div>
      </div>
    </>
  )
}
export default JobCard
