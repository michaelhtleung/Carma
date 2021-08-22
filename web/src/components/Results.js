import styled from "styled-components";
import Container from "./Container";

const Message = styled.span`
font-family: Roboto;
font-style: normal;
font-weight: ${props => props.bold ? 700 : 500};
font-size: 20px;
line-height: 130%;
text-align: center;
letter-spacing: 0.02em;
color: #000000;
margin-top: 34px;
`;

const Results = ({ isSuccessful }) => {
  return (
    <Container style={{justifyContent: "flex-start", alignItems: "center", padding: "60px 0 0 0"}}>
      {
        isSuccessful ? (
          <>
            <svg width="342" height="380" viewBox="0 0 342 380" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="171" cy="175" r="171" fill="#2DDAA5" fillOpacity="0.14"/>
              <circle cx="171" cy="175" r="134" fill="#2DDAA5" fillOpacity="0.14"/>
              <circle cx="171" cy="175" r="86" fill="#2DDAA5" fillOpacity="0.21"/>
              <circle cx="171.5" cy="174.5" r="54.5" fill="url(#paint0_linear)"/>
              <circle cx="128.5" cy="42.5" r="7.5" fill="#C1C7FC"/>
              <circle cx="13.5" cy="226.5" r="12" stroke="#4D5DDD"/>
              <circle r="2.5" transform="matrix(1 0 0 -1 43.5 306.5)" fill="#4D5DDD"/>
              <circle cx="59" cy="220" r="6" fill="#5B6AEB"/>
              <circle cx="292.5" cy="141.5" r="6.5" fill="#F94E4E"/>
              <circle cx="33" cy="319" r="2" fill="#F94E4E"/>
              <circle cx="209" cy="362" r="7" fill="#FFC054"/>
              <circle cx="259.5" cy="248.5" r="4.5" fill="#6573EB"/>
              <circle cx="164.5" cy="352.5" r="2.5" fill="#C1C7FC"/>
              <circle cx="246.5" cy="241.5" r="2.5" fill="#C1C7FC"/>
              <circle cx="312.5" cy="214.5" r="2.5" fill="#C1C7FC"/>
              <circle cx="307.5" cy="201.5" r="2.5" fill="#C1C7FC"/>
              <circle cx="330.5" cy="65.5" r="2.5" fill="#F94E4E"/>
              <circle cx="325.5" cy="47.5" r="2.5" fill="#C1C7FC"/>
              <circle cx="301.5" cy="159.5" r="2.5" fill="#C1C7FC"/>
              <circle cx="126.5" cy="377.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="307.5" cy="150.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="53" cy="83" r="9" fill="#FFC054"/>
              <circle cx="284" cy="20" r="15" fill="#FFC054"/>
              <circle cx="79.5" cy="94.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="79.5" cy="94.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="79.5" cy="94.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="79.5" cy="94.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="79.5" cy="94.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="146.5" cy="17.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="146.5" cy="17.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="146.5" cy="17.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="146.5" cy="17.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="146.5" cy="17.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="225.5" cy="5.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="225.5" cy="5.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="225.5" cy="5.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="225.5" cy="5.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="225.5" cy="5.5" r="2.5" fill="#C1C7FC"/>
              <circle cx="172.5" cy="41.5" r="1.5" fill="#4D5DDD"/>
              <circle cx="172.5" cy="41.5" r="1.5" fill="#4D5DDD"/>
              <circle cx="172.5" cy="41.5" r="1.5" fill="#4D5DDD"/>
              <circle cx="172.5" cy="41.5" r="1.5" fill="#4D5DDD"/>
              <circle cx="172.5" cy="41.5" r="1.5" fill="#C1C7FC"/>
              <circle cx="166.5" cy="22.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="166.5" cy="22.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="166.5" cy="22.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="166.5" cy="22.5" r="2.5" fill="#4D5DDD"/>
              <circle cx="166.5" cy="22.5" r="2.5" fill="#F94E4E"/>
              <circle cx="104.5" cy="2.5" r="2.5" fill="white"/>
              <path d="M193.474 152.667L161.5 185.44L146.523 171.242L136 181.771L161.5 206.5L204 163.193L193.474 152.667Z" fill="white"/>
              <defs>
              <linearGradient id="paint0_linear" x1="216" y1="174" x2="117" y2="174" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2DDAA5" stopOpacity="0.43"/>
              <stop offset="1" stopColor="#2DDAA5"/>
              </linearGradient>
              </defs>
            </svg>
            <Message>Thank you for doing your part to keep the roads safe!</Message>
          </>
        ) : (
          <>
            <svg width="342" height="342" viewBox="0 0 342 342" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="171" cy="171" r="171" fill="#F94E4E" fillOpacity="0.14"/>
              <circle cx="171" cy="171" r="134" fill="#F94E4E" fillOpacity="0.24"/>
              <circle cx="171" cy="171" r="86" fill="#F94E4E" fillOpacity="0.33"/>
              <circle cx="171.5" cy="171.5" r="54.5" fill="url(#paint0_linear)"/>
              <g clipPath="url(#clip0)">
              <path d="M199 190.105L179.598 170.951L198.732 151.626L190.105 143L170.944 162.409L151.554 143.268L143 151.822L162.416 171.049L143.268 190.446L151.822 199L171.042 179.591L190.374 198.732L199 190.105Z" fill="white"/>
              </g>
              <defs>
              <linearGradient id="paint0_linear" x1="216" y1="171" x2="117" y2="171" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F94E4E" stopOpacity="0.62"/>
              <stop offset="1" stopColor="#F94E4E"/>
              </linearGradient>
              <clipPath id="clip0">
              <rect width="56" height="56" fill="white" transform="translate(143 143)"/>
              </clipPath>
              </defs>
            </svg>
            <Message bold>Unfortunately, it is not safe for you to drive, please get a ride home or a sober designated driver</Message>
          </>
        )
      }
    </Container>
  );
}

export default Results;