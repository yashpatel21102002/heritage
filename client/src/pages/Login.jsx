import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";

const Container = styled.div``;
const Box = styled.div`
  position: absolute;
  margin-top: 8%;
  margin-left: 9%;
  width: 80%;
  height: 60%;
  text-align: center;
  justify-content: center;
  display: flex;
`;
const DescBox = styled.div`
  position: relative;
  background-color: #8f3592;
  height: 100%;
  width: 50%;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  opacity: 0.8;
`;

const Register = styled.div`
  position: absolute;
  top: 40%;
  left: 35%;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: larger;
  color: whitesmoke;
`;
const Link = styled.a`
  margin-left: 0vh;
  color: whitesmoke;
`;

const LoginBox = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background-color: #efefe7;
`;

const H2 = styled.h2`
  margin-top: 50px;
  margin-left: 250px;
  border-radius: 10px 10px;
  background-color: #5870e7;
  width: 20%;
  height: 10%;
  color: #efefe7;
`;
const Username = styled.input`
  display: block;
  margin-top: 10%;
  margin-left: 190px;
  width: 40%;
  border: none;
  height: 7%;
  border-radius: 10px 10px;
`;
const Password = styled.input`
  display: block;
  margin-top: 10%;
  margin-left: 190px;
  width: 40%;
  border: none;
  height: 7%;
  border-radius: 10px 10px;
`;
const Button = styled.input`
  font-size: 130%;
  height: 10%;
  margin-top: 50px;
  margin-left: 13px;
  border-radius: 10px 10px;
  background-color: #5870e7;
  width: 20%;
  border: none;
  font-weight: 1000;
  cursor: pointer;
  color: #efefe7;
`;

const Warning = styled.p`
  width: 60%;
  margin-left: 23%;
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
      const token = response.data.accesstoken;

      // Save the token to local storage or cookies
      localStorage.setItem("token", token);

      // Redirect the user to the dashboard

      window.location.href = "/single";
    } catch (e) {
      document.getElementById("erroe").innerHTML = "Wrong credentials!!!";
      console.log(e);
    }
  }

  return (
    <Container>
      <Box>
        <DescBox>
          <Img src="https://monomousumi.com/wp-content/uploads/Taj-Mahal.jpg"></Img>
          <Register>
            <Title>Don't Have Account Yet?</Title>
            <Link href="/register">Login Now</Link>
          </Register>
        </DescBox>
        <LoginBox>
          <H2>Login</H2>
          <Username
            type="text"
            placeholder="Username"
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
