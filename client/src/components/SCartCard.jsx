import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoCalendar } from "react-icons/io5";
import axios from "axios";



function SCartCard({item}) {
  const [monument,setMonument] = useState({})
  useEffect(()=>{
    const getMonument = async ()=>{
      const helloMonument = (await axios.get(`http://localhost:8000/api/monument/${item.monumentId}`)).data;
      console.log(helloMonument)
      setMonument(helloMonument)

    }
    getMonument()
  },[])
 
  return (
    <Ticket>
      <TicketImg src={monument.img === undefined ? "":monument.img[0]}/>

      <TicketName>{monument?.name}</TicketName>
      
      <CalenderLogo/>

      <FilterCity>
        <FilterStateOption selected disabled>
          Select Tourist Type
        </FilterStateOption>
        <FilterStateOption>Indian</FilterStateOption>
        <FilterStateOption>Foreigner</FilterStateOption>
      </FilterCity>
      {/* <H1>no of travelers</H1> */}

      <TIcketText>Travellers Adult:00 Child:00</TIcketText>
      <TextAdult>Adults</TextAdult>
      <TextAdult style={{ marginLeft: "30vw" }}>Children</TextAdult>

      <CounterButton>+</CounterButton>
      <Counter>56</Counter>
      <CounterButton style={{ marginLeft: "16.5vw" }}>-</CounterButton>

      <CounterButton style={{ marginLeft: "30vw" }}>+</CounterButton>
      <Counter style={{ marginLeft: "31.8vw" }}>56</Counter>
      <CounterButton style={{ marginLeft: "33.8vw" }}>-</CounterButton>

      <TicketTotal>Total:500 rupiya</TicketTotal>
    </Ticket>
  );
}

export default SCartCard



const Ticket = styled.div`
  width: 41vw;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 220px; //25vh
  background-color: white;
  margin-left: 2vw;
  display: flex;
  /* border: 2px solid gray; */
`;

const TicketImg = styled.img`
  margin-top: 0px;
  margin-left: 0px;
  width: 12vw;
  height: 100%;
  /* background-color: pink; */
  object-fit: cover;
`;

const TicketName = styled.h3`
  margin-left: 10px;
  /* font-size: 27px; */
  margin-top: 5px;
  font-weight: 550;
`;

const Date = styled.div`
  width: 125px;
  height: 3vh;
  background-color: white;
  margin-top: 5.5vh;
  margin-left: 12.7vw;
  position: absolute;
  border: 2px solid black;
`;
const CalenderLogo = styled(IoCalendar)`
  width: 2vw;
  height: 4vh;
  /* background-color: black; */
  margin-top: 38px;
  margin-left: 0.5vw;
`;

const FilterStateOption = styled.option``;

const FilterCity = styled.select`
  margin-top: 4.5vh;
  margin-left: 3vw;
  padding-left: 15px;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  font-size: medium;
  color: #beb8b8;
`;

const TicketTotal = styled.h1`
  position: absolute;
  margin-top: 190px;
  margin-left: 200px;
  font-size: 20px;
  font-weight: 500;
`;

const Counter = styled.div`
  height: 30px;
  width: 30px;
  position: absolute;
  margin-top: 150px;
  margin-left: 14.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: black; */
`;

const TextAdult = styled.h1`
  position: absolute;
  font-weight: 550;
  font-size: 22px;
  margin-top: 113px;
  margin-left: 12.7vw;
`;
const CounterButton = styled.button`
  position: absolute;
  height: 30px;
  width: 30px;
  margin-top: 150px;
  margin-left: 12.7vw;
`;
const TIcketText = styled.div`
  width: 60%;
  height: auto;
  /* background-color: black; */
  position: absolute;
  margin-top: 85px;
  margin-left: 12.7vw;
`;
