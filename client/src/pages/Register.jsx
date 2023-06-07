import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";

const Container = styled.div`
  position: relative;
  background-color: linen;

  width: 100%;
  height: 100vh;
`;
const Box = styled.div`
  position: absolute;
  margin-top: 8%;
  margin-left: 9%;
  width: 80%;
  height: 70%;
  text-align: center;
  justify-content: center;
  border-radius: 10px 10px;
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

const Regist = styled.div`
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
  margin-top: 30px;
  margin-left: 250px;
  border-radius: 10px 10px;
  background-color: #5870e7;
  width: 20%;
  height: 10%;
  color: #efefe7;
`;
const Input = styled.input`
  display: block;
  margin-top: 7%;
  margin-left: 190px;
  width: 40%;
  border: none;
  height: 6%;
  border-radius: 10px 10px;
`;
const Password = styled.input`
  display: block;
  margin-top: 7%;
  margin-left: 190px;
  width: 40%;
  border: none;
  height: 6%;
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

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [password, setpassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/register",
        { name, email, contact, password }
      );

      // Save the token to local storage or cookies
      window.location.href = "/single";

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
          <Img src="https://monomousumi.com/wp-content/uploads/Taj-Mahal.jpg"></Img>
          <Regist>
            <Title>Already Registerd?</Title>
            <Link href="/">Login Now</Link>
          </Regist>
        </DescBox>
        <LoginBox>
          <H2>Login</H2>
          <Input
            type="text"
            placeholder="Username"
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
