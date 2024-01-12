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
export const NavNames = styled.h1`
  color: #fff;
  margin: ${(props) => (props.$conh1 ? "100px 0 170px" : "0px")};
  font-size: ${(props) => (props.$conh1 ? "80px" : "25px")};
`;
export const Navbar = styled.div`
  background-color: ${(props) => (props.$contact ? "#14274A" : "none")};
  width: 100%;
  padding-left: ${(props) => (props.$contact ? "240px" : "0")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: ${(props) => (props.$contact ? "300px" : "150px")};
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
  text-align: ${(props) =>
    props.$test || props.$location ? "left" : "center"};
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

  line-height: ${(props) => (props.$location ? "40px" : "normal")};
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
  font-size: ${(props) => (props.$homep ? "36px" : "25px")};
  font-style: normal;
  font-weight: 400;
  margin-top: ${(props) => (props.$homep ? "83px" : "0px")};
  line-height: normal;
  margin-bottom: ${(props) => (props.$homep ? "93px" : "10px")};
`;
export const Imgwrap = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 0 600px; */
  margin-left: ${(props) => (props.lastdiv ? "0" : "200px")};
  margin-right: ${(props) => (props.lastdiv ? "0px" : "200px")};
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
export const HomeMainWrap = styled.div`
  display: flex;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: ${(props) => (props.$lastwrap ? "100px" : "0px")};
  /* min-width: 1700px; */
  /* margin: 0 auto; */
  /* border: 1px solid black; */
  padding: 50px 300px 50px;
`;
export const Wrap1 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: ${(props) => (props.$contact ? "260px 20vh 167px" : "0px")};
  justify-content: center;
  padding-left: ${(props) => (props.$wrap2 ? "50px" : "0px")};
  border-left: ${(props) => (props.$wrap2 ? "2px solid #14274a" : "none")};
`;
export const Homebtn = styled.button`
  width: 236px;
  height: 63px;
  background-color: #e0b973;
  border-radius: 10px;
  border: none;
  font-size: 25px;
  color: #fff;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 10vw;
  border-radius: 0px 0px 15px 15px;
  border: 2px solid #14274a;
`;

export const RoomName = styled.h1`
  color: #fff;
  background-color: #14274a;
  font-family: Montserrat;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  height: 141px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Smallwrapper = styled.div`
  display: flex;
  /* border: 1px solid olive; */
  align-items: center;
  justify-content: space-around;
  padding: ${(props) => (props.$outer ? "80px 0px" : "0px")};
`;
export const Loch1 = styled.h1`
  color: #14274a;
  margin-bottom: 10px;
  margin-top: 20px;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: ${(props) => (props.$map ? "700" : "400")};
  line-height: normal;
`;
export const Finaldiv = styled.div`
  margin: 0px 20vh;
  display: flex;
  justify-content: space-between;
`;
export const Lastinput = styled.input`
  width: 570px;
  height: ${(props) => (props.$message ? "352px" : "78px")};
`;
