import React from "react";
import gymimg from "../assets/humphrey-muleba-LOA2mTj1vhc-unsplash 1.png";
import inter from "../assets/inter.png";
import spa from "../assets/spa.png";
import swimming from "../assets/swimming.png";
import rest from "../assets/rest.png";
import laund from "../assets/laund.png";
import {
  Locations,
  Maincon,
  Navbar,
  Matn,
  Bookbtn,
  Scrollh1,
  Wellh1,
  Luxh1,
  Hoth1,
  Bookh1,
  MainWrapper,
  Facdiv,
  Fach1,
  Facp,
  Imgwrap,
  Gymdiv,
} from "../main/styled";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";
function Facilities() {
  return (
    <div>
      <Maincon $facilities>
        <Navbar>
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
            <Link to="/home">
              <h1 className="homeh1">Home</h1>
            </Link>
            <Link to="/Facilities">
              <h1 className="homeh1">Facilities</h1>
            </Link>
            <Link to="/Rooms">
              <h1 className="homeh1">Rooms</h1>
            </Link>
            <Link to="/Contact-us">
              <h1 className="homeh1">Contact-us</h1>
            </Link>
          </Locations>
        </Navbar>
        <Matn>
          <Wellh1>WELCOME TO</Wellh1>
          <Luxh1>LUXURY</Luxh1>
          <Hoth1>HOTELS</Hoth1>
          <Bookh1>Book your stay and enjoy Luxury</Bookh1>
          <Bookh1>redefined at the most affordable rates.</Bookh1>
        </Matn>
        <Bookbtn>Book now</Bookbtn>
        <Scrollh1>Scroll</Scrollh1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="61"
          height="61"
          viewBox="0 0 61 61"
          fill="none"
        >
          <path
            d="M30.5 61C23.4649 60.9939 16.6481 58.5566 11.204 54.1008C5.75985 49.6451 2.02294 43.4447 0.626053 36.5497C-0.770833 29.6547 0.258157 22.4888 3.53878 16.2655C6.8194 10.0421 12.15 5.14381 18.628 2.40002C26.056 -0.616 34.3727 -0.58696 41.7795 2.48086C49.1863 5.54868 55.0879 11.4087 58.208 18.7936C61.328 26.1786 61.4158 34.4949 58.4524 41.944C55.4889 49.3932 49.7124 55.3765 42.372 58.6C38.6165 60.1907 34.5785 61.007 30.5 61ZM18.277 20.755L13.26 25.655L30.1 42.1L46.941 25.65L41.924 20.75L30.1 32.3L18.277 20.755Z"
            fill="white"
          />
        </svg>
      </Maincon>
      <MainWrapper>
        <Facdiv>
          <Fach1 $fach1>FACILITIES</Fach1>
          <Facp>
            We want your stay at our lush hotel to be truly unforgettable. That
            is why we give special attention to all of your needs so
          </Facp>
          <Facp>
            that we can ensure an experience quite uniquw. Luxury hotels offers
            the perfect setting with stunning views for leisure{" "}
          </Facp>
          <Facp>
            and our modern luxury resort facilities will help you enjoy the best
            of all
          </Facp>
        </Facdiv>
        <Imgwrap>
          <img className="gmyimg" src={gymimg} alt="no img" />
          <Gymdiv>
            <Fach1 $gymh1>THE GYM</Fach1>
          </Gymdiv>
        </Imgwrap>

        <Imgwrap>
          <img className="gmyimg" src={inter} alt="no img" />
          <Gymdiv>
            <Fach1 $gymh1>POOLSIDE BAR</Fach1>
          </Gymdiv>
        </Imgwrap>

        <Imgwrap>
          <img className="gmyimg" src={spa} alt="no img" />
          <Gymdiv>
            <Fach1 $gymh1>THE SPA</Fach1>
          </Gymdiv>
        </Imgwrap>

        <Imgwrap>
          <img className="gmyimg" src={swimming} alt="no img" />
          <Gymdiv>
            <Fach1 $gymh1>SWIMMING POOL</Fach1>
          </Gymdiv>
        </Imgwrap>

        <Imgwrap>
          <img className="gmyimg" src={rest} alt="no img" />
          <Gymdiv>
            <Fach1 $gymh1>RESTAURANT</Fach1>
          </Gymdiv>
        </Imgwrap>

        <Imgwrap>
          <img className="gmyimg" src={laund} alt="no img" />
          <Gymdiv>
            <Fach1 $gymh1>LAUNDRY</Fach1>
          </Gymdiv>
        </Imgwrap>

        {/* <Imgwrap lastdiv={true}>
          <Fach1 $test>Testimonials</Fach1>
          <Fach1 $moto>
            "Calm, Serene, Retro – What a way to relax and enjoy"
          </Fach1>
          <Fach1 $location={true}> Mr. and Mrs. Baxter, UK</Fach1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="121"
            height="50"
            viewBox="0 0 121 50"
            fill="none"
          >
            <path
              d="M111 0H81C75.4772 0 71 4.47715 71 10V40C71 45.5228 75.4772 50 81 50H111C116.523 50 121 45.5228 121 40V10C121 4.47715 116.523 0 111 0Z"
              fill="#E0B973"
            />
            <path
              d="M102.34 24.6918L92.647 34.3848L89.76 31.4978L96.566 24.6918L89.76 17.8848L92.647 14.9978L102.34 24.6918Z"
              fill="white"
            />
            <path
              d="M10 50L40 50C45.5228 50 50 45.5228 50 40L50 10C50 4.47715 45.5228 0 40 0L10 0C4.47715 0 0 4.47715 0 10L0 40C0 45.5228 4.47715 50 10 50Z"
              fill="#E0B973"
            />
            <path
              d="M18.66 24.693L28.353 15L31.24 17.887L24.434 24.693L31.24 31.5L28.353 34.387L18.66 24.693Z"
              fill="white"
            />
          </svg>
        </Imgwrap> */}
      </MainWrapper>
      <Footer />
    </div>
  );
}
export default Facilities;
