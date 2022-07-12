import React from "react";
import PropTypes from "prop-types";
import CreateList from "./CreateLists";
import "./flightList.scss";

const FlightLists = ({ lists, searchText }) => {
  return (
    <>
    <table className="flight-list__lists lists">
      <thead>
        <tr className="lists__line first-line">
          <td className=" lists__item">Terminal</td>
          <td className=" lists__item">Local time</td>
          <td className=" lists__item">Destination</td>
          <td className=" lists__item">Status</td>
          <td className=" lists__item">Airline</td>
          <td className=" lists__item">Flight</td>
        </tr>
      </thead>
      <tbody>
        {(searchText.length === 0 &&
          lists
            .map((flightData) => {
            return <CreateList  key={flightData.ID} flightData={flightData} />;
          })) ||
          lists
            .filter((flightData) =>{
               return  flightData["airportToID.city_en"] === searchText ||
                flightData[["airportFromID.city_en"]] === searchText ||
                flightData.codeShareData[0].codeShare === searchText}
            )
            .map((flightData) => {
              return <CreateList  key={flightData.ID} flightData={flightData} />;
            })}
      </tbody>
    </table>
    </>
  );
};

export default FlightLists;


FlightLists.propTypes = {
  flightData: PropTypes.object,
  lists: PropTypes.array.isRequired,
  searchText : PropTypes.string.isRequired,
};
