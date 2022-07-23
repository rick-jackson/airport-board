import React, { useEffect, useState } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import "./toggleDate.scss";

const ToggleDate = ({ setSearchDate, searchDate }) => {
  const [date, setDate] = useState(searchDate);
  const [linePx, setLinePs] = useState({  display: "none"  });

  const handleChange = (e) => {
    setDate(moment(new Date(e.target.value)).format("DD-MM-Y"));
  };

  const setNewDate = (date) => {
    setDate(date);
  };

  useEffect(() => {
    setSearchDate(date);
    if (date === moment(new Date()).format("DD-MM-Y")) {
      setLinePs({ left: "33.33%" });
    } else if (
      date === moment(new Date()).subtract(1, "day").format("DD-MM-Y")
    ) {
      setLinePs({ left: "0%" });
    } else if (date === moment(new Date()).add(1, "day").format("DD-MM-Y")) {
      setLinePs({ left: "66.7%" });
    } else {
      setLinePs({ display: "none" });
    }
  }, [date]);

  return (
    <div className="date-container">
      <div className="date-container__toggle-date">
        <span className="date-container__selected-date">{`${searchDate.split('-')[0]}/${searchDate.split('-')[1]}`}</span>
        <input
          className="date-container__input"
          type={"date"}
          onChange={handleChange}
        ></input>
      </div>

      <div className="day-wrapper">
        <div className="day-container">
          <div
            className="day-wrapper__container"
            onClick={() =>
              setNewDate(
                moment(new Date()).subtract(1, "day").format("DD-MM-Y")
              )
            }
          >
            <div className="day-wrapper__date">
              {moment(new Date()).subtract(1, "day").format("DD/MM")}
            </div>
            <div className="day-wrapper__day-name">YESTERDAY</div>
          </div>
          <div
            className="day-wrapper__container"
            onClick={() => setNewDate(moment(new Date()).format("DD-MM-Y"))}
          >
            <div className="day-wrapper__date">
              {moment(new Date()).format("DD/MM")}
            </div>
            <div className="day-wrapper__day-name">TODAY</div>
          </div>
          <div
            className="day-wrapper__container"
            onClick={() =>
              setNewDate(moment(new Date()).add(1, "day").format("DD-MM-Y"))
            }
          >
            <div className="day-wrapper__date">
              {moment(new Date()).add(1, "day").format("DD/MM")}
            </div>
            <div className="day-wrapper__day-name">TOMORROW</div>
          </div>
        </div>
        <div className="day-container__line" style={linePx}></div>
      </div>
    </div>
  );
};

export default ToggleDate;

ToggleDate.propTypes = {
  setSearchDate: PropTypes.func.isRequired,
  searchDate: PropTypes.string.isRequired,
};
