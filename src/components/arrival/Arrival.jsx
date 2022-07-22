import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import SearchFlight from "../searchFlight/SearchFlight";
import "../searchFlight/searchFlight.scss";

const Arrival = ({
  styleBtnDisabled,
  styleBtnActive,
  flightData,
  getSearchText,
  searchText,
  searchDate,
  setSearchDate,
}) => {
  const url = useLocation().pathname;

  return (
    <section className="search-flight">
      <SearchFlight
        styleBtnDeparture={styleBtnDisabled}
        styleBtnArrival={styleBtnActive}
        lists={flightData.arrival}
        getSearchText={getSearchText}
        searchText={searchText}
        searchDate={searchDate}
        url={url}
        setSearchDate={setSearchDate}
      />
    </section>
  );
};

export default Arrival;

Arrival.propTypes = {
  styleBtnDisabled: PropTypes.object.isRequired,
  styleBtnActive: PropTypes.object.isRequired,
  flightData: PropTypes.object.isRequired,
  getSearchText: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  searchDate: PropTypes.string.isRequired,
};
