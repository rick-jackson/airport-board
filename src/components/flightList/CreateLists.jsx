import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

const CreateList = ({ flightData }) => {
  return (
    <tr className="lists__line first-line">
      <td className=" lists__item">
        <span
          className={
            (flightData.term === "A" &&
              "lists__item-terminal lists__item-terminal_green") ||
            "lists__item-terminal lists__item-terminal_blue"
          }
        >
          {flightData.term}
        </span>
      </td>
      <td className=" lists__item">
        {moment(flightData.timeDepFact || flightData.timeTakeofFact).format(
          "h:mm"
        )}
      </td>
      <td className=" lists__item">
        {flightData["airportToID.city_en"] ||
          flightData[["airportFromID.city_en"]]}
      </td>
      <td className=" lists__item">
        {flightData.status} {moment(flightData.timeToStand).format("h:mm")}
      </td>
      <td className=" lists__item">
        <div className="lists__airline">
          <img
            className="lists__item-logo"
            src={flightData.airline.en.logoName}
            alt=""
          />
          <span className="lists__item-name">{flightData.airline.en.name}</span>
        </div>
      </td>
      <td className=" lists__item">{flightData.codeShareData[0].codeShare}</td>
    </tr>
  );
};

export default CreateList;


CreateList.propTypes = {
  flightData: PropTypes.object.isRequired,
};
