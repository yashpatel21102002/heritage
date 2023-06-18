import React, { useEffect } from 'react'
import styled from 'styled-components'
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KEY =
  "pk_test_51NDTd8SCEbCeAi26HCHQo52T6NP1UXpvwgaJ5vPcYxVmGgHZ6LqwPYoGaxbXxgUc77RVTIm3X3p0W30IN7C6PTGR001eB3ZpTv";




const YCartTotal = () => {

  const navigate = useNavigate();

  const onToken = async (token) => {
    try {
      // Make a request to your backend server to process the payment
      // console.log(token.id);
      const response = await axios.post("http://localhost:8000/api/payment", {
        token: token.id,
        amount: 5300, // Amount in cents
      });

      // Handle the success response
      
      // console.log(response);

      // Redirect to the success page
      navigate("/success");
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };
  return (
    <Container>
      <Wrapper1>
        <Items style={{ justifyContent: "center" }}>
          <Item>
            <b>1. </b>Payment is not refundable
          </Item>

          <Item>
            <b>2. </b>Please choose the date valid date
          </Item>
          <Item>
            <b>3. </b>Once paid pdf of ticket will be sent!
          </Item>
        </Items>
      </Wrapper1>
      <Wrapper2>
        <Items style={{ alignItems: "center", gap: "3px" }}>
          <Item>Total : 5000</Item>

          <Item>Extra : 200</Item>
          <Item>Grand Total : 5300</Item>

          <StripeCheckout
            // {/* name="Lama Shop" */}
            // {/* image="https://avatars.githubusercontent.com/u/1486366?v=4" */}
            // {/* billingAddress shippingAddress description= */}
            // {/* {`Your total is $ ${cart.total}`} */}
            amount={5300 * 100}
            token={onToken}
            stripeKey={KEY}
            currency="INR"
          >
            <Button>Checkout</Button>
          </StripeCheckout>
        </Items>
      </Wrapper2>
    </Container>
  );
}

export default YCartTotal


const Container = styled.div`
  
  flex: 1;
  /* background-color: red; */
  display: flex;
  


`

const Wrapper1 = styled.div`
flex: 1;
/* background-color: blue; */
  display: flex;
  /* padding-top: 10px; */
  padding-left: 10px;
  align-items: center;
  justify-content: center;

  


`
const Wrapper2 = styled.div`
  flex: 1;
 
/* background-color: blue; */
  display: flex;
  /* padding-top: 10px; */
  justify-content: center;
  /* padding-left: 5vw; */
  align-items: center;

`

const Items = styled.ul`
  display: flex;
  flex-direction: column;
  
  /* gap: 5px; */
  /* height: 16vh; */
  /* justify-content: ; */
  /* align-items: center; */
  color: white;
  
  
  
  `

const Item = styled.li`
letter-spacing: 1.5px;
  gap: 3px;
  /* align-items: ; */
  display: flex;
  align-items: center;

`

const Button = styled.button`
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 5px 15px;
  :hover{
    box-shadow: 0 0px 5px 0;
    cursor: pointer;
  }
  
  


`