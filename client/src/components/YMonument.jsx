import React from 'react'
import styled from 'styled-components'

const YMonument = () => {
  return (
    <Container>
        <Image src='https://www.holidify.com/blog/wp-content/uploads/2014/06/Taj-Mahal.jpg'/>
        <Info>
            <Title>fkljqojf ooqnagoj ojisgopjpaoj oopgnopango</Title>
            <Span>havwli ame jaofj aosjofj oajsfoj joajfoj ojnaifiIFIH </Span>

        </Info>
    </Container>
  )
}

export default YMonument

const Container = styled.div`
    cursor: pointer;
    width: 7vw;
    height: auto;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 4px 0;

    :hover{
        box-shadow: 0px 2px 0px 0px;
    }



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
    width: 7vw;
    /* height: 20px; */
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
    margin-bottom: 2px;
    width: 6vw;
    text-overflow: ellipsis;
    overflow: hidden;

`