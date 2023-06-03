import React from 'react';
import Monuments from '../data'
import styled from 'styled-components'

const Monument = () => {
  return (
    <Container>
      <Imgdiv src="https://www.holidify.com/blog/wp-content/uploads/2014/06/Taj-Mahal.jpg" />
      {/* <Imgdiv /> */}
      <Infodiv></Infodiv>
    </Container>
  );
}

const Container = styled.div`
    width:400px;
    height: 260px;
    background-color: black;
    display:flex;
    flex-direction: column;
`;

const Imgdiv=styled.img`
  flex:2;
  background-color: green;
  object-fit: cover;
  /* z-index: 2; */
`


const Infodiv = styled.div`
  flex:1;
  background-color: pink;
  /* z-index: 10; */
`;

export default Monument