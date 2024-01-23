import React from "react";
import {
  Navbar,
  Locations,
  NavNames,
  Homebtn,
  Fach1,
  Wrap1,
  Loch1,
  Finaldiv,
  Lastinput,
} from "../main/styled";

// import wrap1 from "../assets/wrap1.png";
// import wrap2 from "../assets/wrap2.png";

import { Link } from "react-router-dom";
import Footer from "../footer/footer";
function Contact() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#14274A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar $contact={true}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="256"
            height="149"
            viewBox="0 0 256 149"
            fill="#E0B973"
          >
            <path
              d="M0 0H256V99C256 112.261 250.732 124.979 241.355 134.355C231.979 143.732 219.261 149 206 149H50C36.7392 149 24.0215 143.732 14.6447 134.355C5.26784 124.979 0 112.261 0 99L0 0Z"
              fill="#E0B973"
            />
            <text
              x="50%"
              y="40%"
              dominant-baseline="middle"
              text-anchor="middle"
              fill="black"
              font-size="40"
              font-weight="700"
              font-family="Adobe Garamond Pro"
            >
              LUXORY
            </text>
            <text
              x="50%"
              y="60%"
              dominant-baseline="middle"
              text-anchor="middle"
              fill="black"
              font-size="15"
              font-weight="700"
              font-family="Adobe Garamond Pro"
            >
              HOTELS
            </text>
          </svg>
          <Locations>
            <Link to="/">
              <NavNames>Home</NavNames>
            </Link>
            <Link to="/Facilities">
              <NavNames>Facilities</NavNames>
            </Link>
            <Link to="/Rooms">
              <NavNames>Rooms</NavNames>
            </Link>
            <Link to="/Contact-us">
              <NavNames>Contact-us</NavNames>
            </Link>
          </Locations>
        </Navbar>
        <NavNames $conh1={true}>CONTACT-US</NavNames>
      </div>

      <Wrap1 $contact={true}>
        <Fach1 $test>WE ARE HERE FOR YOU</Fach1>
        <Fach1 $location>
          At Luxury Hotels, we take our customers seriously. Do you have any
          enquiries, compaints or requests,
          <br /> please forward it to our support desk and we will get back to
          you as soon as possible.
        </Fach1>
      </Wrap1>
      <Finaldiv>
        <div>
          <Loch1>497 Evergreen Rd. Roseville, CA 95673</Loch1>
          <Loch1 $map={true}>View map</Loch1>
          <Loch1>
            Phone: +44 345 678 903
            <br />
            Email: luxury_hotels@gmail.com
          </Loch1>
        </div>
        <div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "25px",
              marginTop: "20px",
            }}
          >
            <label htmlFor="Name">Name</label>
            <Lastinput />
          </form>
          {/* ******************************* */}
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "25px",
              marginTop: "20px",
            }}
          >
            <label htmlFor="Name">Email Address</label>
            <Lastinput />
          </form>
          {/* *************************************** */}
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "25px",
              marginTop: "20px",
              marginBottom: "76px",
            }}
          >
            <label htmlFor="Name">Message</label>
            <Lastinput $message={true} />
          </form>
          <Homebtn>Submit</Homebtn>
        </div>
      </Finaldiv>
      <Footer />
    </div>
  );
}
export default Contact;
