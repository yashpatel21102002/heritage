import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'

const Admin = () => {
    const [monumentId,setMonumentId] = useState()

    const handleRedirect = ()=>{
        window.location.href = `/adminPanel/${monumentId}`
        console.log("oasjfo")
    }

    const handleClick= async()=>{

        
        console.log(monumentId)
        var check = {}
        try{
            check = await (await axios.get(`http://localhost:8000/api/monument/${monumentId}`)).data
            localStorage.setItem("monumentId",JSON.stringify(monumentId))
            document.getElementById('monumentcheck').innerText = `monument name:${check.name} State:${check.state} if the details is true you can proceed further`
           
            document.getElementById('proceed').innerHTML = "<button>proceed</button>"
          

        }catch(e){
            alert("your provided key is invalid")
        }

     
           
            
        
        

    }
  return (
    <div>
        <Container>
        <h2>This is the admin page welcome .... </h2>
            
        <Info>Please import the Provided monument Key</Info>
        <InputContainer onChange={(e)=>setMonumentId(e.target.value)}></InputContainer>
        <Button onClick={handleClick}>verify</Button>
        <Info id='monumentcheck'></Info>
        <div id='proceed' onClick={handleRedirect}></div>
        
        </Container>


    </div>
  )
}

export default Admin

const Container = styled.div`
    margin-left: 15px;
    margin-top: 15px;


`
const InputContainer = styled.input`
    
padding: 10px 10px 10px 10px;
width: 500px;


`
const Info = styled.h3`
margin: 10px 10px 10px 10px;

    


`

const Button = styled.button`

padding: 10px 10px 10px 10px;
    


`