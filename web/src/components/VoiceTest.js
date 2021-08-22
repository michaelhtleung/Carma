import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Button from './Button';
import recruitment from '../images/recruitment-1.png';
import MicRecorder from 'mic-recorder-to-mp3';
import Microphone from '../images/Microphone';
import Recording from '../images/Recording.png';
import { storage } from '../firebase';

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

const StartRecording = styled.div`
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0.05em;
  color: #4D5DDD;
  padding-top: 30px;
`;

const TextToFollow = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 130%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
  padding: 20px;
`;

const VoiceTest = (props) => {
  const { onFinish } = props;
  const [isReady, setIsReady] = useState(false);
  const [text, setText] = useState("Don't cry over spilled milk.");
  const [startRecording, setStartRecording] = useState(false);
  const [blobURL, setBlobURL] = useState('');
  const Mp3Recorder = useMemo(() => new MicRecorder({ bitRate: 128 }), []);
  const storageRef = storage.ref();
  const handleOnReady = () => {
    setIsReady(true);
  }

  const onStart = () => {
    Mp3Recorder.start().then(() => {
      setStartRecording(true);
    }).catch((e) => {
      console.error(e);
    });
  }

  const onEnd = () => {
    Mp3Recorder.stop().getMp3().then(([buffer, blob]) => {
      setStartRecording(false);
      const blobURL = URL.createObjectURL(blob);
      setBlobURL(blobURL);
      debugger;
      storageRef.child('audio').put()
    }).catch((e) => {
      console.error(e);
    })
  }

  return isReady ? (
    <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px'}}>
      <Message>Please record yourself saying the following:</Message>
      <TextToFollow>{text}</TextToFollow>
      <audio src={blobURL} controls></audio>
      <StartRecording>{`${!startRecording? 'Start' : 'Stop'} Recording`}</StartRecording>
      <Button onClick={!startRecording? onStart : onEnd}>{!startRecording? <Microphone /> : <Microphone props={{fill: 'black'}} />}</Button>
      <Button>Cancel</Button>
      <Button>Submit</Button>
    </div>
  ) : (
    <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <img style={{width: '100%'}} src={recruitment} alt={"person holding megaphone"}/>
      <Message>Testing 1...2...3... Please record yourself saying the given phrase!</Message>
      <Button onClick={handleOnReady}>Start</Button>
    </div>
  );
}

export default VoiceTest;