import React from "react";
import "./Pagination.css";
import PropTypes from "prop-types";

const Pagination = props => {
  const { page, totalPages, handlePaginationClick } = props;

  return (
    <div className="Pagination">
      <button
        className="Pagination-button"
        onClick={() => handlePaginationClick("prev")}
        disabled={page < 2}
      >
        &larr;
      </button>
      <span className="Pagination-info">
        {page} of {totalPages}
      </span>
      <button
        className="Pagination-button"
        onClick={() => handlePaginationClick("next")}
        disabled={page >= totalPages}
      >
        &rarr;
      </button>
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handlePaginationClick: PropTypes.func.isRequired
};

export default Pagination;
