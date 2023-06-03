import React from 'react'
import styled from 'styled-components'
import SMonument from './SMonument'

const SMonuments = () => {
  return (
    <Container>
      <SMonument />
      <SMonument />
      <SMonument />
      <SMonument />
      <SMonument />
      <SMonument />
      <SMonument />
      <SMonument />
      <SMonument />
      <SMonument />
      <SMonument />
      <SMonument />
      <SMonument />
      <SMonument />
    </Container>
  );
}

export default SMonuments

const Container = styled.div`
    
display:flex;
 flex-wrap:wrap;
 margin-top:40px;
 margin-right:120px;
 margin-left: 120px;
 gap: 48px;
 /* background-color: red; */
`;
