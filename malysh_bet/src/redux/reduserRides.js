import { SHOW_LOADER, HIDE_LOADER, SHOW_RIDES } from "./types";

const initialState = {
  showRides: [{}],
};

export const reducerRides = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_RIDES:
      return { ...state, showRides: action.payload  };


      
    // case REQUESTED_AVIA_TICKET:
    //   return { ...state, success: true };
    // case REQUESTED_SUCCEEDED_AVIA_TICKET:
    //   return { ...state, success: true };
    // case REQUESTED_SUCCEEDED_CLOSE_AVIA_TICKET:
    //   return { ...state, success: false };
    // case REQUESTED_FAILED_AVIA_TICKET:
    //   return { ...state, err: true };

    default:
      return state;
  }
};
