import React from "react";
import PropTypes from "prop-types";
import SearchFlight from "../searchFlight/SearchFlight";
import "../searchFlight/searchFlight.scss";
import { useLocation } from "react-router-dom";

const Departure = ({
  styleBtnDisabled,
  styleBtnActive,
  flightData,
  getSearchText,
  searchText,
  searchDate,
}) => {
  const url = useLocation().pathname;

  return (
    <section className="search-flight">
      <SearchFlight
        lists={flightData.departure}
        styleBtnDeparture={styleBtnActive}
        styleBtnArrival={styleBtnDisabled}
        btnStatus={true}
        url={url}
        getSearchText={getSearchText}
        searchText={searchText}
        searchDate={searchDate}
      />
    </section>
  );
};

export default Departure;

Departure.propTypes = {
  styleBtnDisabled: PropTypes.object.isRequired,
  styleBtnActive: PropTypes.object.isRequired,
  flightData: PropTypes.object.isRequired,
  getSearchText: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  searchDate: PropTypes.string.isRequired,
};
