import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";


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

`;

const Img = styled.img`
  object-fit: cover;
  width: 35vw;
  opacity: 0.6;
  

`;

const Register = styled.div`
position: absolute;
align-self: center;
justify-self: center;
left: 8vw;

  
`;

const Title = styled.p`
  font-weight: 500;
  /* color: white; */
  font-size: 26px;
 
`;
const Link = styled.a`
  color: blue;
  font-weight: 600;
  font-size: 18px;
  
`;

const LoginBox = styled.div`

  flex: 1;
  background-color: #efefe7;
  /* height: 60vh; */
  display: flex;
  flex-direction: column;
  height: 49vh;
  align-items: center;
  justify-content: center;
  gap: 20px;


`;

const H2 = styled.h2`
 
`;
const Username = styled.input`
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

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function submit(e) {
    
   
    

    e.preventDefault();
    try {
      document.getElementById("erroe").innerHTML = "";
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        { email, password }
      );
      const token = response.data.accessToken;

      // Save the token to local storage or cookies
      localStorage.setItem("token", JSON.stringify(token));
      // console.log(response.data);
      
      setTimeout(()=>{
        window.alert("SUCCESS")

        window.location.href = "/";
      },1000)

      // Redirect the user to the dashboard
      
    } catch (e) {
      
      document.getElementById("erroe").innerHTML = "Wrong credentials!!!";
      console.log(e);
    }
  }

  return (
    <Container>
      <Box>
        <DescBox>
          <Img src="https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Khajuraho1.jpg"></Img>
          <Register>
            <Title>Don't Have Account Yet?</Title>
            <Link href="/register">Register Now</Link>
          </Register>
        </DescBox>
        <LoginBox>
          <H2>Login</H2>
          <Username
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          ></Username>
          <Password
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          ></Password>
          <Button type="submit" onClick={submit} value="Submit" />
          <Warning id="erroe"></Warning>
        </LoginBox>
      </Box>
    </Container>
  );
};

export default Login;
