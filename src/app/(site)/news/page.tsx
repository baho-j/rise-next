import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'News & Updates',
  description:
    'Stay up to date with the latest news, announcements, and events from RiseNext — the mentoring program empowering displaced students in Rwanda.',
  openGraph: {
    title: 'News & Updates — RiseNext',
    description:
      'Latest news, announcements, and events from RiseNext.',
    images: [{url: '/Workshop-7.JPG', width: 1200, height: 630}],
  },
}

const placeholderNews: {
  slug: string
  title: string
  category: string
  excerpt: string
  featuredImage: string
  publishedAt: string
  author: string
}[] = []

export default function NewsPage() {
  return (
    <>
      {/* News Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s">
            <p className="section-title bg-white text-center text-primary px-3 fw-bold">
              Latest Updates
            </p>
            <h1 className="display-6 mb-4">News & Updates</h1>
            <p className="mb-0">
              Stay connected with RiseNext. Read about our impact, success stories, upcoming events,
              and the latest developments in our mission to empower displaced students.
            </p>
          </div>

          {/* Category Filter */}
          <div className="row mb-4 wow fadeIn" data-wow-delay="0.2s">
            <div className="col-12">
              <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-4">
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-2 pb-2 active" href="#">
                    <i className="fa fa-newspaper fa-2x text-secondary"></i>
                    <div className="ps-3">
                      <small className="text-body">Show All</small>
                      <h6 className="mt-n1 mb-0">All News</h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-2 pb-2" href="#">
                    <i className="fa fa-bullhorn fa-2x text-secondary"></i>
                    <div className="ps-3">
                      <small className="text-body">Filter</small>
                      <h6 className="mt-n1 mb-0">Announcements</h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-2 pb-2" href="#">
                    <i className="fa fa-calendar-alt fa-2x text-secondary"></i>
                    <div className="ps-3">
                      <small className="text-body">Filter</small>
                      <h6 className="mt-n1 mb-0">Events</h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-2 pb-2" href="#">
                    <i className="fa fa-pen fa-2x text-secondary"></i>
                    <div className="ps-3">
                      <small className="text-body">Filter</small>
                      <h6 className="mt-n1 mb-0">Articles</h6>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* News Grid */}
          <div className="row g-4">
            {placeholderNews.map((article, index) => (
              <div
                key={article.slug}
                className="col-lg-4 col-md-6 wow fadeIn"
                data-wow-delay={`${0.1 + index * 0.1}s`}
              >
                <div className="blog-item bg-light rounded overflow-hidden h-100 d-flex flex-column">
                  <div
                    className="blog-img position-relative overflow-hidden"
                    style={{height: '200px'}}
                  >
                    <img
                      className="img-fluid w-100 h-100"
                      src={article.featuredImage}
                      alt=""
                      style={{objectFit: 'cover'}}
                    />
                    <a
                      className="position-absolute top-0 start-0 bg-primary text-dark rounded-end mt-3 py-2 px-4"
                      href="#"
                    >
                      {article.category}
                    </a>
                  </div>
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <div className="d-flex mb-3">
                      <small className="me-3">
                        <i className="fa fa-user text-secondary me-2"></i>
                        {article.author}
                      </small>
                      <small>
                        <i className="fa fa-calendar-alt text-secondary me-2"></i>
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </small>
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
                      {article.title}
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
                      {article.excerpt}
                    </p>
                    <div className="mt-auto">
                      <a className="btn btn-secondary rounded py-2 px-4" href={`/news/${article.slug}`}>
                        Read More
                        <i className="fa fa-arrow-right ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {placeholderNews.length === 0 && (
              <div className="col-12 text-center py-5 wow fadeIn" data-wow-delay="0.3s">
                <i className="fa fa-newspaper fa-4x text-secondary mb-4"></i>
                <h4 className="mb-3">No News Yet</h4>
                <p className="mb-0">
                  We don't have any news or updates published at the moment. Check back soon!
                </p>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="row mt-5">
            <div className="col-12">
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center mb-0 wow fadeIn">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* News End */}
    </>
  )
}
