import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import OrderData from "../OrderData";
import DateObject from "react-date-object";

const Container = styled.div`
  background-color: aliceblue;
  width: 100vw;
`;

const H1 = styled.h1`
  margin-left: 5%;
  margin-top: 2%;
`;

const Info = styled.div`
  position: relative;
  height: 15vh;
  display: flex;
`;

const HistoryInfo = styled.div`
  //display: flex;
  margin-left: 3%;
  margin-top: 3%;
`;

const Button = styled.button`
  margin: 1vh;
  padding: 1vh;
  background-color: purple;
  color: white;
  cursor: pointer;
`;

const DateInput = styled.div`
  position: absolute;
  right: 0;
  margin-top: 3%;
  padding: 1vh;
`;

const Date = styled.input`
  margin: 2vh;
`;

const OrderHistory = styled.table`
  width: 100%;

  padding: 3%;
`;

const Tr1 = styled.tr`
  background-color: #d0c4ce;
  column-gap: 0;
`;

const Tr = styled.tr``;
const Th = styled.th`
  justify-content: center;
`;
const Td = styled.td``;
const Detail = styled.div`
  margin-top: 7%;
  /* text-align: center; */
`;

const Order = () => {
  const [DateFrom, setDateFrom] = useState("");
  const [DateTo, setDateTo] = useState("");
  const [ShownData, setShownData] = useState(OrderData);

  useEffect(() => {
    if (DateFrom && DateTo) {
      setShownData(
        OrderData.filter((order) => {
          // console.log("Hello jii");
          console.log(DateFrom);
          console.log(DateTo);

          let date = new DateObject(order.date).format();
          //  console.log("Hello jii 22");

          return date >= DateFrom && date <= DateTo;
        })
      );
    }
  }, [DateFrom, DateTo]);

  function HandlePast() {
    setShownData(
      OrderData.filter((order) => {
        // console.log("Hello jii");
        let date1 = new DateObject(order.date).format();

        let date2 = new DateObject().format();

        //  console.log("Hello jii 22");

        return date1 <= date2;
      })
    );
  }

  function HandleUpcoming() {
    setShownData(
      OrderData.filter((order) => {
        let date1 = new DateObject(order.date).format();

        let date2 = new DateObject().format();

        return date1 > date2;
      })
    );
  }

  return (
    <Container>
      <Navbar />
      <H1>Order</H1>
      <Info>
        <HistoryInfo>
          <Button
            onClick={() => {
              setShownData(OrderData);
            }}
          >
            ALL
          </Button>
          <Button onClick={HandlePast}>Past Tickets</Button>
          <Button onClick={HandleUpcoming}>Upcoming Tickets</Button>
        </HistoryInfo>
        <DateInput>
          <Date
            type="date"
            onChange={(e) => setDateFrom(e.target.value)}
          ></Date>
          To
          <Date type="date" onChange={(e) => setDateTo(e.target.value)}></Date>
        </DateInput>
      </Info>
      <OrderHistory>
        <Tr1>
          <Td>
            <Th>
              <Detail>Name</Detail>
            </Th>
          </Td>
          <Td>
            <Th>Date</Th>
          </Td>
          <Td>
            <Th>Children</Th>
          </Td>
          <Td>
            <Th>Adult</Th>
          </Td>
          <Td>
            <Th>Total</Th>
          </Td>
        </Tr1>
        <tbody>
          {ShownData.map((order) => {
            return (
              <Tr>
                <Td>
                  <Detail>{order.Name}</Detail>
                </Td>
                <Td>
                  <Detail>{order.date}</Detail>
                </Td>
                <Td>
                  <Detail>{order.Children}</Detail>
                </Td>
                <Td>
                  <Detail>{order.Adult}</Detail>
                </Td>
                <Td>
                  <Detail>{order.Total}</Detail>
                </Td>
              </Tr>
            );
          })}
        </tbody>
      </OrderHistory>
    </Container>
  );
};

export default Order;
