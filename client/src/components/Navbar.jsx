import React from 'react'
import styled from 'styled-components'
import {MdFort} from 'react-icons/md'
import {GrServices} from 'react-icons/gr'
import {MdLocalOffer} from 'react-icons/md'
import {SiYourtraveldottv} from 'react-icons/si'
import {CiCircleMore} from 'react-icons/ci'

const Navbar = () => {
  return (
        <Container>
            <Header>
                <Title>HERITAGE.COM</Title>
            </Header>
            <Header2>
                <Items>
                    <Item><Icon><MdFort size="25px"/></Icon><Span>Monuments</Span></Item>
                    <Item><Icon><GrServices size="25px"/></Icon><Span>Services</Span></Item>
                    <Item><Icon><MdLocalOffer size="25px"/></Icon><Span>Offers</Span></Item>
                    <Item><Icon><SiYourtraveldottv size="25px"/></Icon><Span>Travelling</Span></Item>
                    <Item><Icon><CiCircleMore size="25px"/></Icon><Span>More</Span></Item>
                </Items>
                <Button>
                    My Account
                </Button>

            </Header2>
        </Container>
  )
}

export default Navbar

const Container = styled.div`
    display: flex;
    width: 100vw;
    gap: 100px;
    height: 60px;

    

`

const Header = styled.div`
    flex: 1;
    display: flex;
    color: #eeebeb;
    justify-content: center;
    align-items: center;

`

const Title = styled.h1`
    


`

const Header2 = styled.div`
    flex: 4;
    background-color: #eeebeb;
    display: flex;
    justify-content: space-between;
    border-radius:50px 0px 0px 50px;
    align-items: center;
    

`

const Items = styled.ul`
    
    display: flex;
    list-style: none;
    

`

const Item = styled.li`
    padding-left: 110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;



`

const Icon = styled.div`
    


`

const Span = styled.span`
    letter-spacing: 2px;

`

const Button = styled.button`
    padding : 10px 30px;
    border-radius: 25px 0 0 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color:white;
    cursor:pointer;
    border: none;

    :hover{
        background-color: #eeebeb;
        color: black;
        border:1px solid black;
    }


`
