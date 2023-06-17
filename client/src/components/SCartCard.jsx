import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoCalendar } from "react-icons/io5";
import axios from "axios";
import {Calendar} from "@natscale/react-calendar"





function SCartCard({item}) {
  const [monument,setMonument] = useState({})
  const [date,setDate] = useState()
  const [adults,setAdults] = useState(1)
  const [children,setChildren] = useState(0)
  const [total,setTotal] = useState(0)
  
  const minus = ()=>{
    if(adults-1 > 0){
      setAdults(adults-1);
     
    }
    
  }

  const minusChild = ()=>{
    if(children  > 0){
      setChildren(children-1)
    }
  }

  const plus = ()=>{
    setAdults(adults+1)
  }
  const plusChild = ()=>{
    setChildren(children+1)
  }

  useEffect(()=>{
    const getMonument = async ()=>{
      const helloMonument = (await axios.get(`http://localhost:8000/api/monument/${item.monumentId}`)).data;
      console.log(helloMonument)
      setMonument(helloMonument)

    }
    getMonument()
  },[])
 
 
  return (
    <Ticket>
      <TicketImg src={monument.img === undefined ? "":monument.img[0]}/>
      <Container>
        <TicketName>{monument?.name}</TicketName>
        <TicketName style={{fontSize:"14px",color:"gray",fontWeight:'550'}}>{monument?.city}</TicketName>
        <TicketName style={{fontSize:"14px",color:"gray",fontWeight:'550'}}>{monument?.state}</TicketName>
        <Wrapper1>
          <Sub>
            <Span><Input placeholder={!date ? `dd/mm/yyyy`:date} onChange={(e)=>{setDate(e.target.value)}}/></Span>
            <IoCalendar style={{fontSize:'22px'}}/>
          </Sub>
          <Sub1>
            <Filter>
              <Option>Indian</Option>
              <Option>foreigner</Option>
            </Filter>
          </Sub1>
        </Wrapper1>
        <Wrapper2>
        <Sub3>
          <Info>
            Adults-Price : <b>{monument.price === undefined ? "":monument.price[0].adult_price}</b>
          </Info>
          <Info>
            Child-Price : <b>{monument.price === undefined ? "":monument.price[0].child_price}</b>
          </Info>
            
          </Sub3>
          <Sub4>
          <Dec>
            adults: 
            <button style={{padding:"0 5px"}} onClick={minus}>-</button>
            <span>{adults}</span>
            <button style={{padding:"0 5px"}} onClick={plus}>+</button>

            </Dec>
            <Inc>
              children: 
            <button style={{padding:"0 5px"}} onClick={minusChild}>-</button>
            <span>{children}</span>
            <button style={{padding:"0 5px"}} onClick={plusChild}>+</button>

            </Inc>
            
            
          </Sub4>
        

        </Wrapper2>
        <Wrapper3>
          <h2>Total : 625$</h2>
          <Button>
            Save Changes
          </Button>
          <Button>
            Delete
          </Button>

        </Wrapper3>

      </Container>
        
      
      
    </Ticket>
  );
}

export default SCartCard





const Ticket = styled.div`
  width: 41vw;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 220px; //25vh
  background-color: white;
  margin-left: 2vw;
  display: flex;
  /* border: 2px solid gray; */
`;

const TicketImg = styled.img`
  margin-top: 0px;
  margin-left: 0px;
  width: 12vw;
  height: 100%;
  /* background-color: pink; */
  flex: 2;
  object-fit: cover;
`;

const TicketName = styled.h3`
  padding-left: 5px;
`;

const Container = styled.div`
  flex: 5;
  /* background-color: red; */


`

const Wrapper1 = styled.div`
  
  /* background-color: blue; */
  height: 50px;
  display: flex;

`

const Sub = styled.div`
  /* background-color: green; */
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 2px;
  align-items: center;
  cursor: pointer;


`

const Span = styled.span`
  width: 10vw;
  /* height: 4vh; */
  border: 1px solid black;
  padding: 5px;
  background-color: #f6f2f6;


`
const Sub1 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 2px;
  align-items: center;
 


`

const Filter = styled.select`
  width: 10vw;
  /* height: 4vh; */
  border: 1px solid black;
  padding: 5px;
  background-color: #f6f2f6;


`
const Option = styled.option`
  


`


const Wrapper2 = styled.div`
  
  /* background-color: blue; */
  height: 70px;
  display: flex;

`

const Sub3 = styled.div`
  flex: 1;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  gap: 6px;
  align-items: center;
  flex-direction: column;
 


`
const Sub4 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  /* background-color: blue; */
  gap: 2px;
  align-items: center;
  /* flex-direction: column; */
  /* background-color: red; */
  gap: 1vw;
 


`

const Input = styled.input`
  
outline: none;
border: none;
font-size: 16px;
background-color:#f6f2f6 ;

`

const Info = styled.span`
  
  padding-left: 5px;


`

const Dec = styled.div`
  display: flex;
  gap: 5px;
  
`
const Inc = styled.div`
  display: flex;
  gap: 5px;
  

`

const Wrapper3 = styled.div`
  background-color: #fd95fd;
  height: 42.5px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  /* justify-content: space-between; */
  /* margin-right: 18px; */


`

const Button = styled.button`
  margin-left: 15px;
  padding: 5px 20px;
  background-color: magenta;
  box-shadow: 0 0 3px 0 black;
  border: none;
  cursor: pointer;
  :hover{
    box-shadow: 0 0 8px 0;
  }
`