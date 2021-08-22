import { useRef, useState } from "react";
import styled from "styled-components";
import Button from "./ButtonOrange";
import Container from "./Container";
import Header from "./Header";
import Home from "./Home";
import ProgressBar from "./ProgressBar";
import ReactionSuite from "./ReactionSuite";
import Results from "./Results";
import { auth, db, firebase } from "../firebase";
import PhotoTest from "./PhotoTest";
import VoiceTest from "./VoiceTest";

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
  const totalStages = 4;
  const [stage, setStage] = useState(0);

  const passed = useRef(false);
  const passed2 = useRef(false);

  let body;
  switch (stage) {
    case 1:
      body = (
        <ReactionSuite 
          numTests={2} 
          onFinish={tot => {
            passed.current = tot < 6000;
            setStage(2);
          }}
        />
      );
      break;
    case 2:
      body = (<PhotoTest onFinish={(result) => {
          console.log("result:");
          console.log(result);
          passed2.current = result === "sober";
          if (passed.current && passed2.current) {
            db.collection("users").doc(auth.currentUser.uid).update({ points: firebase.firestore.FieldValue.increment(10) });
          }
          setStage(3);
        }}/>);
      break;
    case 3:
      body = (<VoiceTest onFinish={() => setStage(4)}/>);
      break;
    case 4:
      body = <Results isSuccessful={passed.current && passed2.current}/>;
      
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
        style={{visibility: stage === 4 ? 'hidden' : 'visible'}}
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
