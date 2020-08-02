/*
 * 11551144832 Cheng Mo
 * 1155116199  Yousif Alebyary
 * 1155086631  Anju Otsuka
 * 1155098386  Dineth Perera
 */
import React from "react";
import ReactDOM from "react-dom";
import UserProvider from "./state/UserProvider";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import LocationProvider from "./state/LocationProvider";

ReactDOM.render(
  <UserProvider>
    <LocationProvider>
      <App />
    </LocationProvider>
  </UserProvider>,
  document.querySelector("#root")
);
