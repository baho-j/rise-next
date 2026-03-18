
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support RiseNext and help displaced students in Rwanda access higher education. Donate locally via MoMo Pay or bank transfer, or internationally via Equity Bank.',
  openGraph: {
    title: 'Donate to RiseNext',
    description:
      'Your donation helps displaced students in Rwanda access higher education through mentorship and support.',
    images: [{url: '/Workshop-1.JPG', width: 1200, height: 630}],
  },
}

export default function DonatePage() {
  return (
    <>
      {/* Donate Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <p className="section-title bg-white text-start text-primary pe-3 fw-bold">
                Make a Difference
              </p>
              <h1 className="display-6 mb-4">Your Donation Changes Lives</h1>
              <p className="mb-4">
                RiseNext is dedicated to empowering forcibly displaced high school and university
                students to access higher education opportunities. Your generous donation helps us
                provide mentorship, resources, and guidance to students who have been displaced from
                their homes.
              </p>
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 btn-lg-square bg-secondary rounded-circle">
                      <i className="fa fa-graduation-cap text-white"></i>
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-0">Mentorship Programs</h5>
                      <span className="text-muted">One-on-one guidance</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 btn-lg-square bg-secondary rounded-circle">
                      <i className="fa fa-book text-white"></i>
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-0">Educational Resources</h5>
                      <span className="text-muted">Study materials & tools</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 btn-lg-square bg-secondary rounded-circle">
                      <i className="fa fa-laptop text-white"></i>
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-0">Workshops & Training</h5>
                      <span className="text-muted">Skills development</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 btn-lg-square bg-secondary rounded-circle">
                      <i className="fa fa-hands-helping text-white"></i>
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-0">Application Support</h5>
                      <span className="text-muted">University applications</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
              {/* Local Donations */}
              <div className="bg-secondary rounded p-5 mb-4">
                <h4 className="mb-1 fw-bold text-primary">Local Donations</h4>
                <p className="text-white mb-4">For donors based in Rwanda</p>

                {/* MoMo Pay */}
                <div className="bg-white rounded p-4 mb-3">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-lg-square bg-primary rounded">
                      <i className="fa fa-mobile-alt text-dark"></i>
                    </div>
                    <h5 className="ms-3 mb-0">Mobile Money (MoMo Pay)</h5>
                  </div>
                  <p className="mb-1"><strong>Account Name:</strong> RISENEXT Ltd</p>
                  <p className="mb-1"><strong>MoMo Pay Code:</strong> 080066</p>
                  <p className="mb-1"><strong>Number:</strong> +250 780 066 261</p>
                  <p className="mb-0 text-muted small">Send via MTN Mobile Money using the code or number above. Add "Donation" in the payment note.</p>
                </div>

                {/* Local Bank Transfer */}
                <div className="bg-white rounded p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-lg-square bg-primary rounded">
                      <i className="fa fa-university text-dark"></i>
                    </div>
                    <h5 className="ms-3 mb-0">Bank Transfer</h5>
                  </div>
                  <p className="mb-1"><strong>Bank:</strong> Equity Bank Rwanda</p>
                  <p className="mb-1"><strong>Account Name:</strong> RISENEXT Ltd</p>
                  <p className="mb-1"><strong>Account Number:</strong> 4021201317791</p>
                  <p className="mb-0 text-muted small">Please add "Donation" in the payment reference.</p>
                </div>
              </div>

              {/* International Donations */}
              <div className="bg-secondary rounded p-5">
                <h4 className="mb-1 fw-bold text-primary">International Donations</h4>
                <p className="text-white mb-4">For donors outside Rwanda</p>

                <div className="bg-white rounded p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-lg-square bg-primary rounded">
                      <i className="fa fa-university text-dark"></i>
                    </div>
                    <h5 className="ms-3 mb-0">International Bank Transfer</h5>
                  </div>
                  <p className="mb-1"><strong>Bank:</strong> Equity Bank Rwanda</p>
                  <p className="mb-1"><strong>Account Name:</strong> RISENEXT Ltd</p>
                  <p className="mb-1"><strong>Account Number:</strong> 4021201317791</p>
                  <p className="mb-1"><strong>SWIFT/BIC:</strong> EQBLRWRW</p>
                  <p className="mb-0 text-muted small">Please add "Donation" in the payment reference. Contact us at info@rise-next.org if you need assistance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Donate End */}

      {/* Other Ways to Help Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s">
            <p className="section-title bg-white text-center text-primary px-3 fw-bold">
              Get Involved
            </p>
            <h1 className="display-6 mb-4">Other Ways to Support Us</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="service-item bg-light rounded h-100 p-5 text-center d-flex flex-column">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4 mx-auto">
                  <i className="fa fa-user-friends fa-3x text-secondary p-4"></i>
                </div>
                <h4 className="mb-3">Become a Mentor</h4>
                <p className="mb-4 flex-grow-1">
                  Share your knowledge and experience by mentoring a displaced student through their
                  higher education journey.
                </p>
                <div className="mt-auto">
                  <a className="btn btn-secondary rounded py-2 px-4" href="/opportunities">
                    Learn More
                    <i className="fa fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.3s">
              <div className="service-item bg-light rounded h-100 p-5 text-center d-flex flex-column">
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4 mx-auto">
                  <i className="fa fa-handshake fa-3x text-secondary p-4"></i>
                </div>
                <h4 className="mb-3">Partner With Us</h4>
                <p className="mb-4 flex-grow-1">
                  Organizations and institutions can partner with RiseNext to expand opportunities
                  for displaced students.
                </p>
                <div className="mt-auto">
                  <a className="btn btn-secondary rounded py-2 px-4" href="/contact">
                    Get in Touch
                    <i className="fa fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="service-item bg-light rounded h-100 p-5 text-center d-flex flex-column">
                <div className="d-inline-flex align-items-center justify-content-center  rounded-circle mb-4 mx-auto">
                  <i className="fa fa-share-alt fa-3x text-secondary p-4"></i>
                </div>
                <h4 className="mb-3">Spread the Word</h4>
                <p className="mb-4 flex-grow-1">
                  Help us reach more students and supporters by sharing RiseNext on your social
                  media platforms.
                </p>
                <div className="mt-auto d-flex justify-content-center">
                  <a
                    className="btn btn-square btn-secondary rounded me-2"
                    href="https://www.linkedin.com/company/nextrise-mentorship"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-square btn-secondary rounded me-2"
                    href="https://www.instagram.com/risenext_/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-square btn-secondary rounded me-2"
                    href="https://www.facebook.com/505870975939339/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Other Ways to Help End */}
    </>
  )
}
