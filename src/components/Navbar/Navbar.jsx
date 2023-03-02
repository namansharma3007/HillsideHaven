import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Hillside Heaven
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link title="Home" className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link title="Book Room" className="nav-link" to={`/book`}>
                Book Room
              </Link>
            </li>
            <li class="nav-item">
              <Link title="Edit Booking" className="nav-link" to={`/edit`}>
                Edit Booking
              </Link>
            </li>
            <li class="nav-item">
              <Link title="Cancel Booking" className="nav-link" to={`/cancel`}>
                Cancel Booking
              </Link>
            </li>
            <li class="nav-item">
              <Link title="Checkout" className="nav-link" to={`/checkout`}>
                Checkout
              </Link>
            </li>
            <li class="nav-item">
              <Link title="Refund & Payment" className="nav-link" to={`/refund`}>
                Refund & Payment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
