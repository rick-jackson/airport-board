const baseUrl = `https://api.iev.aero/api/flights`;
export const FLIGHT_DATA_RECIEVED = "FLIGHT_DATA_RECIEVED";
export const SHOW_SPINNER = "SHOW_SPINNER";

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const FlightDataRecieved = (flightData) => {
  return {
    type: FLIGHT_DATA_RECIEVED,
    payload: {
      flightData,
    },
  };
};

export const fetchFlightData = (date) => {
  return fetch(`${baseUrl}/${date}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return [];
  });
};

export const getFlightData = (date) => {
  return function (dispatch) {
    fetchFlightData(date).then((flightData) => {
      dispatch(FlightDataRecieved(flightData));
    });
  };
};
