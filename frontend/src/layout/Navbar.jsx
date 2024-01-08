import React from "react";
import { Link } from "react-router-dom";
import img from "../../src/assets/images/logo.png"

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={img} className="image-logo" alt="logo"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="btn btn-light" to="/addstudent">
            Ajouter un étudiant
          </Link>
        </div>
      </nav>
    </div>
  );
}