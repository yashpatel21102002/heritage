import React from 'react'
import styled from 'styled-components'

const YCard = ({item}) => {
  return (
    <Container>
        
        <Imgdv src={item.img[0]}>
        
        </Imgdv>
        <Infodv>
            <Name>
                {item.name}
            </Name>
            <Loc>
                <Span>
                    {item.city},

                </Span>
                <Span>
                    {item.state}
                </Span>
            </Loc>
           
        </Infodv>
    </Container>
  )
}

const Container  = styled.div`
    /* background-color: black; */
    position: relative;
    height: 31vh;
    max-height: 32vh;
    min-width: 16vw;
    max-width: 16vw;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 2px 0;
    /* cursor: pointer; */
    :hover{
        /* opacity: rgba(black,0.1); */
        box-shadow: 0 0 5px 0 white;
        cursor: pointer;
    }
    /* cursor: pointer; */

    


`
const Imgdv = styled.img`
    flex: 2;
    /* background-color: white; */
    /* height: auto; */
    object-fit: cover;


`
const Infodv = styled.div`
    flex: 1;
    background-color: white;
    /* margin-top: 10px; */
    padding-top: 10px;
    padding-left: 5px;


`

const Span = styled.span`

    max-width: 16vw;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 5px;
    color: gray;
    font-weight: bold;
    
    

`

const Name = styled.h3`
    margin-left: 5px;
    overflow: hidden;
    text-overflow:ellipsis


`



const Loc = styled.div`
    display: flex;
    flex-direction: column;



`

export default YCard