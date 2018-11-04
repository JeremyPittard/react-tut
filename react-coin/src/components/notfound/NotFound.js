import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div classname="Notfound">
      <h1 className="NotFound-title">Took A Wrong Turn There Champ</h1>
      <Link to="/" className="NotFound-link">
        Go Home!
      </Link>
    </div>
  );
};

export default NotFound;
