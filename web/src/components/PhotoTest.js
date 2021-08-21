import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Webcam from 'react-webcam';
import Button from './Button';
import indianAttrie from '../images/indian-attrie.png';

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

const videoConstraints = {
  width: 332,
  height: 424,
  facingMode: "user"
};

const CameraContainer = styled.div`
  flex" 1;
  background: #E5E5E5;
`;

const PhotoTest = () => {
  const [isReady, setIsReady] = useState(false);
  const [screenshot, setScreenshot] = useState('');
  const webcamRef = useRef(null);

  const handleOnReady = () => {
    setIsReady(true);
  }

  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot({width: 332, height: 424});
      console.log(imageSrc);
      setScreenshot(imageSrc);
    },
    [webcamRef]
  );

  useEffect(() => {
    if (isReady) capture();
  }, [isReady]);
  

  return isReady ? (
    <>
      <CameraContainer>
        <Webcam
          width={332}
          height={424}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          ref={webcamRef}
        />
      </CameraContainer>
      <Button onClick={capture}>Submit</Button>
    </>
  ) : (
    <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <img style={{width: '100%'}} src={indianAttrie} alt={"Woman crossing hands with phone displaying her profile"}/>
      <Message>Say cheese! Submit a selfie to automatically detect sobriety.</Message>
      <Button onClick={handleOnReady}>Start</Button>
    </div>
  )
}

export default PhotoTest;