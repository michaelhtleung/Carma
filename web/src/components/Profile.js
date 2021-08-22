import styled from "styled-components";
import Button from "./ButtonOrange";
import Container from "./Container";
import Header from "./Header";
import intact from "../images/intact-logo.png";
import more from "../images/more-btn.png";
import avatar from "../images/tom.JPG";
import Card from "./Card";

const Name = styled.span`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 130%;
letter-spacing: 0.02em;
color: #000000;
`;

const Icon = styled.span`
border-radius: 5px;
padding: 6px;
background: ${props => props.background};
margin-right: 30px;
height: 17px;
`;

const Info = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
text-align: left;
`;

const Profile = () => {
  return (
    <Container style={{backgroundColor: "#F9FAFB"}}>
      <Header>carma</Header>
      <Card style={{display: "block"}}>
        <div style={{display: 'flex', justifyContent: 'end'}}>
          <img src={more} alt="more actions" style={{display: 'inline', position: "relative", float: "right", cursor: 'pointer'}}/>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <img src={avatar} alt="avatar" style={{marginBottom: "11px", borderRadius: "50%", height: "73px", width: "73px", objectFit: "cover"}}/>
          <Name>Tom Zhu</Name>
        </div>
      </Card>
      <Card>
        <Icon background="rgba(45, 218, 165, 0.14)">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0V12H16V0H0ZM4.41533 5.286L1.33333 9.094V2.78867L4.41533 5.286ZM1.65467 1.33333H14.3447L8 6.47533L1.65467 1.33333ZM5.45067 6.12533L8 8.19133L10.5533 6.122L14.2947 10.6667H1.77533L5.45067 6.12533ZM11.5893 5.28267L14.6667 2.78867V9.02067L11.5893 5.28267Z" fill="#2DDAA5"/>
          </svg>
        </Icon>
        <Info>
          <a style={{color: "#000"}} href="mailto:email@gmail.com">email@gmail.com</a>
        </Info>
      </Card>
      <Card>
        <Icon background="#C1C7FC">
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.625 3.25C17.832 3.25 18 3.418 18 3.625V4.00825C18 4.603 17.3055 4.75 16.788 4.75L15.9735 3.25H17.625ZM16.5443 5.8795C17.0235 6.769 17.2537 7.5685 17.2537 8.629C17.2537 9.6565 16.956 10.5287 16.5 11.6147V13C16.5 13.414 16.164 13.75 15.75 13.75H14.625C14.211 13.75 13.875 13.414 13.875 13V12.25H4.125V13C4.125 13.414 3.789 13.75 3.375 13.75H2.25C1.836 13.75 1.5 13.414 1.5 13V11.6147C1.044 10.5287 0.74625 9.6565 0.74625 8.629C0.74625 7.5685 0.9765 6.769 1.45575 5.8795C2.0775 4.72675 2.844 3.28975 3.65325 1.9405C4.27425 0.904 4.59975 0.66025 5.36175 0.52375C6.51075 0.3175 7.55025 0.25 9 0.25C10.4497 0.25 11.4893 0.3175 12.6383 0.52375C13.4002 0.66025 13.7257 0.904 14.3468 1.9405C15.156 3.28975 15.9225 4.72675 16.5443 5.8795ZM4.5 8.125C4.5 7.504 3.996 7 3.375 7C2.754 7 2.25 7.504 2.25 8.125C2.25 8.746 2.754 9.25 3.375 9.25C3.996 9.25 4.5 8.746 4.5 8.125ZM12 8.875C12 8.668 11.832 8.5 11.625 8.5H6.375C6.168 8.5 6 8.668 6 8.875C6 9.082 6.168 9.25 6.375 9.25H11.625C11.832 9.25 12 9.082 12 8.875ZM14.2057 4.72975C14.2057 4.72975 13.6507 3.36025 12.9825 2.37325C12.831 2.14975 12.5962 1.99675 12.3307 1.94875C11.1975 1.74475 10.2045 1.6795 9 1.6795C7.7955 1.6795 6.8025 1.74475 5.66925 1.94875C5.40375 1.996 5.169 2.149 5.0175 2.37325C4.34925 3.3595 3.79425 4.72975 3.79425 4.72975C5.02425 4.9645 7.026 5.1025 9 5.1025C10.974 5.1025 12.9757 4.9645 14.2057 4.72975ZM15.75 8.125C15.75 7.504 15.246 7 14.625 7C14.004 7 13.5 7.504 13.5 8.125C13.5 8.746 14.004 9.25 14.625 9.25C15.246 9.25 15.75 8.746 15.75 8.125ZM2.0265 3.25H0.375C0.168 3.25 0 3.418 0 3.625V4.00825C0 4.603 0.6945 4.75 1.212 4.75L2.0265 3.25Z" fill="#4D5DDD"/>
          </svg>
        </Icon>
        <Info>
          <span>Silver 2018 Honda</span>
          <span>BXT 593</span>
        </Info>
      </Card>
      <Card>
        <Icon background="rgba(255, 192, 84, 0.33)">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.75 9.75V17.25H11.25V12.75H6.75V17.25H2.25V9.75H0L9 0.75L18 9.75H15.75ZM15 5.31975V1.5H12.75V3.06975L15 5.31975Z" fill="#FFC054"/>
          </svg>
        </Icon>
        <Info>
          43 Crescent Dr, Toronto, ON M3J 2P4
        </Info>
      </Card>
      <Card>
        <svg style={{marginRight: "30px"}} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="29" height="29" rx="5" fill="#F94E4E" fillOpacity="0.17"/>
          <rect width="3" height="18" transform="matrix(1 0 0 -1 6 23)" fill="#F94E4E"/>
          <rect width="3" height="18" transform="matrix(1 0 0 -1 21 23)" fill="#F94E4E"/>
          <rect width="3" height="5" transform="matrix(0 -1 -1 0 11 24)" fill="#F94E4E"/>
          <rect width="3" height="5" transform="matrix(0 -1 -1 0 11 8)" fill="#F94E4E"/>
          <rect width="3" height="5" transform="matrix(0 -1 -1 0 23 8)" fill="#F94E4E"/>
          <rect width="3" height="5" transform="matrix(0 -1 -1 0 24 24)" fill="#F94E4E"/>
        </svg>
        <Info>
          <span>Intact Policy Number:</span>
          <span>4659 0394 9032 2300</span>
        </Info>
      </Card>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Button style={{marginTop: '45px', marginBottom: '35px', fontSize: "18px", width: "284px"}}>Contact your Intact broker</Button>
        <img src={intact} alt="intact logo"/>
      </div>
    </Container>
  )
}

export default Profile;