import React, { useState } from 'react'
import styled from 'styled-components'
import {MdFort} from 'react-icons/md'
import {GrServices} from 'react-icons/gr'
import {MdLocalOffer} from 'react-icons/md'
import {SiYourtraveldottv} from 'react-icons/si'
import {CiCircleMore} from 'react-icons/ci'

const Navbar = () => {
   const [ind,setind]=useState(0);


   function handleevent(){
    if(ind===0){
      setind(1);
      document.getElementById("important").style.height="40vh";
      document.getElementById("important").style.width="120px";

    }
    else{
      setind(0);
      document.getElementById("important").style.height = "0vh";
      document.getElementById("important").style.width = "0vh";
    }
   }
  return (
    <Container>
      <Header>
        <Title>HERITAGE.COM</Title>
      </Header>
      <Header2>
        <Items>
          <Item>
            <Icon>
              <MdFort size="25px" />
            </Icon>
            <Span>Monuments</Span>
          </Item>
          <Item>
            <Icon>
              <GrServices size="25px" />
            </Icon>
            <Span>Services</Span>
          </Item>
          <Item>
            <Icon>
              <MdLocalOffer size="25px" />
            </Icon>
            <Span>Offers</Span>
          </Item>
          <Item>
            <Icon>
              <SiYourtraveldottv size="25px" />
            </Icon>
            <Span>Travelling</Span>
          </Item>
          <Item>
            <Icon>
              <CiCircleMore size="25px" />
            </Icon>
            <Span>More</Span>
          </Item>
        </Items>

        <Button onClick={handleevent}>My Account </Button>

        {localStorage.getItem("token") == null ? (
          <Popup id="important">
            <Button1>
              <A href="/login">Login</A>
            </Button1>
            <Button1>
              <A href="/register">Register</A>
            </Button1>
          </Popup>
        ) : (
          <Popup id="important">
            <Button1>
              <A href="/order">Order</A>
            </Button1>
            <Button1>
              <A href="/">Logout</A>
            </Button1>
          </Popup>
        )}
      </Header2>
    </Container>
  );
}

export default Navbar

const Container = styled.div`
    display: flex;
    width: 100vw;
    gap: 100px;
    height: 60px;

    

`

const Header = styled.div`
    flex: 1;
    display: flex;
    color: #eeebeb;
    justify-content: center;
    align-items: center;

`

const Title = styled.h1`
    


`

const Header2 = styled.div`
    flex: 4;
    background-color: #eeebeb;
    display: flex;
    justify-content: space-between;
    border-radius:50px 0px 0px 50px;
    align-items: center;
    

`

const Items = styled.ul`
    
    display: flex;
    list-style: none;
    cursor: pointer;

`

const Item = styled.li`
    padding-left: 110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;



`

const Icon = styled.div`
    


`

const Span = styled.span`
    letter-spacing: 2px;

`



const Button = styled.button`
    padding : 10px 30px;
    height: 35px;
    border-radius: 25px 0 0 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color:white;
    cursor:pointer;
    border: none;

    :hover{
        background-color: #eeebeb;
        color: black;
        border:1px solid black;
    }


`


const Popup=styled.div`
z-index: 3;
    position: fixed;
    top:6.6vh;
    right: 0px;
     height:0vh;
     width: 0px;
     display: block;
     background-color: black;
     display: flex;
     flex-direction: column;
`

const Button1=styled.button`
 margin: 5%;
 color: white;
`;

const A=styled.a`
  
`




