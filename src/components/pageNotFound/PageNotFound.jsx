import React from "react";
import { Link } from "react-router-dom";
import "./pageNotFound.scss";

const PageNotFound = () => {
  return (
    <div className="page-not-found-container">
      <div className="page-not-found">
        <span className="page-not-found__text">
          404 <br />
          PAGE NOT FOUND
        </span>
      </div>
      <Link className="page-not-found__link-home" to={"/"}>
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;
