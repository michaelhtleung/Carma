import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import morningJog from '../images/morning-jog.png';
import Button from "./Button";

const Message = styled.span`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 130%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
  margin-top: 37px;
  margin-bottom: 67px;
  padding: 5px;
`;

const Dot = styled.span`
  position: absolute;
  top: ${props => props.position.top}px;
  left: ${props => props.position.left}px;
  cursor: pointer;
  height: ${props => props.radius}px;
  width: ${props => props.radius}px;
  border-radius: 50%;
  background: linear-gradient(0deg, #C1C7FC, #C1C7FC), linear-gradient(0deg, #C1C7FC, #C1C7FC), linear-gradient(0deg, #C1C7FC, #C1C7FC), #C1C7FC;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const GameContainer = styled.div`
  flex: 1;
  background: #E5E5E5;
`

const ReactionTest = ({ onComplete, limit, isFinal }) => {
  const [isReady, setIsReady] = useState(false);
  const [isUp, setIsUp] = useState(false);
  const [start, setStart] = useState();
  const [size, setSize] = useState({});

  const timeout = useRef(null);
  const waitToUp = useRef(null);
  const box = useRef(null);

  useEffect(() => {
    if (box.current) {
      setSize({
        height: box.current.clientHeight,
        width: box.current.clientWidth,
        offsetTop: box.current.offsetTop,
        offsetLeft: box.current.offsetLeft,
      });
    }
  }, [isReady]);

  const handleComplete = val => {
    clearTimeout(timeout.current);
    clearTimeout(waitToUp.current);
    onComplete(val);
    if (!isFinal) {
      setIsUp(false);
      handleReady();
    }
  }

  const handleReady = () => {
    setIsReady(true);
    waitToUp.current = setTimeout(() => {
      setIsUp(true);
      setStart(Date.now());
      timeout.current = setTimeout(() => {
        handleComplete(limit);
      }, limit);
    }, ((Math.random() * 3.5) + 0.5) * 1000);
  }

  return isReady ? (
    <GameContainer ref={box}>
      {isUp && (
        <Dot
          position={{
            top: (Math.random() * (size.height - size.offsetTop)) + (size.offsetTop * 2) - (size.height / 12), 
            left: (Math.random() * ((size.width - size.offsetLeft) + (size.offsetLeft) - (size.height / 12))) + size.offsetLeft
          }}
          radius={size.height / 12}
          onMouseDown={() => {
            handleComplete(Date.now() - start);
          }}
        />
      )}
    </GameContainer>
  ) : (
    <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <img style={{width: '100%'}} src={morningJog} alt={"jogger running in the morning"}/>
      <Message>Complete this short reaction speed test by touching the dots that appear on the screen! A new dot will appear every 0.5 - 3 seconds.</Message>
      <Button onClick={handleReady}>Start</Button>
    </div>
  )
}

export default ReactionTest;