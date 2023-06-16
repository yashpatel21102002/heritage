import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SCartCard from "./SCartCard";
import axios from "axios";

const SCartCards = () => {
  const [ticket, setTicket] = useState([]);

  const token = localStorage.getItem('token');
  

  return (
    <SliderTicket>

      
    {/* Monument=monument; */}
      {ticket.map((item) => <SCartCard item={item} />)}
    </SliderTicket>
  );
};

export default SCartCards;

const SliderTicket = styled.div`
  display: flex;
  width: 45vw;
  height: 60vh;
  background-color: green;
  align-items: center;
  /* justify-content: center; */
  /* flex-direction: column; */
  position: relative;
  flex-wrap: wrap;
  overflow: hidden;
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #eeebeb;
    border-radius: 25px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #dd12dd76;
    border-radius: 25px;
  }
  overflow-x: hidden;
`;
