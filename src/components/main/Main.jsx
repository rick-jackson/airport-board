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
import { getFlightData } from "../../store/actions/flight.actions";
import { flightSelector } from "../../store/selectors/flight.selectors";
import moment from "moment";

const Main = ({ getFlightList, flightData }) => {
  const { search } = useLocation();
  const newSearchDate = QueryString.parse(search).date || moment(new Date()).format('DD-MM-Y');
  const searchInfo = search.split('&')[0].split('=')[1] || ''

  const getSearchDate = (date) => {
    setSearchDate(date);
  };

  const getSearchText = (text) => {
    setSearchText(text);
  };

  const [searchDate, setSearchDate] = useState(newSearchDate);
  const [searchText, setSearchText] = useState(searchInfo);

  useEffect(() => {
    getFlightList(searchDate);
  }, [searchDate]);

  // useEffect(()=>{

  // },[search])

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
              setSearchDate={getSearchDate}
              searchText={searchText}
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
              setSearchDate={getSearchDate}
              searchText={searchText}
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
