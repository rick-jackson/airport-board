import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./searchForm.scss";

const SearchForm = ({ getSearchText, searchText, isHomePage }) => {
  const [searchInfo, setSearchText] = useState(searchText);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const searchingText = (e) => {
    e.preventDefault();
    getSearchText(searchInfo);
  };

  return (
    <div className="search__line-container line-container">
      <img
        className="line-container__search-img"
        src="../../common/img/search.png"
        alt="search-logo"
      />
      <form className="line-container__form" action="">
        <input
          className="line-container__search"
          type="text"
          placeholder="Airline, destination or flight#"
          onChange={handleChange}
          value={searchInfo}
        />
        {isHomePage && (
          <button
            className="line-container__search-button"
            onClick={searchingText}
            type={"submit"}
          >
            <Link
              to={"/departures"}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              SEARCH
            </Link>
          </button>
        )}
        {!isHomePage && (
          <Link to="/departures">
            <button
              className="line-container__search-button"
              onClick={searchingText}
              type={"submit"}
            >
              SEARCH
            </button>
          </Link>
        )}
      </form>
    </div>
  );
};

export default SearchForm;


SearchForm.propTypes = {
  getSearchText: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  isHomePage: PropTypes.bool,
};