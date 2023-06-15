import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SCartCard from "./SCartCard";
import axios from "axios";

const SCartCards = ({ id }) => {
  const [monument, setMonument] = useState([]);


  useEffect(() => {
    const getMonument = async () => {
      try {
        
        const res = await axios.get("http://localhost:8000/api/monument/" + id);

        setMonument(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMonument();
  }, [id]);

  return (
    <SliderTicket>

      
    {/* Monument=monument; */}
      {monument.map((item) => <SCartCard item={item} />)}
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
