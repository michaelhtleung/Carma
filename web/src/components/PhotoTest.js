import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Webcam from 'react-webcam';
import Button from './Button';
import indianAttrie from '../images/indian-attrie.png';
import { ModelUtil } from './ModelUtil';

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

const RetakePhoto = styled.div`
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0.05em;
  color: #4D5DDD;
`;

const videoConstraints = {
  width: 332,
  height: 424,
  facingMode: "user"
};

const PhotoTest = (props) => {
  const { onFinish } = props;
  const [isReady, setIsReady] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [screenshot, setScreenshot] = useState('');
  const webcamRef = useRef(null);

  const handleOnReady = () => {
    setIsReady(true);
  }

  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot({width: 332, height: 424});
      setScreenshot(imageSrc);
    },
    [webcamRef]
  );

  useEffect(() => {
    setScreenshot('');
  }, []);

  useEffect(() => {
    if (isReady && screenshot == null) capture();
  }, [isReady, screenshot]);

  
  const handleOnSubmit = async () => {
    setIsUpload(true);
    const result = await ModelUtil(screenshot);
    // onFinish();
  }

  const handleRetake = () => {
    setScreenshot('');
  }

  return isReady ? (screenshot === '' ? (
    <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px'}}>
      <Webcam
        width={332}
        height={424}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        ref={webcamRef}
      />
      <div id='say-cheese-button' style={{padding: '30px'}}>
        <Button onClick={capture}>Say cheese!</Button>
      </div>
    </div>
  ) : (
    <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px'}}>
      <img src={screenshot} />
      <div id="submit-button" style={{padding: '30px'}}>
        <Button onClick={handleOnSubmit}>Submit</Button>
      </div>
      <RetakePhoto onClick={handleRetake}>Retake Photo</RetakePhoto>
    </div>
  )
  ): (
    <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <img style={{width: '100%'}} src={indianAttrie} alt={"Woman crossing hands with phone displaying her profile"}/>
      <Message>Say cheese! Submit a selfie to automatically detect sobriety.</Message>
      <Button onClick={handleOnReady}>Start</Button>
    </div>
  )
}

export default PhotoTest;