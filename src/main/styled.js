import styled from "styled-components";
import backrasm from "../assets/homeback.png";
import rooms from "../assets/rooms.png";

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
    } else if (props.$tertiary) {
      return 'url("path-to-tertiary-image.jpg")';
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
