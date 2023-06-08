import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components'

const Monument = ({item}) => {


  const handleClick = ()=>{
    window.location.href = `/monument/${item._id}`
  }
  
  return (
    
  
    <Container onClick={handleClick}>
      <Imgdiv src={item ? item.img[0] : ""} />
      <Infodiv>
        <InfoTitle>{item ? item.name : ""}</InfoTitle>
        <InfoCity>{item ? item.city:""}</InfoCity>
        <Price>$ {item ? item.price[0].adult_price : ""} <InfoCity style={{color:"black",fontSize:"16px"}}>per adult</InfoCity></Price>
      </Infodiv>
    </Container>
    

  );
}

const Container = styled.div`
  width: 26vw;
  height: 300px;
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  transition: transform 0.4s;
  /* border:0.5px solid black; */
  box-shadow: 0 0 5px 0 white;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Imgdiv=styled.img`
  flex:2;
  background-color: green;
  object-fit: cover;
  /* width:24vw; */
  height:173.33px;
`


const Infodiv = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  flex-direction: column;
  display: flex;
  padding-left: 10px;
  /* position: relative; */
  /* gap:10px; */
  /* z-index: -1; */
`;

const InfoTitle = styled.h1`
font-size: 25px;
font-weight: 500;
margin-top: 10px;
text-overflow: ellipsis;
overflow: hidden;

`; 

const InfoCity = styled.text`
  /* margin-left: 10px; */
  color: gray;
  font-size: 18px;
  margin-top: 0px;
  /* position: absolute; */
  margin-top:0px;
`;

const Price = styled.text`
  /* position: absolute; */
  margin-top: 13px;
  font-size: 25px;
  font-weight: 500;
`;

export default Monument