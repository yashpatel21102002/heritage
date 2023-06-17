import React from 'react'
import styled from 'styled-components'
import StripeCheckout from "react-stripe-checkout";

const KEY = process.env.STRIPE_KEY;

const YCartTotal = () => {
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
            // {/* amount={cart.total * 100} */}
            // {/* token={onToken} */}
            stripeKey={KEY}
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