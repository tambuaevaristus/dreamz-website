import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function about() {
  return (
    <div>
      <Navbar />
      <div
        class="container-fluid page-header mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container">
          <h1 class="display-3 mb-4 animated slideInDown">About</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <About />

      <Footer />
    </div>
  );
}
