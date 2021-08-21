import styled from "styled-components";
import Container from "./Container"
import Header from "./Header";

const Svg = styled.svg`
  position: absolute;
`;

const Score = () => {
  return (
    <Container style={{backgroundColor: "#F9FAFB"}}>
      <Header>carma</Header>
      <div>
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
        <Svg width="307" height="187" viewBox="0 0 307 187" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </Svg>
      </div>
    </Container>
  );
}

export default Score;