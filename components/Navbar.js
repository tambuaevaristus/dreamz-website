import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div
      class="container-fluid fixed-top px-0  wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div class="top-bar row gx-0 align-items-center d-none d-lg-flex">
        <div class="col-lg-6 px-5 text-start">
          <small>
            <i class="fa fa-map-marker-alt text-primary me-2"></i>Mile 17, Buea,
            Cameroon
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
        class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn pt- pt-lg-0"
        data-wow-delay="0.1s"
      >
        <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
          <Image
            src="/img/dlogo.png"
            className="img-fluid"
            width={65}
            height={65}
          />
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
            <Link legacyBehavior href="/">
              <a class="nav-item nav-link">Home</a>
            </Link>
            <Link legacyBehavior href="/about">
              <a class="nav-item nav-link">About</a>
            </Link>
            <Link legacyBehavior href="/services">
              <a class="nav-item nav-link">Services</a>
            </Link>

            <Link legacyBehavior href="/contact">
              <a class="nav-item nav-link">Contact</a>
            </Link>
          </div>
          <div class="d-none d-lg-flex ms-2">
            <a
              class="btn btn-light btn-sm-square rounded-circle ms-3"
              href="https://www.facebook.com/dreamz.limited4"
            >
              <small class="fab fa-facebook-f text-primary"></small>
            </a>
            <a
              class="btn btn-light btn-sm-square rounded-circle ms-3"
              href="https://twitter.com/DreamzNation2"
            >
              <small class="fab fa-twitter text-primary"></small>
            </a>
            <a
              class="btn btn-light btn-sm-square rounded-circle ms-3"
              href="https://www.instagram.com/dreamznation/"
            >
              <small class="fab fa-instagram text-primary"></small>
            </a>
            <a
              class="btn btn-light btn-sm-square rounded-circle ms-3"
              href="https://www.linkedin.com/in/dreamz-limited-176011254/"
            >
              <small class="fab fa-linkedin-in text-primary"></small>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
