import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import styled from "styled-components";
import AuthForm from "./AuthForm";
import Button from "./ButtonOrange";

const Label = styled.label`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 170%;
  letter-spacing: 0.02em;
  color: #000000;
`;

const Input = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 170%;
  letter-spacing: 0.02em;
  color: #7D8085;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #E5E5E5;
  width: 100%;
`;

const FormGroup = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const HelpText = styled.span`
font-family: Roboto;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 170%;

/* or 31px */
text-align: right;
letter-spacing: 0.02em;

color: #7D8085;
`;

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const onSubmit = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then(val => {
        history.push("/app");
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <AuthForm title="Welcome Back," subtitle="Sign in to continue">
      <FormGroup>
        <Label>Email</Label>
        <Input value={email} onChange={e => setEmail(e.target.value)} style={{textDecoration: 'underline'}}/>
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <div style={{display: "flex", flexDirection: "row", width: "100%", overflow: "hidden"}}>
          <Input value={password} onChange={e => setPassword(e.target.value)} type={visible ? "text" : "password"}/>
          <span onClick={() => setVisible(!visible)} style={{float: "right", position: 'absolute', right: "48px", cursor: "pointer"}}>
            { visible ? (
              <svg fill="#61656D" width="24" height="24" viewBox="0 0 24 24"><path d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z"/></svg>
            ) : (
              <svg fill="#61656D" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 7.449-11.985 7.449c-7.18 0-12.015-7.449-12.015-7.449s4.446-6.551 12.015-6.551c7.694 0 11.985 6.551 11.985 6.551zm-7 .449c0-2.761-2.238-5-5-5-2.761 0-5 2.239-5 5 0 2.762 2.239 5 5 5 2.762 0 5-2.238 5-5z"/></svg>
            )}
          </span>
        </div>
        <div style={{display: "flex", justifyContent: "flex-end", width: "100%"}}>
          <HelpText style={{cursor: "pointer", marginTop: "14px"}}>Forgot password?</HelpText>
        </div>
      </FormGroup>
      <div style={{flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%"}}>
        <Button onClick={onSubmit} style={{width: "100%", marginBottom: "32px"}}>Login</Button>
        <HelpText>
          New user? <Link style={{textDecoration: "none", color: "#F94E4E"}} to="/signup">Signup</Link>
        </HelpText>
      </div>
    </AuthForm>
  );
}

export default Login;