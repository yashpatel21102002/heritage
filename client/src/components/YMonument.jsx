import React from 'react'
import styled from 'styled-components'

const YMonument = () => {
  return (
    <Container>
        <Image src='https://www.holidify.com/blog/wp-content/uploads/2014/06/Taj-Mahal.jpg'/>
        <Info>
            <Title>Taj-Mahal</Title>
            <Span>Patan , Gujarat</Span>

        </Info>
    </Container>
  )
}

export default YMonument

const Container = styled.div`
    width: 7vw;
    height: 160px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 4px 0;



`

const Image = styled.img`
    flex: 2;
    /* width: 50px; */
    object-fit:cover;

`

const Info = styled.div`
    flex: 1;
    background-color: white;
    


`
const Title = styled.h1`
    /* width: 130px; */
    width: 130px;
    height: 20px;
    /* background-color: red; */
    font-size: 15px;
    margin-top: 5px;
    margin-left: 5px;
    text-overflow: ellipsis;
    overflow: hidden;



`

const Span = styled.div`
    
    font-size: 12px;
    color: #6a6767;
    font-weight: bold;
    margin-left: 5px;
    margin-top: 3px;

`