import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Dot = styled.span`
  position: absolute;
  top: ${props => Math.max(22, props.position.top - props.radius - 22)}px;
  left: ${props => Math.max(22, props.position.left - props.radius - 22)}px;
  cursor: pointer;
  height: ${props => props.radius}px;
  width: ${props => props.radius}px;
  border-radius: 50%;
  background: linear-gradient(0deg, #C1C7FC, #C1C7FC), linear-gradient(0deg, #C1C7FC, #C1C7FC), linear-gradient(0deg, #C1C7FC, #C1C7FC), #C1C7FC;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Container = styled.div`
  flex: 1;
  background: #E5E5E5;
`

const ReactionTest = ({ onComplete, limit, isFinal }) => {
  const [isReady, setIsReady] = useState(false);
  const [isUp, setIsUp] = useState(false);
  const [start, setStart] = useState();
  const [size, setSize] = useState({});

  const timeout = useRef(null);
  const box = useRef(null);

  useEffect(() => {
    setSize({
      height: box.current.clientHeight,
      width: box.current.clientWidth,
      offsetTop: box.current.offsetTop,
      offsetLeft: box.current.offsetLeft,
    })
  }, []);

  const handleComplete = val => {
    onComplete(val);
    setIsUp(false);
    clearTimeout(timeout.current);
    if (!isFinal) {
      handleReady();
    }
  }

  const handleReady = () => {
    setIsReady(true);
    setTimeout(() => {
      setIsUp(true);
      setStart(Date.now());
      timeout.current = setTimeout(() => {
        handleComplete(limit);
      }, limit);
    }, ((Math.random() * 3.5) + 0.5) * 1000);
  }

  return (
      <Container ref={box} onMouseDown={isReady && !isUp ? () => handleComplete(limit) : undefined}>
        {isReady ? isUp && (
          <Dot
            position={{
              top: (Math.random() * size.height) + size.offsetTop, 
              left: (Math.random() * size.width) + size.offsetLeft
            }}
            radius={size.height / 12}
            onMouseDown={() => {
              clearTimeout(timeout.current);
              handleComplete(Date.now() - start);
            }}
          />        
          ) : (
          <button onClick={handleReady}>Ready</button>
        )}
      </Container>
  )
}

export default ReactionTest;