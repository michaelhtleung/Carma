import styled from "styled-components"
import carma from "../images/carma-logo.png"
import intact from "../images/intact-logo.png"
import dots from "../images/dots.png"

const Container = styled.div`
  flex: 1;
  background: #4D5DDD;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = ({children}) => {
  return (
    <Container>
      <div style={{height: "444px", display: "flex", justifyContent: "center", width: "100%"}}>
      <svg style={{position: "absolute"}} width="375" height="443" viewBox="0 0 375 443" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="187.5" cy="180.5" r="262.5" fill="#5362E0"/>
        <circle cx="187.5" cy="206.5" r="169.5" fill="#5B6AEB"/>
        <circle cx="187.5" cy="206.5" r="109.5" fill="#6573EB"/>
      </svg>
        <img src={dots} alt="scattered dots" style={{position: "absolute", top: "37px", left: "51px"}}/>
        <div style={{transform: "translateY(150px)", background: "rgba(255, 255, 255, 0.87)", borderRadius: "10px", padding: "10px", height: "85px"}}>
          <img src={carma} alt="carma logo" height="85" width="105"/>
        </div>
      </div>
      {children}
      <img src={intact} alt="intact logo" style={{marginTop: "92px"}}/>
    </Container>
  );
};

export default Home;