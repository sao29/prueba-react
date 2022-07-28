import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="featured-post container">
        <h3 className='text-center "text-uppercase py-3'>Featured Post</h3>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Red more
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* dos */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.unsplash.com/photo-1623298317883-6b70254edf31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Red more
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* tres */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Red more
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* fin */}
        </div>
      </section>

      <section className="latest-post container">
        <h3 className='text-center "text-uppercase pt-4'>Latest Post</h3>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Red more
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* dos */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.unsplash.com/photo-1623298317883-6b70254edf31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Red more
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* tres */}
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">
                    Red more
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* fin */}
        </div>
      </section>

      <section className=" container-fluid bg-primary bg-gradient mt-3" style={{minHeight: '150px'}}>
      <div className="d-flex flex-column justify-content-center align-items-center">
      <i className="fs-1 text-warning my-3 fa-solid fa-map-location-dot"></i>
      <h2 className="text-white text-uppercase">We have wide variety of post</h2>
      <button className="fw-bold btn btn-warning my-2 text-white text-uppercase">View Post</button>
      </div>
      </section>

      <section className="our-portfolio container">
        <h3 className='text-center "text-uppercase py-4'>Our portfolio</h3>
        <div className="container text-center">
          <div className="row g-2">
            <div className="col-6">
              <div className="p-1 border bg-light">
              <img
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                className="card-img-top"
                alt="..."/>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light">
              <img
                src="https://images.unsplash.com/photo-1633683914992-ded93eb8b18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1043&q=80"
                className="card-img-top"
                alt="..." /></div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light">
              <img
                src="https://images.unsplash.com/photo-1584752242818-b4bd7fb3fe10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
                className="card-img-top"
                alt="..."/></div>
            </div>
            <div className="col-6">
              <div className="p-3 border bg-light">
              <img
                src="https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                
                className="card-img-top"
                alt="..."/></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
