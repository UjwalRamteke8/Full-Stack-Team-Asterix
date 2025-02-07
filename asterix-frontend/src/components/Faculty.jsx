import React from "react";

const Faculty = () => {
  return (
    <>
      {/* // <!-- FACULTY ADVISORS --> */}
      <section className="faculty-advisors-section py-5 bg-gray-100">
        <div className="container explore-india my-5">
          <h2
            className="text-center mb-4 text-3xl font-bold text-green-700 font-serif"
            id="Explore-India"
          >
            FACULTY ADVISORS
          </h2>
          <div
            id="exploreIndiaCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row flex flex-row mx-auto">
                  {/* <!-- Faculty 1 --> */}
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card advisor-card shadow-lg rounded-lg overflow-hidden transform hover:scale-105">
                      <div className="card-body  flex-col">
                        <h5 className="card-title text-xl font-mulish font-semibold text-gray-800">
                          Dr. S.A. PATIL
                        </h5>
                        <p className="card-text font-mulish text-gray-600">
                          Chief Advisor <br />
                          Team Asterix <br />
                          GCOEJ , Jalgaon
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Faculty 2 --> */}
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card advisor-card shadow-lg rounded-lg overflow-hidden transform hover:scale-105">
                      <div className="card-body">
                        <h5 className="card-title text-xl mx-auto font-mulish font-semibold text-gray-800">
                          Dr. S.S. GAJRE
                        </h5>
                        <p className="card-text font-mulish mx-auto text-gray-600">
                          Principal <br />
                          GCOEJ , Jalgaon
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Faculty 3 --> */}
                  {/* <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card advisor-card shadow-lg rounded-lg overflow-hidden transform hover:scale-105">
                      <div className="card-body">
                        <h5 className="card-title font-mulish text-xl font-semibold text-gray-800">
                          Faculty Name 3
                        </h5>
                        <p className="card-text font-mulish text-gray-600">
                          Faculty Role 3
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* <!-- Add more carousel items for additional slides --> */}
            </div>
            {/* <!-- Carousel Controls --> */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#exploreIndiaCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#exploreIndiaCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faculty;
