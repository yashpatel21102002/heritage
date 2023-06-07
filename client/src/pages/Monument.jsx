import { useState } from "react";
import styled from "styled-components";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { BsCart } from "react-icons/bs";



function Single() {
  const [booking, setbooking] = useState(0);
  function handlebooking() {
    setbooking(booking + 1);
  }

  return (
    <div>
      {/* <div>Hello jii</div> */}
      {/* navbar */}
      <Navbar>Navbar</Navbar>
      <Image src="https://i.pinimg.com/736x/96/bd/07/96bd07ec9a65b8794636589ed75de151.jpg"></Image>
      <Navbarmini>
        <Button>About</Button>
        <Button>Information</Button>
        <Button>Ticket Info</Button>

        <AddToCart onClick={handlebooking}>Add To Cart</AddToCart>
        <Cart>
          <BsCart />
          <Booking>{booking}</Booking>
        </Cart>
      </Navbarmini>
      <H1>About</H1>
      <About>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
        consequuntur corporis recusandae veniam dignissimos, autem deleniti
        assumenda modi laudantium minus, quos adipisci eius tempora praesentium
        quaerat similique, enim laborum sequi ab rerum incidunt molestias!
        Nihil.
      </About>
      <H1>Information</H1>
      <Information>
        <Info>
          <h2>Location</h2>
          <p>Agra</p>
        </Info>

        <Info>
          <h2>How To Reach</h2>
          <table>
            <tr>
              <td>Nearest Airport:</td>
              <td>Indira gandhi International Airport</td>
            </tr>
            <tr>
              <td>Nearest Railway-Station:</td>
              <td>Agra Railway Station</td>
            </tr>
            <tr>
              <td>Nearest Bus-station: </td>
              <td> Agra Bus Station</td>
            </tr>
          </table>
        </Info>

        <Info>
          <h2>Timing</h2>
          <table>
            <tr>
              <td>Opening Time:</td>
              <td>10:00am</td>
            </tr>
            <tr>
              <td>Closing Time:</td>
              <td>06:00pm</td>
            </tr>
          </table>
        </Info>
      </Information>

      <H1>Ticket Information</H1>
      <TicketInfo>
        <TicketPrice>
          <PriceInfo>
            <Visitor>Indian Visitor</Visitor>
            <Price>35$</Price>
          </PriceInfo>

          <PriceInfo>
            <Visitor>Foreign Visitor</Visitor>
            <Price>300$</Price>
          </PriceInfo>

          <PriceInfo>
            <Visitor>SAARC Visitor</Visitor>
            <Price>40$</Price>
          </PriceInfo>
          <PriceInfo>
            <Visitor>BIMSTEC Visitor</Visitor>
            <Price>40$</Price>
          </PriceInfo>
        </TicketPrice>
        <Terms>
          <H3>Terms & Conditions</H3>
          <Ul>
            <Li>Entry Ticket is not refundable</Li>
            <Li>The e-ticket is not transferable</Li>
            <Li>Ticket Only allowed on valid date</Li>
            <Li>Pets are not allowed inside</Li>
            <Li>Use need to show ID proof at the time of entry</Li>
            <Li>
              Cigerate & Harmful Products are not allowed in Heritage Site{" "}
            </Li>
          </Ul>
        </Terms>
      </TicketInfo>
    </div>
  );
}

export default Single;
const Navbar = styled.div`
  color: aliceblue;
  text-align: center;
  background-color: black;
`;

const Image = styled.img`
  opacity: 0.8;
  width: 100%;
  height: 550px;
  object-fit: cover;
`;

const Navbarmini = styled.div`
  width: 100%;
  height: 60px;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  flex: 1;
`;

const Button = styled.button`
  font-weight: lighter;
  font-size: medium;
  color: grey;
  background: none;
  border: none;
  padding: 20px 25px;
  cursor: pointer;
`;

const Cart = styled.div`
  margin-top: 13px;
  margin-left: 20px;
  font-size: 30px;
`;

const Booking = styled.p`
  padding-left: 10px;
  background-color: maroon;
  border-radius: 50%;
  width: 23px;
  margin-top: -49px;
  font-size: 20px;
  margin-left: 18px;
`;

const AddToCart = styled.button`
  background: none;
  border-radius: 5px;
  background-color: tomato;
  margin: 5px;
  padding: 5px;
`;

const H1 = styled.h1`
  color: #8fbc8b;
  margin: 25px;
`;

const About = styled.div`
  width: 40%;
  margin: 20px;
  padding: 10px;
`;

const Information = styled.div`
  width: 40%;
  margin: 20px;
  padding: 10px;
`;

const Info = styled.div`
  position: relative;
  margin: 10px;
`;

const TicketInfo = styled.div`
  margin: 20px;
  padding: 10px;
  display: flex;
`;

const TicketPrice = styled.div`
  width: 50%;

  display: flex;
  flex-wrap: wrap;
`;

const PriceInfo = styled.div`
  margin: 40px;
  padding: 20px;
`;

const Visitor = styled.div`
  font-weight: 600;
  color: #d10808;
  font-size: 23px;
`;
const Price = styled.div`
  font-weight: 400;
`;

const Terms = styled.div`
  width: 50%;
`;

const H3 = styled.h3`
  font-size: 20px;
`;
const Ul = styled.ul``;
const Li = styled.li`
  margin-top: 10px;
`;