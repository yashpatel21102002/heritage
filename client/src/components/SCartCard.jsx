import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoCalendar } from "react-icons/io5";
import axios from "axios";





function SCartCard({item}) {
  const [monument,setMonument] = useState({})
  const [date,setDate] = useState(item.date)
  const [adults_count, setAdults] = useState(item.adults || 1);
  const [children_count,setChildren] = useState(item.children || 0)
  const [indian, setIndian] = useState(item.nationality === "Indian");
  const [total,setTotal] = useState()
  const [adultsPrice, setAdultsPrice] = useState();
  const [childrenPrice, setChildrenPrice] = useState();

  const token = localStorage.getItem('token');
  console.log(token);

  const tokenObject = JSON.parse(token);
  
  useEffect(() => {
    const getMonument = async () => {
      const helloMonument = (
        await axios.get(`http://localhost:8000/api/monument/${item.monumentId}`)
      ).data;
      console.log(helloMonument);
      setMonument(helloMonument);

      // setAdultsPrice(helloMonument?.price?.[indian ? 0 : 1]?.adult_price);
      // setChildrenPrice(helloMonument?.price?.[indian ? 0 : 1]?.child_price);
      // setTotal(helloMonument?.price?.[indian ? 0 : 1]?.adult_price);

      updateTotal(helloMonument, indian);
    };
    getMonument();
  }, [item.monumentId, indian]);

    const updateTotal = (monumentData, isIndian) => {
      const adultsPrice = monumentData?.price?.[isIndian ? 0 : 1]?.adult_price;
      const childrenPrice =
        monumentData?.price?.[isIndian ? 0 : 1]?.child_price;
      setTotal(adults_count * adultsPrice + children_count * childrenPrice);
    };

  // useEffect(() => {
  //   setAdults(1);
  //   setChildren(0);
  //   setTotal(monument?.price?.[indian ? 0 : 1]?.adult_price);
  // }, [indian]);

    useEffect(() => {
      if (monument && monument.price) {
        updateTotal(monument, indian);
      }
    }, [monument, indian, adults_count, children_count]);


  const minus = ()=>{
    if(adults_count-1 > 0){
      setAdults(adults_count-1);
      // setTotal(total - monument.price === undefined ? "":monument.price[indian ? 0 : 1].adult_price)
      setTotal((total) => total - adultsPrice);
    }
    
  }

  const minusChild = ()=>{
    if(children_count  > 0){
      setChildren(children_count-1)
      // setTotal(total - monument.price === undefined ? "":monument.price[indian ? 0 : 1].child_price)
      setTotal((total) => total - childrenPrice);
    }
  }

  const plus = ()=>{
    setAdults(adults_count + 1)
    setTotal((total) => total + adultsPrice);
    
  }
  const plusChild = ()=>{
    setChildren(children_count + 1)
    setTotal((total) => total + childrenPrice);
  }
  
  const handleSaveChanges = async () => {
    try {

      const data = {
        nationality: indian ? "Indian" : "Foreigner",
        adults: adults_count,
        children: children_count,
        total: total,
        token: tokenObject,
        date:date
      };

      // const TicketIdd = item._id;
      // const ticketid=JSON.parse(TicketIdd)
      console.log(item._id);

      const response = await axios.put(
        `http://localhost:8000/api/ticket/${item._id}`,
        data
      );
      console.log(response.data);

      window.location.reload();
      
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async () => {
    
      try {
        const response = await axios.delete(
          `http://localhost:8000/api/ticket/${item._id}`,
          {
            data: { token: tokenObject },
          }
        );
       
        window.location.reload();
      } catch (error) {
        console.log(error);
        window.location.reload();
      }
  }
 
 
  return (
    <Ticket>
      <TicketImg src={monument.img === undefined ? "" : monument.img[0]} />
      <Container>
        <TicketName>{monument?.name}</TicketName>
        <TicketName
          style={{ fontSize: "14px", color: "gray", fontWeight: "550" }}
        >
          {monument?.city}
        </TicketName>
        <TicketName
          style={{ fontSize: "14px", color: "gray", fontWeight: "550" }}
        >
          {monument?.state}
        </TicketName>
        <Wrapper1>
          <Sub>
            <Span>
              <Input
                placeholder={!date ? `dd/mm/yyyy` : date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </Span>
            <IoCalendar style={{ fontSize: "22px" }} />
          </Sub>
          <Sub1>
            <Filter
              defaultValue={indian ? "Indian" : "Foreigner"}
              onChange={(e) => {
                if (e.target.value === "Foreigner") {
                  setIndian(false);
                  setAdults(1);
                  setChildren(0);
                  updateTotal(monument, false);
                } else {
                  setIndian(true);
                  updateTotal(monument, true);
                }
              }}
            >
              <Option value="Indian">Indian</Option>
              <Option value="Foreigner">foreigner</Option>
            </Filter>
          </Sub1>
        </Wrapper1>
        <Wrapper2>
          <Sub3>
            <Info>
              Adults-Price :{" "}
              <b>
                {monument.price === undefined
                  ? ""
                  : monument.price[indian ? 0 : 1].adult_price}
              </b>
            </Info>
            <Info>
              Child-Price :{" "}
              <b>
                {monument.price === undefined
                  ? ""
                  : monument.price[indian ? 0 : 1].child_price}
              </b>
            </Info>
          </Sub3>
          <Sub4>
            <Dec>
              adults:
              <button style={{ padding: "0 5px" }} onClick={minus}>
                -
              </button>
              <span>{adults_count}</span>
              <button style={{ padding: "0 5px" }} onClick={plus}>
                +
              </button>
            </Dec>
            <Inc>
              children:
              <button style={{ padding: "0 5px" }} onClick={minusChild}>
                -
              </button>
              <span>{children_count}</span>
              <button style={{ padding: "0 5px" }} onClick={plusChild}>
                +
              </button>
            </Inc>
          </Sub4>
        </Wrapper2>
        <Wrapper3>
          <h2>
            Total :{" "}
            {!total
              ? monument.price === undefined
                ? ""
                : monument.price[0].adult_price
              : total}
            $
          </h2>
          <Button onClick={handleSaveChanges}>Save Changes</Button>
          <Button onClick={handleDelete}>Delete</Button>
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
width: 9vw;

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