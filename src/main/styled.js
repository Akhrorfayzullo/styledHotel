import styled from "styled-components";
import backrasm from "../assets/homeback.png";
import rooms from "../assets/rooms.png";
import faci from "../assets/facilities.png";

export const Maincon = styled.div`
  text-align: center;
  /* width: 1920px; */
  height: 1080px;
  flex-shrink: 0;
  /* border: 10px solid red; */
  background-image: ${(props) => {
    if (props.$home) {
      return `url(${backrasm})`;
    } else if (props.$rooms) {
      return `url(${rooms})`;
    } else if (props.$facilities) {
      return `url(${faci})`;
    } else {
      return 'url("path-to-default-image.jpg")'; // Default background image
    }
  }};
  //   background-color: #e0b973;
  background-repeat: no-repeat;
  /* background-size: cover; */
  background-size: 100% 100%;
  padding-left: 240px;
  padding-right: 150px;
`;

export const Navbar = styled.div`
  //   border: 10px solid orange;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //   padding-left: 240px;
  padding-right: 150px;

  /* margin: 0 50px; */
`;
export const Locations = styled.div`
  display: flex;
  gap: 90px;
`;
export const Matn = styled.div`
  color: #fff;
  /* border: 10px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  //   position: relative;
  //   top: 342px;
  margin-top: 193px;
`;
export const Bookbtn = styled.button`
  margin-top: 108px;
  //   position: relative;
  //   top: 380px;
  width: 268px;
  height: 78px;
  flex-shrink: 0;
  background-color: #e0b973;
  color: #fff;
  font-size: 25px;
  border: none;
  border-radius: 5px;
`;
export const Scrollh1 = styled.h1`
  margin-top: 80px;
  color: #fff;
`;
export const Wellh1 = styled.h1`
  color: #fff;
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Luxh1 = styled.h1`
  color: #fff;
  font-family: Adobe Garamond Pro;
  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 10.78px;
`;
export const Hoth1 = styled.h1`
  color: #fff;
  font-family: Adobe Garamond Pro;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 24px;
`;
export const Bookh1 = styled.h1`
  color: #fff;
  font-family: Montserrat;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.5px;
`;
export const MainWrapper = styled.div`
  margin: 0 80px;
`;
export const Facdiv = styled.div`
  margin-top: 82px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 82px;
`;
export const Fach1 = styled.h1`
  color: #14274a;
  text-align: center;
  font-family: Adobe Garamond Pro;
  font-size: ${(props) => {
    if (props.$fach1) {
      return `60px`;
    } else if (props.$gymh1) {
      return `48px`;
    } else if (props.$test) {
      return `60px`;
    } else if (props.$location) {
      return `25px`;
    } else if (props.$moto) {
      return `30px`;
    } else {
      return "60px"; // Default background size
    }
  }};
  font-style: normal;
  font-weight: ${(props) => (props.$location ? "400" : "700")};

  line-height: normal;
  letter-spacing: 3px;
  margin-bottom: ${(props) => {
    if (props.$fach1) {
      return `20px`;
    } else if (props.$test) {
      return `26px`;
    } else if (props.$gymh1) {
      return `0px`;
    } else if (props.$location) {
      return "25px";
    } else {
      return "0px"; // Default background size
    }
  }};
`;
export const Facp = styled.p`
  color: #14274a;
  text-align: center;
  font-family: Montserrat;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
`;
export const Imgwrap = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 0 600px; */
  margin-left: ${(props) => (props.lastdiv ? "0" : "200px")};
  margin-right: 200px;
  margin-bottom: 186px;
`;
export const Gymdiv = styled.div`
  width: 684px;
  height: 75px;
  flex-shrink: 0;
  margin-top: -75px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Footerwrap = styled.div`
  background-color: #14274a;
  height: 320px;
  /* margin-left: 240px; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 120px;
`;
export const Footerh1 = styled.h1`
  margin-bottom: ${(props) => (props.$lux ? "22px" : "0px")};
  color: #fff;
`;
export const Footerp = styled.p`
  color: #fff;
`;
export const Socialdiv = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* justify-content: flex-start; */
  align-items: center;
  gap: 20px;
`;
export const Input = styled.input`
  width: 278px;
  height: 50px;
`;
