import type {Metadata} from 'next'
import HeroCarousel from "@/components/sections/HeroCarousel"

export const metadata: Metadata = {
  title: 'Home',
  description:
    'RiseNext bridges the knowledge gap for forcibly displaced students in Rwanda to access higher education. Winners of the 2024 CIEE UNHCR Student Challenge.',
  openGraph: {
    title: 'RiseNext — Empowering Displaced Students Through Education',
    description:
      'RiseNext bridges the knowledge gap for forcibly displaced students in Rwanda to access higher education. Winners of the 2024 CIEE UNHCR Student Challenge.',
    images: [{url: '/Workshop-1.JPG', width: 1200, height: 630}],
  },
}

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      {/* Video Start */}
      <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-11">
              <div className="h-100 py-5 d-flex align-items-center">
                <div className="flex-shrink-0">
                  <i className="fa fa-graduation-cap fa-3x text-secondary"></i>
                </div>
                <h3 className="ms-5 mb-0">
                  Together, we can build a world where every displaced student has the chance to thrive.
                </h3>
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-1">
              <div className="h-100 w-100 bg-secondary d-flex align-items-center justify-content-center">
                <span className="text-white" style={{transform: 'rotate(-90deg)'}}>
                  Scroll Down
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video End */}

      {/* Video Modal Start */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item rounded-bottom"
                  id="video"
                  allowFullScreen
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal End */}

      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.2s">
              <div className="about-img">
                <img
                  className="img-fluid w-100 rounded"
                  src="/Workshop-17.JPG"
                  alt="RiseNext workshop session"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <p className="section-title bg-white text-start text-primary pe-3 fw-bold">
                About Us
              </p>
              <h1 className="display-6 mb-4 wow fadeIn" data-wow-delay="0.2s">
                Bridging the Gap to Higher Education
              </h1>
              <p className="mb-4 wow fadeIn" data-wow-delay="0.3s">
                RiseNext is a mentoring program that bridges the knowledge gap for forcibly displaced
                high school and university students to access higher education opportunities. We
                connect refugee and displaced students in Rwanda with mentors who guide them through
                every stage — from university applications to career readiness.
              </p>
              <div className="row g-4 pt-2">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                  <div className="h-100">
                    <h3>Our Mission</h3>
                    <p>
                      To equip forcibly displaced students with the knowledge, mentorship, and
                      resources needed to access and thrive in higher education.
                    </p>
                    <p className="text-dark">
                      <i className="fa fa-check text-primary me-2"></i>University application support
                    </p>
                    <p className="text-dark">
                      <i className="fa fa-check text-primary me-2"></i>Financial aid navigation
                    </p>
                    <p className="text-dark mb-0">
                      <i className="fa fa-check text-primary me-2"></i>Career readiness coaching
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="h-100 bg-primary p-4 text-center rounded">
                    <p className="fs-5 text-dark">
                      Winners of the 2024 CIEE UNHCR Student Challenge — backed by a $50,000 grant
                      to launch our pilot program in Rwanda.
                    </p>
                    <a className="btn btn-secondary rounded py-2 px-4" href="/donate">
                      Donate Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Features Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="rounded overflow-hidden">
                <div className="row g-0">
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="text-center bg-primary py-5 px-4 h-100">
                      <i className="fa fa-users fa-3x text-secondary mb-3"></i>
                      <h1 className="display-5 mb-0">4%</h1>
                      <span className="text-dark">Displaced students reach university today</span>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                    <div className="text-center bg-secondary py-5 px-4 h-100">
                      <i className="fa fa-award fa-3x text-primary mb-3"></i>
                      <h1 className="display-5 text-white mb-0">15%</h1>
                      <span className="text-white">UNHCR's 2030 enrollment target</span>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="text-center bg-secondary py-5 px-4 h-100">
                      <i className="fa fa-graduation-cap fa-3x text-primary mb-3"></i>
                      <h1 className="display-5 text-white mb-0">$50K</h1>
                      <span className="text-white">CIEE grant awarded to RiseNext</span>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                    <div className="text-center bg-primary py-5 px-4 h-100">
                      <i className="fa fa-globe fa-3x text-secondary mb-3"></i>
                      <h1 className="display-5 mb-0">38</h1>
                      <span className="text-dark">Countries in the global challenge</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="section-title bg-white text-start text-primary pe-3 fw-bold">Why Us!</p>
              <h1 className="display-6 mb-4 wow fadeIn" data-wow-delay="0.2s">
                A Program Built by Students, for Students
              </h1>
              <p className="mb-4 wow fadeIn" data-wow-delay="0.3s">
                Founded by four Kigali-based university students who experienced the barriers
                firsthand, RiseNext offers a multi-stage mentoring model tailored to the unique
                challenges faced by refugee and forcibly displaced students in Rwanda.
              </p>
              <p className="text-dark wow fadeIn" data-wow-delay="0.4s">
                <i className="fa fa-check text-primary me-2"></i>Pre-admission: computer literacy,
                prerequisites &amp; applications
              </p>
              <p className="text-dark wow fadeIn" data-wow-delay="0.5s">
                <i className="fa fa-check text-primary me-2"></i>Early university: financial aid,
                academic &amp; social support
              </p>
              <p className="text-dark wow fadeIn" data-wow-delay="0.6s">
                <i className="fa fa-check text-primary me-2"></i>Pre-graduation: career coaching
                &amp; professional networking
              </p>
              <div className="d-flex mt-4 wow fadeIn" data-wow-delay="0.7s">
                <a className="btn btn-secondary rounded py-3 px-4" href="/opportunities">
                  Get Involved
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}

      {/* Testimonial Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-12 col-lg-4 col-xl-3 wow fadeIn" data-wow-delay="0.1s">
              <div className="testimonial-title">
                <h1 className="display-6 mb-4">What People Say About RiseNext.</h1>
                <p className="fs-5 mb-0">
                  Hear from the students and mentors whose lives RiseNext has touched.
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">
              <div className="owl-carousel testimonial-carousel wow fadeIn" data-wow-delay="0.3s">
                <div className="testimonial-item">
                  <div className="row g-5 align-items-center">
                    <div className="col-md-6">
                      <div className="testimonial-img">
                        <img
                          className="img-fluid rounded"
                          src="/Workshop-19.JPG"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="testimonial-text pb-5 pb-md-0">
                        <p className="fs-5">
                          RiseNext gave me not just guidance, but hope. I went from not knowing how
                          to apply to university to receiving my admission letter — all with the
                          support of my mentor.
                        </p>
                        <div className="d-flex align-items-center">
                          <div className="btn-lg-square bg-primary rounded text-white flex-shrink-0">
                            <i className="fa fa-quote-right fa-2x"></i>
                          </div>
                          <div className="ps-3">
                            <h5 className="mb-0">RiseNext Mentee</h5>
                            <span>Refugee Student, Kigali</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="row g-5 align-items-center">
                    <div className="col-md-6">
                      <div className="testimonial-img">
                        <img
                          className="img-fluid rounded"
                          src="/Workshop-20.JPG"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="testimonial-text pb-5 pb-md-0">
                        <p className="fs-5">
                          Mentoring through RiseNext has been one of the most rewarding experiences
                          of my life. Seeing displaced students unlock their potential and secure
                          university placements is incredibly fulfilling.
                        </p>
                        <div className="d-flex align-items-center">
                          <div className="btn-lg-square bg-primary rounded text-white flex-shrink-0">
                            <i className="fa fa-quote-right fa-2x"></i>
                          </div>
                          <div className="ps-3">
                            <h5 className="mb-0">RiseNext Mentor</h5>
                            <span>University Student, Rwanda</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item">
                  <div className="row g-5 align-items-center">
                    <div className="col-md-6">
                      <div className="testimonial-img">
                        <img
                          className="img-fluid rounded"
                          src="/Workshop-22.JPG"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="testimonial-text pb-5 pb-md-0">
                        <p className="fs-5">
                          This program is exactly what displaced students in Rwanda need. The
                          mentors understand our challenges and provide practical, actionable
                          guidance every step of the way.
                        </p>
                        <div className="d-flex align-items-center">
                          <div className="btn-lg-square bg-primary rounded text-white flex-shrink-0">
                            <i className="fa fa-quote-right fa-2x"></i>
                          </div>
                          <div className="ps-3">
                            <h5 className="mb-0">RiseNext Mentee</h5>
                            <span>University Student, Rwanda</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  )
}
