import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
// import GuardedRoute from "./guardedRoute";
// import { useSelector } from 'react-redux'

import Rides from "./components/rides";
import App from "./App";

export default function RouteApp() {
  // const store = useSelector((state) => state);

  return (
    <BrowserRouter>
         <App />
      <Routes>
   
        <Route path="/rides" element={<Rides/>} />
        {/* <Route path="/" component={Home} /> */}
      </Routes>
    </BrowserRouter>
  );
}
