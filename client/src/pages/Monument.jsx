import { useState } from "react";
import styled from "styled-components";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Navbar from "../components/Navbar";
import { BsCart } from "react-icons/bs";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";



function Single(props) {
  const [booking, setbooking] = useState(0);
  const [monument,setMonument] = useState();
  function handlebooking() {
    setbooking(booking + 1);
  }
  
  
  const location = useLocation()
  const id = location.pathname.split("/")[2];
 
  const handleSidePanel = ()=>{
    document.getElementById('sidepanel').style.width = "30vw"
    
  }

  const CloseSidePanel = ()=>{
    document.getElementById('sidepanel').style.width = "0"
  }


  useEffect(()=>{

    const getMonument = async()=>{

      const res  =  await axios.get(`http://localhost:8000/api/monument/${id}`);
      setMonument(res.data)
    }

    getMonument();
    console.log(monument)


  })

  return (
    <Container>
      {/* <div>Hello jii</div> */}
      {/* navbar */}
      <Navbar/>
      <Header>


      <Image src={monument?.img[0]}/>
      <HeaderInfo>
        <SideButton onClick={handleSidePanel}>
          Open
        </SideButton>
        <SidePanel id="sidepanel">
          <CloseButton onClick={CloseSidePanel}>
            ×Close
          </CloseButton>
          {/* from here you can make any container and make one new card named as CartMonument or anything and map it here and make one or two buttons that can lead use to cart and checkout page  */}

        </SidePanel>
        <MonName>
          {monument?.name}
        </MonName>
        <Span>
          City: {monument?.city}
        </Span>
        <Span>
          State: {monument?.state}
        </Span>
        <InfoCon>
          {monument?.desc}
        </InfoCon>
     
        
        <Wrapper>
          <Adding onClick={()=>{setbooking(booking+1)}}>
            Add to Cart
          </Adding>
        <Cart>
          <BsCart/>
          <Booking>{booking}</Booking>
        </Cart>
        </Wrapper>
          
     

      </HeaderInfo>
      </Header>
      
      
      <H1 style={{'color':'#eeebeb'}}>Information</H1>
      <Information>
        <Info>
          <h2 >Location</h2>
          <p>{monument?.location}</p>
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
              <td>{monument?.opening}</td>
              
            </tr>
            
          </table>
        </Info>
      </Information>

      <H1 style={{'color':'#eeebeb'}}>Ticket Information</H1>
      <TicketInfo>
        <TicketPrice>
          <PriceInfo>
            <Visitor>Indian Visitor</Visitor>
            <Price>{monument?.price[0].adult_price}$</Price>
          </PriceInfo>

          <PriceInfo>
            <Visitor>Foreign Visitor</Visitor>
            <Price>{monument?.price[1].adult_price}$</Price>
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
    </Container>
  );
}

export default Single;


const Container = styled.div`
display:flex;
  flex-direction: column;
  /* margin-top: 2px; */
  background-image:linear-gradient(#5C469C,#D4ADFC);


`

const Header  = styled.div`
margin-top: 2px;
  display: flex;
  /* position: relative; */


`

const MonName = styled.h1`
  margin-top: 5px;
  margin-left: 5px;
  color: gold;

`

const SideButton = styled.button`
  

  position: absolute;
  right:0;
  padding: 5px 8px;
  background-color: black;
  color:white;
  cursor: pointer;
  /* top: 15px; */
  top: 1vh;
  border:none

  
`
const SidePanel = styled.div`
  

  position: absolute;
  right:0;
  top: 8vh;
  width: 0%;
  height: 92vh;
  position: fixed; /* Stay in place */
  z-index: 2; /* Stay on top */
  /* top: 0; */
  /* left: 0; */
  background-color: black; /* Black*/
  opacity: 0.8;
  overflow-x: hidden; /* Disable horizontal scroll */
  /* padding-top: 60px; Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the 
  sidepanel */
  box-shadow: 0 0 5px 0;
`

const CloseButton = styled.button`
  margin-top: 1vh;
  z-index: 3;
  margin-left: 1vw;
  padding: 5px 8px;
  background-color: white;
  border: none;
  color:black;
  cursor: pointer;



`
const Span = styled.h3`
  color: #272626;
  font-weight: bolder;
  margin-top: 5px;
  margin-left: 5px;

`


const Image = styled.img`
  flex: 1.5;
  border-radius: 15px;
  background-color: black;
  opacity: 0.8;

 
  
  
`;

const HeaderInfo = styled.div`
position: relative;
flex: 1;
display: flex;
margin-left: 10px;
margin-right: 10px;
flex-direction: column;
justify-content: center;



`

const InfoCon = styled.span`
  margin-top: 5px;
  margin-left: 5px;
  color: gold;
  letter-spacing: 2px;
  line-height: 20px;

`

const Wrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* background-color: red; */
  margin-left: 5px;
  height: 10%;
  gap: 10px;


`

const Adding = styled.button`
  
  padding: 10px 15px;
  margin-top: 15px;
  background-color: #eeebeb;
  border: none;
  color: #675802;
  font-size: 18px;
  font-weight: bolder;

`






const Cart = styled.div`
  font-size: 28px;
  
  
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