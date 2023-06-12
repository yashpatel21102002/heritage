import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";
// import {BrowserRouter as router,routes,route,Link} from 'react-router-dom' 

const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 100vh;
`;
const Box = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
 
  width: 70vw;
  box-shadow: 0 0 5px 0;

  
`;
const DescBox = styled.div`
  

  flex: 1;
  width: 35vw;
  display: flex;

  position: relative;
  /* background: rgba(0,0,0,0.5); */
  background: rgba(0,0,0,0.2);

`;

const Img = styled.img`
  object-fit: cover;
  width: 35vw;
  /* opacity: 0.5; */
  z-index:0; 
 opacity: 0.4;

  

`;
const Regist = styled.div`
position: absolute;
align-self: center;
justify-self: center;
left: 11.8vw;

  
`;



const Title = styled.p`
  font-weight: 700;
  color: black;
  /* box-shadow: 0 0 5px 0; */
  font-size: 26px;
 
`;
const Linke = styled.a`
  color: blue;
  font-weight: 600;
  font-size: 18px;
  /* box-shadow: 0 0 5px 0; */

  
`;

const LoginBox = styled.div`

  flex: 1;
  background-color: #efefe7;
  /* height: 60vh; */
  display: flex;
  flex-direction: column;
  height: 56.5vh;
  align-items: center;
  justify-content: center;
  gap: 20px;


`;

const H2 = styled.h2`
 
`;
const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px 15px;
  width: 40%;
  font-size: 17px;
  border-radius: 25px;
  box-shadow: black 0 0 8px 0;
`;
const Password = styled.input`
border: none;
  outline: none;
  padding: 10px 15px;
  width: 40%;
  font-size: 17px;
  border-radius: 25px;
  box-shadow: black 0 0 8px 0;
 
`;
const Button = styled.input`
  padding: 10px 15px;
  cursor: pointer;
  background-color: violet;
  border:none;
  box-shadow: black 0 0 8px 0;

`;

const Warning = styled.p`
  
  height: 20px;
`;

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [password, setpassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/api/auth/register",
        { name, email, contact, password }
      );

      // Save the token to local storage or cookies
      setTimeout(()=>{
        window.alert("SUCCESS")

        window.location.href = "/login";
      },1000)
   

      // Redirect the user to the dashboard
      //    window.location.href = "/single";
    } catch (e) {
      if (e.status === 500) {
        window.alert("internal server erroe");
      } else {
        window.alert("User already exist");
      }
      console.log(e);
    }
  }

  return (
    <Container>
      <Box>
        <DescBox>
          <Img src="https://www.re-thinkingthefuture.com/wp-content/uploads/2020/06/A1100-UNESCO-Heritage-Cultural-Sites-in-India-Sun-Temple-Image-2.jpg"></Img>
          <Regist>
            <Title>Already Registerd?</Title>
            
            <Linke href="/login">Login Now</Linke>
          </Regist>
        </DescBox>
        <LoginBox>
          <H2>Register</H2>
          <Input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setname(e.target.value);
            }}
          ></Input>
          <Input
            type="email"
            placeholder="E-mail"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          ></Input>
          <Input
            type="text"
            placeholder="number"
            onChange={(e) => {
              setcontact(e.target.value);
            }}
          ></Input>
          <Password
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          ></Password>
          <Button type="submit" onClick={submit} value="Submit" />
          <Warning id="error"></Warning>
        </LoginBox>
      </Box>
    </Container>
  );
};

export default Register;
