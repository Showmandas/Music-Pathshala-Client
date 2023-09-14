/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import Error from "../assets/404.json";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="d-flex align-items-center p-5 mt-5">
      <div className="container d-flex flex-column align-items-center justify-content-center px-5 mx-auto my-8">
        <div className="text-center">
        </div>
        <div className="w-50">
        <Lottie animationData={Error} loop={true} />
        </div>
        <Link to="/" className="btn bg-secondary-subtle fw-bold" id="homeBack">
          Back to homepage
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
