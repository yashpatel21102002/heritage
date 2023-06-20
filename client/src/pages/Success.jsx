import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useLocation,useNavigate } from "react-router";
import axios from "axios";
// import { userRequest } from "../requestMethods";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [orderId, setOrderId] = useState(null);
  

    useEffect(() => {
      const token = localStorage.getItem("token");
     const ttoken = JSON.parse(token);
     
     const getTicketsFromCart = async () => {
       try {
         const response = await axios.get(
           `http://localhost:8000/api/ticket/${ttoken}`
         );
         const tickets = response.data;
         
        //  console.log(tickets);
         
         const extractedData = tickets.map((ticket) => ({
           ticketId: ticket._id,
           userEmail: ticket.userEmail,
           monumentId: ticket.monumentId,
           adults: ticket.adults,
           children: ticket.children,
           nationality: ticket.nationality,
           status: ticket.status,
           total: ticket.total,
           date: ticket.date,
           // Add more fields as needed
           }));

         const orderResponse = await axios.post(
           "http://localhost:8000/api/order",
           {
             tickets:extractedData,
           }
           );
           
          //  setOrderId(orderResponse.data.orderId);
           
           //  await axios.delete(`http://localhost:8000/api/ticket/${ttoken}`);
          } catch (error) {
            console.error(error);
          }
        };
        
        if (location.state && location.state.fromCheckout) {
          getTicketsFromCart();
        } else {
          navigate("/");
        }
      }, []);
    



  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }} >Go to Homepage</button>
    </div>
  );
};

export default Success;
