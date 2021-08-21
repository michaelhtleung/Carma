import { useState } from "react";
import styled from "styled-components";
import Button from "./ButtonOrange";
import Container from "./Container";
import Header from "./Header";
import Home from "./Home";
import ProgressBar from "./ProgressBar";
import ReactionSuite from "./ReactionSuite";

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

const TestLayout = () => {
  const totalStages = 3;
  const [stage, setStage] = useState(0);

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

  return stage === 0 ? (
    <Home>
      <Button style={{marginTop: "48px", width: "287px"}} onClick={() => setStage(1)}>Start Sobriety Test</Button>
    </Home>
  ) : (
    <Container>
      <Header>carma</Header>
      <Quit 
        style={{visibility: stage === 3 ? 'hidden' : 'visible'}}
        onClick={() => setStage(0)}
      >
        <span style={{cursor: 'pointer'}}>Quit</span>
      </Quit>
      <ProgressBar currentStage={stage} totalStages={totalStages}/>
      {body}
    </Container>
  )
}

export default TestLayout;
