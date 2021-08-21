import React from 'react';
import Webcam from 'react-webcam';
import Button from '../components/Button';

const videoConstraints = {
  width: 332,
  height: 424,
  facingMode: "user"
};

const PhotoDetector = () => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot({width: 332, height: 424});
      console.log(imageSrc);
    },
    [webcamRef]
  );

  return (
    <>
      {/* <Webcam
        width={332}
        height={424}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      /> */}
      <Button onClick={capture}>Submit</Button>
    </>
  );
}


export default PhotoDetector;