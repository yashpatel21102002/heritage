import React from 'react'
import styled from 'styled-components'
import YMonument from './YMonument'

const Middle = () => {
  return (
    <Container>
        <Wrapper1>
            <SearchArea>
                <Span>
                    Search for Monument, City or State
                </Span>
                <Box>
                    <Input placeholder='Ahmedabad'/>
                    <Button>Search</Button>
                    <Button>Explore</Button>
                </Box>
            </SearchArea>
            <Result>
                <Result_Container1>
                    <Nav>All</Nav>
                    <Nav>East</Nav>
                    <Nav>West</Nav>
                    <Nav>North</Nav>
                    <Nav>South</Nav>
                    <Nav>Central</Nav>
                    


                </Result_Container1>
                <Result_Container2>
                    <Span><b>1</b> result found</Span>
                    <Cards>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>
                        <YMonument/>

                    </Cards>


                </Result_Container2>





            </Result>


        </Wrapper1>
        <Wrapper2>


        </Wrapper2>
    </Container>
  )
}

export default Middle

const Container = styled.div`
    width: 100vw-25px;
    height: 80vh;
    margin-top: 25px;
    margin-left: 25px;
    margin-right: 25px;
    display: flex;
    gap: 25px;


`

const Wrapper1 = styled.div`
    flex: 1;
    background-color: #eeebeb;
    border-radius: 25px 25px 25px 25px;
    display: flex;
    flex-direction: column;
    /* margin-top: 25px; */
    

`
const SearchArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 15px;
    margin-top: 20px;
    /* background-color: red; */
   

`

const Span= styled.span`
    

`

const Box = styled.div`
    /* background-color: red; */
    width: 100%;



`

const Input = styled.input`
    margin-top: 20px;
    
    outline: none;
    border: none;
    border-bottom: 1px solid gray;
    letter-spacing: 1px;
    background-color: #eeebeb;
    width: 60%;
    font-size: 17px;
    padding-bottom: 5px;



`

const Button = styled.button`
   margin-left: 10px;
   padding: 8px 12px;
   font-size: 15px;
   background-color: black;
   color: white;
   border: none;


`

const Result = styled.div`
    flex: 8;
    border-radius: 0 0 25px 25px;
    /* background-color: red; */
    margin-top: 10px;
    display: flex;
    

    

`

const Result_Container1 = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    gap: 25px;
    padding-top: 25px;
    



`

const Nav = styled.button`
    
    width: 80px;
    height: 49px;
    /* background-color: rgb(212, 173, 252,0.3); */
    background-image: url("data:image/jpeg;base64,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");

    
    color: black;
    border: none;
    font-weight: bolder;
    letter-spacing: 1px;
    cursor: pointer;
    align-items: center;
    justify-content: center;


`

const Result_Container2 = styled.div`
    flex: 4;
    /* background-color: blue; */
    /* border-top : 1px solid gray; */

    border-radius: 0 0 25px 0;
    padding-top:10px;
    padding-left: 10px;
    /* z-index:55; */
    

`




const Wrapper2 = styled.div`
    flex: 2;
    background-color: green;
    border-radius: 25px;


`

const Cards = styled.div`
    margin-top:15px;
    margin-right:10px;
    /* margin-left: 10px; */
    display:flex;
    flex-wrap:wrap;
    gap:15px;
    /* height: 500px; */
    height:58vh;
    overflow:scroll;
    overflow-x: hidden;

    
    ::-webkit-scrollbar{
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

    




`


