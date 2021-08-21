import styled from "styled-components"

const Line = styled.div`
  height: 0px;
  border: 1px solid #E5E5E5;
`;

const Container = styled.div`
  height: 68px;
  background-color: transparent;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Icon = styled.svg`
  cursor: pointer;
  fill: ${props => props.active ? "#F94E4E" : "#C4C4C4"};
`;

const Navbar = () => {
  return (
    <>
    <Line/>
    <Container>
      <Icon width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5167 0.5C7.85229 0.5 0.0166626 8.33563 0.0166626 18C0.0166626 27.6644 7.85229 35.5 17.5167 35.5C27.181 35.5 35.0167 27.6644 35.0167 18C35.0167 8.33563 27.181 0.5 17.5167 0.5ZM28.8231 27.1948C28.4425 26.3402 27.6725 25.7496 26.0946 25.385C22.7506 24.6135 19.6371 23.9369 21.1465 21.0902C25.7329 12.4248 22.3612 7.79167 17.5167 7.79167C12.5758 7.79167 9.28583 12.6027 13.8869 21.0902C15.4415 23.9544 12.2127 24.6296 8.93875 25.385C7.35791 25.7496 6.59375 26.3446 6.21604 27.2021C4.16708 24.6894 2.93333 21.4869 2.93333 18C2.93333 9.95875 9.47541 3.41667 17.5167 3.41667C25.5579 3.41667 32.1 9.95875 32.1 18C32.1 21.484 30.8677 24.6835 28.8231 27.1948Z"/>
      </Icon>

      <Icon active width="42" height="32" viewBox="0 0 42 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.1625 7.45833C40.634 7.45833 41.0167 7.841 41.0167 8.3125V9.18546C41.0167 10.5402 39.4347 10.875 38.256 10.875L36.4007 7.45833H40.1625ZM37.7008 13.4477C38.7924 15.4738 39.3169 17.2949 39.3169 19.7105C39.3169 22.0509 38.6387 24.0377 37.6 26.5114V29.6667C37.6 30.6097 36.8347 31.375 35.8917 31.375H33.3292C32.3862 31.375 31.6208 30.6097 31.6208 29.6667V27.9583H9.4125V29.6667C9.4125 30.6097 8.64716 31.375 7.70416 31.375H5.14166C4.19866 31.375 3.43333 30.6097 3.43333 29.6667V26.5114C2.39466 24.0377 1.71645 22.0509 1.71645 19.7105C1.71645 17.2949 2.24091 15.4738 3.33254 13.4477C4.74875 10.822 6.49466 7.54888 8.33795 4.47558C9.75245 2.11467 10.4939 1.55946 12.2295 1.24854C14.8467 0.77875 17.2145 0.625 20.5167 0.625C23.8189 0.625 26.1866 0.77875 28.8038 1.24854C30.5395 1.55946 31.2809 2.11467 32.6954 4.47558C34.5387 7.54888 36.2846 10.822 37.7008 13.4477ZM10.2667 18.5625C10.2667 17.148 9.11866 16 7.70416 16C6.28966 16 5.14166 17.148 5.14166 18.5625C5.14166 19.977 6.28966 21.125 7.70416 21.125C9.11866 21.125 10.2667 19.977 10.2667 18.5625ZM27.35 20.2708C27.35 19.7993 26.9673 19.4167 26.4958 19.4167H14.5375C14.066 19.4167 13.6833 19.7993 13.6833 20.2708C13.6833 20.7423 14.066 21.125 14.5375 21.125H26.4958C26.9673 21.125 27.35 20.7423 27.35 20.2708ZM32.3742 10.8289C32.3742 10.8289 31.11 7.70946 29.5879 5.46129C29.2428 4.95221 28.7081 4.60371 28.1034 4.49437C25.5221 4.02971 23.2602 3.88108 20.5167 3.88108C17.7731 3.88108 15.5112 4.02971 12.93 4.49437C12.3252 4.602 11.7905 4.9505 11.4454 5.46129C9.92329 7.70775 8.65912 10.8289 8.65912 10.8289C11.4608 11.3636 16.0203 11.6779 20.5167 11.6779C25.013 11.6779 29.5725 11.3636 32.3742 10.8289ZM35.8917 18.5625C35.8917 17.148 34.7437 16 33.3292 16C31.9147 16 30.7667 17.148 30.7667 18.5625C30.7667 19.977 31.9147 21.125 33.3292 21.125C34.7437 21.125 35.8917 19.977 35.8917 18.5625ZM4.63258 7.45833H0.870829C0.399329 7.45833 0.0166626 7.841 0.0166626 8.3125V9.18546C0.0166626 10.5402 1.59858 10.875 2.77733 10.875L4.63258 7.45833Z"/>
      </Icon>

      <Icon width="54" height="28" viewBox="0 0 54 28" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.3917 18.5L44.1767 27.5C42.9511 25.0565 41.2396 22.9303 39.2057 21.1865L46.3806 10.85C48.8937 13.055 51.2345 15.629 53.0167 18.5H46.3917ZM46.1797 7.232L38.4814 18.3222C35.1225 15.7662 31.0172 14.1327 26.5167 14.1327C22.0183 14.1327 17.871 15.6897 14.532 18.293L6.84483 7.21625C12.359 3.03575 19.1386 0.5 26.5167 0.5C33.8969 0.5 40.6721 3.038 46.1797 7.232ZM18.7742 8.98475L19.8917 7.89125L18.3591 7.67525L17.6833 6.25775L17.0076 7.67525L15.475 7.89125L16.5924 8.98475L16.3208 10.535L17.6833 9.7925L19.0459 10.535L18.7742 8.98475ZM28.7029 8.77775L30.9333 6.593L27.866 6.16325L26.5167 3.32375L25.1674 6.161L22.1 6.593L24.3326 8.77775L23.7872 11.8827L26.5167 10.3933L29.2462 11.8805L28.7029 8.77775ZM36.4409 9.20525L37.5583 8.11175L36.0257 7.89575L35.35 6.47825L34.6742 7.89575L33.1417 8.11175L34.2591 9.20525L33.9875 10.7555L35.35 10.0153L36.7125 10.7577L36.4409 9.20525ZM6.6527 10.85C4.13962 13.0573 1.79879 15.629 0.0166626 18.5H6.64166L8.85662 27.5C10.0845 25.0565 11.7937 22.9303 13.8276 21.1865L6.6527 10.85Z"/>
      </Icon>
    </Container>
    </>
  )
}

export default Navbar;