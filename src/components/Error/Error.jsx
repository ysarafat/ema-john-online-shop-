import React from "react";
import "./Error.css";
import { Link, useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <div className="container">
      <h1>
        <i> Page {error.statusText || error.message}</i>
      </h1>

      <Link to="/">
        <button className="back_home">Back to Home</button>
      </Link>
    </div>
  );
};

export default Error;
