import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import QueryString from "qs";
import Header from "../header/header";
import HomePage from "../homepage/HomePage";
import Departure from "../departure/Departure";
import Arrival from "../arrival/Arrival";
import PageNotFound from "../pageNotFound/PageNotFound";
import { getFlightData } from "../../actions/flight.actions";
import { flightSelector } from "../../selectors/flight.selectors";

const Main = ({ getFlightList, flightData }) => {
  const { search } = useLocation();
  const newSearchDate = !QueryString.parse(search).date
    ? "01-01-2022"
    : QueryString.parse(search).date;

  const searchInfo = QueryString.parse(search).search || "";

  const getSearchDate = (date) => {
    setSearchDate(date);
  };

  const getSearchText = (text) => {
    setSearchText(text);
  };

  const [searchDate, setSearchDate] = useState(newSearchDate);
  const [searchText, setSearchText] = useState(searchInfo);

  useEffect(() => {
    getFlightList(newSearchDate);
  });

  const styleBtnActive = {
    background: "#fff",
    color: "#43bfec",
    fill: "#43bfec",
    zIndex: 1,
  };
  const styleBtnDisabled = {
    background: "#43bfec",
    color: "#fff",
    fill: "#fff",
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage
              getSearchText={getSearchText}
              getSearchDate={getSearchDate}
              searchText={searchText}
            />
          }
        />

        <Route
          path={"/departures"}
          element={
            <Departure
              styleBtnActive={styleBtnActive}
              styleBtnDisabled={styleBtnDisabled}
              getSearchText={getSearchText}
              searchText={searchText}
              newSearchDate={newSearchDate}
              searchDate={searchDate}
              flightData={flightData}
            />
          }
        />

        <Route
          path={"/arrivales"}
          element={
            <Arrival
              styleBtnActive={styleBtnActive}
              styleBtnDisabled={styleBtnDisabled}
              getSearchText={getSearchText}
              searchText={searchText}
              newSearchDate={newSearchDate}
              searchDate={searchDate}
              flightData={flightData}
            />
          }
        />

        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </>
  );
};

const mapDispatch = {
  getFlightList: getFlightData,
};

const mapState = (state) => {
  return {
    flightData: flightSelector(state),
  };
};
const connector = connect(mapState, mapDispatch);

export default connector(Main);






Main.propTypes = {
  getFlightList: PropTypes.func.isRequired,
  flightData: PropTypes.object.isRequired,
};
