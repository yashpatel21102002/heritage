import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import Middle from '../components/Middle'

const Home = () => {
  return (
    <Container>
      <Navbar/>
      <Middle/>
      
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image:linear-gradient(#5C469C,#D4ADFC);



`