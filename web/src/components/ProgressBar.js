import styled from "styled-components";

const Background = styled.div`
  background: #E5E5E5;
  border-radius: 10px;
  height: 13px;
  width: 100%;
`;

const Bar = styled.div`
  height: 13px;
  background: #4D5DDD;
  border-radius: 10px;
  width: ${props => props.widthPct}%;
`;

const ProgressBar = ({ currentStage, totalStages }) => {
  return <Background><Bar widthPct={(currentStage / totalStages) * 100}/></Background>
}

export default ProgressBar;