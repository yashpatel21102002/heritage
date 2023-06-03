import React from 'react'
import styled from 'styled-components'
import SMonument from './SMonument'
import Monuments from '../data'

const SMonuments = () => {
  return (
    <Container>
      {Monuments.map((item) => (
        <SMonument item={item} />
      ))}
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
