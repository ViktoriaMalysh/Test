import axios from "axios";
import { HIDE_ALERT, REQUESTED_FAILED_RIDES, REQUESTED_RIDES, REQUESTED_SUCCEEDED_CLOSE_RIDES, REQUESTED_SUCCEEDED_RIDES, SHOW_ALERT, SHOW_RIDES } from "./types";


const request = () => {
  return { type: REQUESTED_RIDES };
};

const requestSuccess = () => {
  return (dispatch) => {
    dispatch({ type: REQUESTED_SUCCEEDED_RIDES });
  };
}; 

const requestError = (err, message) => {
  return (dispatch) => {
    console.log("Error:", err);
    dispatch({ type: REQUESTED_FAILED_RIDES });
    dispatch(alert(message));
  };
};

export const alert = (message) => {
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: message });
    setTimeout(() => {
      dispatch({ type: HIDE_ALERT });
    }, 1200);
  };
};


export const getRides = () => {
  return (dispatch) => {
    dispatch(request());
    // dispatch({ type: FIND, payload: false })
    axios
      .get(`http://demo9693802.mockable.io/api/meetings`, {
      })
    .then((res) => {
      console.log('res', res.data)
      dispatch({ type: SHOW_RIDES, payload: res.data })
    })
      .then(
        (data) => dispatch(requestSuccess()),
        // dispatch({ type: SHOW_LOADER }),
        // setTimeout(() => {
        //   dispatch({ type: HIDE_LOADER });
        // }, 300),
        dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_RIDES }),
        (err) => dispatch(requestError(err, 'Project not found'))
      );
  };
};