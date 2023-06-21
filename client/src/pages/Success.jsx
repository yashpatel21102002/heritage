import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useLocation,useNavigate } from "react-router";
import axios from "axios";
import { v4 as uuid } from 'uuid';
// import { userRequest } from "../requestMethods";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [orderId, setOrderId] = useState();

  const handleManage = async()=>{
    if (location.state && location.state.fromCheckout) {

      try{

      
      // alert("success")
      const token = localStorage.getItem("token")
    const ttoken = JSON.parse(token);
 
    const response = await axios.get(`http://localhost:8000/api/ticket/${ttoken}`)
    const tickets = response.data;


    var arr = []
    await tickets.map((item)=>
     
      
        
        arr.push({
          userEmail:item.userEmail,
          monumentId:item.monumentId,
          total:item.total,
          date:item.date,
          childrens:item.childrens,
          nationality:item.nationality,
          adults:item.adults,
          monumentName:item.monumentName,
          monumentState:item.monumentState,
          uniqueId:uuid().slice(0,8)
          
        })
    )
    
    await axios.post('http://localhost:8000/api/order',arr)

    await axios.delete(`http://localhost:8000/api/ticket/${ttoken}`)

    // console.log(tickets)



    
      // console.log(extractedData)
      // const upload = await axios.post('http://localhost:8000/api/order',{tickets})

    
        // console.log(orderResponse)
        alert("You will be provided your ticket info to email")
        window.location.href = "/"
      }catch(e){
        console.log(e)
        alert(e.message)
      }
    } else {
      alert("failure")
    }
    

  }
  
           
        
        
       
    



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
      <button style={{ padding: 10, marginTop: 20 }} onClick={handleManage}>Go to Homepage</button>
    </div>
  );
};

export default Success;
