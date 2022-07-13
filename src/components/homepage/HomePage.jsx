import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import Search from "../search/Search";
import moment from "moment";
const HomePage = ({getSearchText, getSearchDate , searchText}) => {
   searchText =''
  useEffect(() => {
    getSearchText("");
    getSearchDate(moment(new Date()).format('DD-MM-Y'));
  },[]);

  return <Search searchText={searchText} getSearchText={getSearchText}  isHomePage={true} />;
};

export default HomePage;


HomePage.propTypes = {
  getSearchText: PropTypes.func.isRequired,
  getSearchDate: PropTypes.func.isRequired,
};
