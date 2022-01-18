import "../App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { getRides } from "../redux/actionRides";
import { REQUESTED_SUCCEEDED_CLOSE_RIDES } from "../redux/types";

function Ride() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  useEffect(() => {
    dispatch(getRides());

    setTimeout(() => {
      dispatch({ type: REQUESTED_SUCCEEDED_CLOSE_RIDES });
    }, 1000);
  }, []);

  // var secs = 1642108380;
  // var timer = setInterval(tick,1000)
  // function tick(){
  //   console.log('Осталось '+(--secs)+' секунд');
  // }


  useEffect(() => {
    if (store.rides.showRides !== [{}]) {
      store.rides.showRides.forEach(function (item) {
        var date = new Date(item.raceDate);
        var weekDay = new Array(7);
        weekDay[0] = "Sunday";
        weekDay[1] = "Monday";
        weekDay[2] = "Tuesday";
        weekDay[3] = "Wednesday";
        weekDay[4] = "Thursday";
        weekDay[5] = "Friday";
        weekDay[6] = "Saturday";
        var result = weekDay[date.getDay()];
        var pair = { day: result };
        Object.assign(item, pair);
      });
    }
  }, [store.rides.showRides]);

  return (
    <div class="table-responsive">
    <div className="table-race">

      {store.rides.showRides.map((item, key) => (
        <Table  bordered hover class="table">
          <thead>
            <caption>{item.name}</caption>
            <tr >
              {item.races &&
                item.races.map((race, key) => <th scope="col">{race.raceNumber}</th>)}
            </tr>
          </thead>
          <tbody>
            <tr>
              {item.races &&
                item.races.map((race, key) => (
                  <>
                  {/* <th scope="row">1</th> */}
                    {race.status === "open" ? (
                      <td >{race.startTime}</td>
                    ) : (
                      <td >{race.results}</td>
                    )}
                  </>
                ))}
            </tr>
          </tbody>
        </Table>
      ))}
    </div>
    </div>
  );
}

export default Ride;
