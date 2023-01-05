import React from "react";

export default function About() {
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-4 align-items-end mb-4">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <img class="img-fluid rounded" src="img/about.jpg" />
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <p class="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
                About Us
              </p>
              <h1 class="display-5 mb-4">
                We Help Our Clients To Grow Their Business
              </h1>
              <p class="mb-4">
                We are a travel and logistics company providing affordable,
                exceptional quality and time saving solutions across the globe
                in the area of air Ticket bookings, hotel reservations and visa
                acquisition to so many countries. sending/ receiving parcels
                across continents and the world at large and the purchase of
                quality goods at cheaper prices and have them delivered at your
                door step at your convenience.
              </p>
              {/* <div class="border rounded p-4"> */}
              {/* <nav>
                  <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                    <button
                      class="nav-link fw-semi-bold active"
                      id="nav-story-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-story"
                      type="button"
                      role="tab"
                      aria-controls="nav-story"
                      aria-selected="true"
                    >
                      Story
                    </button>
                    <button
                      class="nav-link fw-semi-bold"
                      id="nav-mission-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-mission"
                      type="button"
                      role="tab"
                      aria-controls="nav-mission"
                      aria-selected="false"
                    >
                      Mission
                    </button>
                    <button
                      class="nav-link fw-semi-bold"
                      id="nav-vision-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-vision"
                      type="button"
                      role="tab"
                      aria-controls="nav-vision"
                      aria-selected="false"
                    >
                      Vision
                    </button>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="nav-story"
                    role="tabpanel"
                    aria-labelledby="nav-story-tab"
                  >
                    <p>
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                      tempor sit. Aliqu diam amet diam et eos labore.
                    </p>
                    <p class="mb-0">
                      Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam
                      et eos labore. Clita erat ipsum et lorem et sit
                    </p>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-mission"
                    role="tabpanel"
                    aria-labelledby="nav-mission-tab"
                  >
                    <p>
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                      tempor sit. Aliqu diam amet diam et eos labore.
                    </p>
                    <p class="mb-0">
                      Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam
                      et eos labore. Clita erat ipsum et lorem et sit
                    </p>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="nav-vision"
                    role="tabpanel"
                    aria-labelledby="nav-vision-tab"
                  >
                    <p>
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                      tempor sit. Aliqu diam amet diam et eos labore.
                    </p>
                    <p class="mb-0">
                      Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam
                      et eos labore. Clita erat ipsum et lorem et sit
                    </p>
                  </div>
                </div> */}
              {/* </div> */}
            </div>
          </div>
          <div class="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
            <div class="row g-4">
              <div class="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                <div class="h-100">
                  <div class="d-flex">
                    <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i class="fa fa-times text-white"></i>
                    </div>
                    <div class="ps-3">
                      <h4>Travel</h4>
                      <span>
                        Dare to live the life you always wanted Get the best out
                        of your travel experience with us
                      </span>
                    </div>
                    <div class="border-end d-none d-lg-block"></div>
                  </div>
                  <div class="border-bottom mt-4 d-block d-lg-none"></div>
                </div>
              </div>
              <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                <div class="h-100">
                  <div class="d-flex">
                    <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i class="fa fa-users text-white"></i>
                    </div>
                    <div class="ps-3">
                      <h4>Logistics</h4>
                      <span>
                        Buy local and international products and get them
                        delivered to your doorstep
                      </span>
                    </div>
                    <div class="border-end d-none d-lg-block"></div>
                  </div>
                  <div class="border-bottom mt-4 d-block d-lg-none"></div>
                </div>
              </div>
              <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                <div class="h-100">
                  <div class="d-flex">
                    <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i class="fa fa-phone text-white"></i>
                    </div>
                    <div class="ps-3">
                      <h4>Business</h4>
                      <span>
                        Dare to live the life you always wanted Get the best out
                        of your travel experience with us
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
