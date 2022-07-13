import { FLIGHT_DATA_RECIEVED, SHOW_SPINNER } from "../actions/flight.actions";

const initialState = {
  flightData: {
    departure: [],
    arrival: [],
  },
  isFetching: true,
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHT_DATA_RECIEVED: {
      state = {
        ...state,
        flightData: action.payload.flightData.body,
        isFetching: false,
      };
      return state;
    }

    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default flightReducer;
