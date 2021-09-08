import React, { Fragment } from "react";
import spinner from "./spinner.gif";

export default () => (
  <div className="container">
    <img
      src={spinner}
      alt="loading ..."
      style={{
        width: "200px",
        margin: "auto",
        display: "block",
      }}
    />
  </div>
);
