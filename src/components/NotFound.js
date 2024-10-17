import Hero from "./Hero";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
     <>
      <Hero text="404 - Page Not Found" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5 text-center">
            <p className="lead">
                The page you are looking for does not exist.
            </p>
            <Link to="/" className="btn btn-primary">Go Back Home</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
