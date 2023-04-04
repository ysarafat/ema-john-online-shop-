import React from "react";
import "./Error.css";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <div className="container">
      <h1>404</h1>
      <i>{error.statusText || error.message}</i>
    </div>
  );
};

export default Error;
