import styled from "styled-components";
import Card from "./Card";
import Container from "./Container"
import Header from "./Header";
import intact from "../images/intact-logo.png";
import { useState } from "react";
import { auth, db } from "../firebase";
import moment from "moment";

const Svg = styled.svg`
  position: absolute;
  top: -1px;
  left: 4px;
`;

const Title = styled.span`
font-family: Roboto;
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 130%;
letter-spacing: 0.02em;
color: #FFFFFF;
margin-top: 12px;
`;

const Description = styled.span`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 130%;
letter-spacing: 0.02em;
color: #FFFFFF;
width: 250px;
padding: 10px 10px;
`;

const Badge = styled.span`
  height: 65px;
  width: 65px;
  box-sizing: border-box;
  border-radius: 10px;
  background: ${props => props.background};
  margin-right: 14px;
  font-family: Roboto;
font-style: normal;
font-weight: ${props => props.bold ? 700 : 500};
font-size: ${props => props.fontSize};
line-height: 130%;
padding: 10px;
letter-spacing: 0.02em;
text-align: center;
color: ${props => props.textColor};
display: flex;
justify-content: center;
align-items: center;
`;

const Text = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 130%;
letter-spacing: 0.02em;
color: #000000;
text-align: left;
`;

const badges = {
  0 : "Road Beginner",
  10 : `Road Novice`,
  20 : `Road Intermediate`,
  30 : `Road Expert`, 
};

const Score = () => {
  const [user, setUser] = useState({});
  db.collection("users").doc(auth.currentUser.uid).get()
    .then(snapshot => {
      setUser(snapshot.data());
    });

  const fname = user.name && user.name.split(" ")[0];

  const thresholds = {
    0 : "Start a test!",
    10 : `Good job ${fname}!`,
    20 : `Great job ${fname}!,`,
    30 : `Amazing job ${fname}!`, 
  };

  return (
    <Container style={{backgroundColor: "#F9FAFB"}}>
      <Header>carma</Header>
      <Card style={{boxShadow: "none", padding: 0, background: "transparent"}}>
        <div style={{position: "relative"}}>
          <Svg width="302" height="181" viewBox="0 0 302 181" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
            <g clip-path="url(#clip1)">
            <path d="M246.71 355.788C205.211 381.242 145.493 366.234 108.175 337.113C70.9119 308.162 56.0479 265.097 68.7178 227.585C81.3878 190.074 121.592 158.114 170.794 154.103C219.997 150.091 277.837 174.146 294.908 219.107C312.034 264.237 288.391 330.274 246.71 355.788Z" fill="#FFC054"/>
            </g>
            <path d="M56.6297 -39.9795C73.5377 -23.3908 87.2235 0.286575 85.2091 25.0703C83.1947 49.8541 65.3622 75.7447 43.1417 82.7691C21.0397 89.6752 -5.44956 77.5973 -29.2193 64.4497C-52.8711 51.3018 -73.8027 36.9662 -81.0138 16.3383C-88.3423 -4.40731 -81.9497 -31.5633 -66.1713 -48.0088C-50.3936 -64.3362 -25.2302 -69.9531 -2.70135 -68.0111C19.8275 -66.0692 39.7217 -56.5683 56.6297 -39.9795Z" fill="#FFC054"/>
            <path d="M92.6889 64.3689C99.6974 92.1416 78.5444 122.896 53.3824 138.594C28.3339 154.291 -0.723648 154.932 -20.8552 141.148C-40.9867 127.365 -52.1923 99.1576 -44.6712 70.8973C-37.1501 42.6369 -10.9035 14.5467 19.7475 13.0088C50.512 11.4706 85.681 36.4846 92.6889 64.3689Z" fill="#FFC054"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="179.949" height="298.996" rx="15" transform="matrix(-0.0114869 0.999934 -0.999994 -0.00355478 301.061 1.0629)" fill="white"/>
            </clipPath>
            <clipPath id="clip1">
            <rect width="372.068" height="458.096" fill="white" transform="matrix(0.305757 0.949604 -0.952172 0.313262 323.637 81.4651)"/>
            </clipPath>
            </defs>
          </Svg>
          <svg width="307" height="187" viewBox="0 0 307 187" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
            <rect x="4" width="299" height="179" rx="15" fill="#FFC054" fill-opacity="0.72" shape-rendering="crispEdges"/>
            </g>
            <defs>
            <filter id="filter0_d" x="0" y="0" width="307" height="187" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
          </svg>
        </div>
        <div style={{width: "307px", position: 'absolute', display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Title>Carma Score</Title>
          <Description>By completing carma tests you can deduct up to 30% of your Intact auto insurance!</Description>
        </div>
      </Card>
      <Card>
        <Badge background="#2DDAA5" fontSize="25px" textColor="#fff">{user.points}</Badge>
        <Text>
          <span>Carma points earned</span>
          <span>{thresholds[user.points] || `Incredible job ${fname}!`}</span>
        </Text>
      </Card>
      <Card>
        <Badge background="#C1C7FC">
          <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.862 18.49L31.904 14.406L26.348 13.6L23.902 8.294L21.458 13.6L15.902 14.404L19.944 18.488L18.96 24.294L23.902 21.512L28.846 24.294L27.862 18.49ZM8.9 27.526C7.168 24.762 6.152 21.502 6.152 18C6.152 8.058 14.21 0 24.152 0C34.094 0 42.152 8.058 42.152 18C42.152 21.584 41.092 24.916 39.286 27.722C38.072 27.102 36.83 26.552 35.562 26.084C37.186 23.798 38.152 21.012 38.152 18C38.152 10.28 31.87 4 24.152 4C16.434 4 10.152 10.28 10.152 18C10.152 20.952 11.076 23.688 12.64 25.948C11.368 26.398 10.12 26.924 8.9 27.526ZM39.514 32.426L34.846 39.07C31.64 37.222 27.95 36.142 24 36.124C20.05 36.142 16.36 37.222 13.154 39.07L8.486 32.426C13.018 29.654 18.31 28.022 24 28.004C29.69 28.022 34.982 29.654 39.514 32.426ZM48 38H43.282L42.15 44C40.924 41.976 39.374 40.176 37.596 38.64L42.282 31.97C44.458 33.728 46.386 35.666 48 38ZM5.72 31.97L10.406 38.64C8.626 40.178 7.078 41.976 5.852 44L4.72 38H0C1.614 35.666 3.542 33.728 5.72 31.97Z" fill="#4D5DDD"/>
          </svg>
        </Badge>
        <Text>
          <span>Congrats {fname}, you've earned the {badges[user.points] || "Road Master"} badge!</span>
        </Text>
      </Card>
      <Card>
        <Badge background="#FEE1E1" fontSize="30px" textColor="#F94E4E" bold>{Math.round(moment.duration(moment(user.renewalDate).subtract(moment.now())).asDays())}</Badge>
        <Text>
          <span>Days left until policy renewal</span>
        </Text>
      </Card>
      <div style={{marginTop: "40px"}}>
        <img src={intact} alt="intact logo"/>
      </div>
    </Container>
  );
}

export default Score;