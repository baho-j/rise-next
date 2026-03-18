import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Opportunities',
  description:
    'Explore current volunteering, career, and mentee cohort opportunities with RiseNext. Join our mission to empower displaced students in Rwanda.',
  openGraph: {
    title: 'Opportunities — RiseNext',
    description:
      'Explore current volunteering, career, and mentee cohort opportunities with RiseNext.',
  },
}

const placeholderOpportunities: {
  slug: string
  title: string
  type: string
  location: string
  employmentType: string
  excerpt: string
  deadline: string
  isActive: boolean
}[] = []

export default function OpportunitiesPage() {
  return (
    <>
      {/* Opportunities Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s">
            <p className="section-title bg-white text-center text-primary px-3 fw-bold">
              Get Involved
            </p>
            <h1 className="display-6 mb-4">Current Opportunities</h1>
            <p className="mb-0">
              Whether you're looking to make a difference as a volunteer, seeking a career with
              purpose, or a displaced student ready to take the next step in your education journey,
              we have opportunities for you.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="row mb-4 wow fadeIn" data-wow-delay="0.2s">
            <div className="col-12 ">
              <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-4">
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-2 pb-2 active" href="#">
                    <i className="fa fa-briefcase fa-2x text-secondary"></i>
                    <div className="ps-3">
                      <small className="text-body">Show All</small>
                      <h6 className="mt-n1 mb-0">All Opportunities</h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-2 pb-2" href="#">
                    <i className="fa fa-handshake fa-2x text-secondary"></i>
                    <div className="ps-3">
                      <small className="text-body">Filter</small>
                      <h6 className="mt-n1 mb-0">Volunteering</h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-2 pb-2" href="#">
                    <i className="fa fa-user-tie fa-2x text-secondary"></i>
                    <div className="ps-3">
                      <small className="text-body">Filter</small>
                      <h6 className="mt-n1 mb-0">Careers</h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-2 pb-2" href="#">
                    <i className="fa fa-graduation-cap fa-2x text-secondary"></i>
                    <div className="ps-3">
                      <small className="text-body">Filter</small>
                      <h6 className="mt-n1 mb-0">Student Cohorts</h6>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Opportunities Grid */}
          <div className="row g-4">
            {placeholderOpportunities.map((opportunity, index) => (
              <div
                key={opportunity.slug}
                className="col-lg-4 col-md-6 wow fadeIn"
                data-wow-delay={`${0.1 + index * 0.1}s`}
              >
                <div className="service-item bg-light rounded h-100 p-4 d-flex flex-column">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-0">
                      <i
                        className={`fa ${
                          opportunity.type === 'Career'
                            ? 'fa-user-tie'
                            : opportunity.type === 'Volunteering'
                              ? 'fa-handshake'
                              : 'fa-graduation-cap'
                        } fa-2x text-secondary p-3`}
                      ></i>
                    </div>
                    <span className="badge bg-primary text-dark rounded text-uppercase">
                      {opportunity.type}
                    </span>
                  </div>
                  <h5
                    className="mb-3"
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      minHeight: '3.6rem',
                    }}
                  >
                    {opportunity.title}
                  </h5>
                  <p
                    className="mb-3"
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      minHeight: '4.5rem',
                    }}
                  >
                    {opportunity.excerpt}
                  </p>
                  <div className="mb-3">
                    <small className="text-body fw-bold">
                      <i className="fa fa-map-marker-alt text-secondary me-2"></i>
                      {opportunity.location}
                    </small>
                    <br />
                    <small className="text-body fw-bold">
                      <i className="fa fa-clock text-secondary me-2"></i>
                      {opportunity.employmentType}
                    </small>
                    <br />
                    <small className="text-body fw-bold">
                      <i className="fa fa-calendar text-secondary me-2"></i>
                      Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                    </small>
                  </div>
                  <div className="mt-auto">
                    <a
                      className="btn btn-secondary rounded py-2 px-4"
                      href={`/opportunities/${opportunity.slug}`}
                    >
                      View Details
                      <i className="fa fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {placeholderOpportunities.length === 0 && (
              <div className="col-12 text-center py-5 wow fadeIn" data-wow-delay="0.3s">
                <i className="fa fa-briefcase fa-4x text-secondary mb-4"></i>
                <h4 className="mb-3">No Opportunities Listed at the Moment</h4>
                <p className="mb-0">
                  We currently have no open positions, volunteering roles, or cohort applications.
                  Check back soon or get in touch — we'd love to hear from you.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Opportunities End */}

      {/* Call to Action Start */}
      <div
        className="container-fluid bg-secondary text-white py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center">
          <h2 className="display-6 text-white mb-4">Don't See What You're Looking For?</h2>
          <p className="mb-4">
            We're always looking for passionate individuals to join our mission. Reach out to us to
            discuss other ways you can contribute to empowering displaced students.
          </p>
          <a href="/contact" className="btn btn-primary rounded py-3 px-5">
            Get In Touch
          </a>
        </div>
      </div>
      {/* Call to Action End */}
    </>
  )
}
