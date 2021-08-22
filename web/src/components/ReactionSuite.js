import { useRef, useState } from "react";
import ReactionTest from "./ReactionTest";

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