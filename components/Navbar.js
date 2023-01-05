import React from "react";

export default function Navbar() {
  return (
    <div>
      <div
        class="container-fluid fixed-top px-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="top-bar row gx-0 align-items-center d-none d-lg-flex">
          <div class="col-lg-6 px-5 text-start">
            <small>
              <i class="fa fa-map-marker-alt text-primary me-2"></i>Mile 17,
              Buea, Cameroon
            </small>
            <small class="ms-4">
              <i class="fa fa-clock text-primary me-2"></i>9.00 am - 9.00 pm
            </small>
          </div>
          <div class="col-lg-6 px-5 text-end">
            <small>
              <i class="fa fa-envelope text-primary me-2"></i>
              info@dreamz.business
            </small>
            <small class="ms-4">
              <i class="fa fa-phone-alt text-primary me-2"></i>+237 671 559 157
            </small>
          </div>
        </div>

        <nav
          class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
            <h1 class="display-5 text-primary m-0">Dreamz</h1>
          </a>
          <button
            type="button"
            class="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
              <a href="index.html" class="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" class="nav-item nav-link">
                About
              </a>
              <a href="service.html" class="nav-item nav-link">
                Services
              </a>

              <a href="contact.html" class="nav-item nav-link">
                Contact
              </a>
            </div>
            <div class="d-none d-lg-flex ms-2">
              <a
                class="btn btn-light btn-sm-square rounded-circle ms-3"
                href=""
              >
                <small class="fab fa-facebook-f text-primary"></small>
              </a>
              <a
                class="btn btn-light btn-sm-square rounded-circle ms-3"
                href=""
              >
                <small class="fab fa-twitter text-primary"></small>
              </a>
              <a
                class="btn btn-light btn-sm-square rounded-circle ms-3"
                href=""
              >
                <small class="fab fa-linkedin-in text-primary"></small>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
