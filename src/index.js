import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main/main";
import Rooms from "./rooms/rooms";
import Facilities from "./facilities/facilities";
import Contact from "./contact/contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <h1>here is navbar</h1> */}
      {/* <Main /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Rooms" element={<Rooms />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/Contact-us" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
