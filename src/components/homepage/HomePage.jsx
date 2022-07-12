import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import Search from "../search/Search";
const HomePage = ({getSearchText, getSearchDate }) => {
  useEffect(() => {
    getSearchText("");
    getSearchDate('01-01-2022');
  },[]);
  return <Search getSearchText={getSearchText}  isHomePage={true}/>;
};

export default HomePage;


HomePage.propTypes = {
  getSearchText: PropTypes.func.isRequired,
  getSearchDate: PropTypes.func.isRequired,
};
