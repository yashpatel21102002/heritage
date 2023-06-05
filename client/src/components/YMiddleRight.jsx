import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import YCard from './YCard';



const YMiddleRight = () => {
    const [monuments,setMonuments] = useState([]);
    
    useEffect(()=>{
        

        const getMonuments = async ()=>{
            const res = axios.get("http://localhost:8000/api/monuments")
            // setMonuments((await res).data)
            setMonuments((await res).data);


            

            
        }

            

       

        
    
            
        getMonuments();
        
    },[]
    
    )

    
    // setFilter(arr);
   
    
  return (
    <Container>
        {monuments.map((item)=>(
            <YCard item={item}/>
        ))}

    </Container>
  )
}

export default YMiddleRight


const Container = styled.div`
   /* background-color: #333; */
  /* overflow: auto; */
  display: flex;
  gap: 10px;
  white-space: nowrap;
  padding: 10px;
  overflow: hidden;
  overflow-x: auto;
  height: 30.5vh;
  width: 62vw;
  /* margin-bottom: 10px; */
::-webkit-scrollbar{
    /* margin-top: 15px; */
    height: 8px;

}
::-webkit-scrollbar-track{
    background-color: transparent;
}

::-webkit-scrollbar-thumb{
    background-color: #f20cf2;

   
}



   
    

`



