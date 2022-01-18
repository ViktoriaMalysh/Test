import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { Accordion, Table, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab } from "bootstrap";
import Ride from "../rides/ride";

function Rides() {
  const [flag, setFlag] = useState(1);

  return (
    <div className="rides">
      <div className="showRides">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Horse Racing</Accordion.Header>
            <Accordion.Body>
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="home" title="Monday">
                  <Ride />
                </Tab>

              </Tabs>

          
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Rides;
