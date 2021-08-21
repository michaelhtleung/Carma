import { useState } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import ReactionSuite from "./ReactionSuite";

const Header = styled.span`
  font-family: Heebo, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  color: #000000;
`;

const Quit = styled.span`
  font-family: Heebo, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0.05em;
  color: #000000;
  margin-bottom: 15px;
  justify-content: start;
  display: flex;
`;

const Container = styled.div`
  padding: 22px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const TestLayout = () => {
  const totalStages = 3;
  const [stage, setStage] = useState(1);

  let body;
  switch (stage) {
    case 1:
      body = <ReactionSuite numTests={3} onFinish={() => setStage(2)}/>;
      break;
    case 2:
      // set body to picture test
      break;
    case 3:
      // set body to finishing screen
      break;
    default:
      break;
  }

  return (
    <Container>
      <Header>Insert Name</Header>
      <Quit><span style={{cursor: 'pointer'}}>Quit</span></Quit>
      <ProgressBar currentStage={stage} totalStages={totalStages}/>
      {body}
    </Container>
  )
}

export default TestLayout;
