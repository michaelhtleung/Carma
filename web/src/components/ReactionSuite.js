import { useRef, useState } from "react";
import styled from "styled-components";
import ReactionTest from "./ReactionTest";

const Header = styled.span`
  font-family: Heebo, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 44px;
  text-align: center;
  color: #000000;
  margin-top: 20px;
  margin-bottom: 15px;
`;

const ReactionSuite = ({ numTests, onFinish }) => {
  const [stage, setStage] = useState(1);
  const stageRef = useRef(stage);
  stageRef.current = stage;
  const data = useRef(0);
  const limit = 5000;

  const addData = time => {
    data.current += time;
    if (stageRef.current < numTests) {
      setStage(stageRef.current + 1);
    } else {
      onFinish(data.current);
    }
  }

  return (
    <>
      <ReactionTest isFinal={stage === numTests} onComplete={addData} limit={limit}/>
    </>
  );
}

export default ReactionSuite;