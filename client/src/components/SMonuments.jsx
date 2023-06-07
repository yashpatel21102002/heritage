import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SMonument from './SMonument'
// import Monuments from '../data'
import axios from'axios'

const SMonuments = ({ serType, serSrc}) => {
  
  // console.log(serType, serSrc);
  const [monuments, setMonuments] = useState([]);

  useEffect(() => {
    const getMonuments = async () => {
      try {

        let res;

        if (serType && serSrc) {
          if (serSrc !== "all") {
            
            res = await axios.get(
              `http://localhost:8000/api/monuments?searchType=${serType}&searchSrc=${serSrc}`
            );
            
          }
          else {
            res = await axios.get("http://localhost:8000/api/monuments");
          }
        }

          setMonuments(res.data);
        
      } catch (error) {
        console.log(error);
      }
    };
    getMonuments();
  }, [serType, serSrc]);


  return (
    <Container>
      {
        monuments.map((item) => <SMonument item={item} />)
      }
    </Container>
  );
}

export default SMonuments

const Container = styled.div`
    
display:flex;
 flex-wrap:wrap;
 margin-top:40px;
 width:84.5vw;
 gap: 48px;
 /* background-color: red; */
 margin-left: 7.25vw;
 /* justify-content: space-between; */
`;
