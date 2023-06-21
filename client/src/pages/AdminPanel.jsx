import axios from 'axios'
import React, { Children, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'


const AdminPanel = () => {
    const location = useLocation()
    const monumentId = location.pathname.split("/")[2]
    const [monumentDetail,setMonumentDetail] = useState()
    const [uniqueid,setUniqueid]= useState("")
    const [details,setDetails] = useState()
    const [titu,setTitu] = useState(5)

    useEffect(()=>{
        const getMon = async ()=>{
            const ok = (await axios.get(`http://localhost:8000/api/monument/${monumentId}`)).data
            setMonumentDetail(ok)

        }
        getMon()

    },[])

     var ii = 2;
    
    const handleOrder = async()=>{

        try{

            const getInfo = (await axios.get(`http://localhost:8000/api/order/${uniqueid}/${monumentId}`)).data
            if(getInfo !== undefined){
                setDetails(getInfo.data)
            }
           
            
           
            else if(getInfo === undefined){
                handleOrder()
            }

            
            // console.log(uniqueid)
            await setDetails(getInfo)

       
        }catch(e){
            alert("some error has occured")
        }


    }

    const handlePOrder = async()=>{
        try{
            const updatedC = await axios.put(`http://localhost:8000/api/order/${uniqueid}/${monumentId}`)
            // console.log(updatedC)
            if(updatedC){
                alert("Success")
                window.location.reload()
                
            }
            
        }catch(e){
            alert("some error occured")
            // console.log(e.message)
        }
    }

    const handleDiscard = ()=>{
        window.location.reload()
    }
  return (
    <Container>
        <Info>
            <MonName>
                {!monumentDetail? "": monumentDetail.name}
            </MonName>
            <MonInfo>
            {!monumentDetail? "": monumentDetail.city}
                
            </MonInfo>
            <MonInfo>
            {!monumentDetail? "": monumentDetail.state}


            </MonInfo>
            <MonInfo2>
                {/* {/* <p>Indian adult price : <b> {!monumentDetail? ""}</b></p> */}
           
             <p>Indian adult price : <b>{!monumentDetail? "": monumentDetail.price[0].adult_price}</b></p>
             <p>Indian child price : <b>{!monumentDetail? "": monumentDetail.price[0].child_price}</b></p>
            <p>foreigner adult price :  <b>{!monumentDetail? "": monumentDetail.price[1].adult_price}</b></p>
            <p>foreigner child price : <b>{!monumentDetail? "": monumentDetail.price[1].child_price}</b></p> 


            </MonInfo2>
           

        </Info>
        <SearchOK>
        <InputContainer onChange={(e)=>setUniqueid(e.target.value)} placeholder='uniqe 8 letter id'></InputContainer>
            <Button onClick={handleOrder}>Search traveller</Button>
        </SearchOK>
        <TicketInfo>
            <Name id='status' style={{color:"red",marginBottom:"15px"}}></Name>
            <Name>MonumentName : {(details === undefined || details.length ===0) ? "EMPTY":details[0].monumentName}</Name>
            <Email>Email :  {(details === undefined || details.length ===0) ? "EMPTY":details[0].userEmail}</Email>
            <Adults>Adults:  {(details === undefined || details.length ===0) ? "EMPTY":details[0].adults}</Adults>
            <Child>Children :  {(details === undefined || details.length ===0) ? "EMPTY":details[0].children}</Child>
            <DateO>Date : {(details === undefined || details.length ===0)? "EMPTY":details[0].date}</DateO>
            <DateO>Total Paid Amount : {(details === undefined || details.length ===0)? "EMPTY":details[0].total}</DateO>
            {(details === undefined || details.length ===0)? "":(details[0].status === 'used' ?             <DateO style={{color:details[0].status === 'unused' ? "green" : "red"}}>USED : {(details === undefined || details.length ===0)? "EMPTY":(details[0].status)}</DateO>
            :
            <DateO style={{color:details[0].status === 'unused' ? "green" : "red"}}>USED : {(details === undefined || details.length ===0)? "EMPTY":(details[0].status)}</DateO>
            
) }
        
            <Button onClick={handlePOrder}>Confirm Verification and let them visit</Button>
            <Button onClick={handleDiscard}>Discard</Button>

        </TicketInfo>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

`

const Info = styled.div`
    flex: 1;
    /* background-color: red; */
    margin-left: 5px;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;

`
const MonName = styled.h2`
    

`
const MonInfo = styled.h3`
    


`
const MonInfo2 = styled.h4`
    


`
const DateO = styled.h3`
    


`

const SearchOK = styled.div`
margin-top: 100px;
margin-left: 100px;
    width: 100%;
    /* background-color: blue; */
    flex: 1;

`

const TicketInfo = styled.div`
margin-top: 100px;
margin-left: 100px;
/* background-color: green; */
    flex: 4;


`

const Name = styled.h3`
    
    
`
const Email = styled.h3`
    

`
const Adults = styled.h3`
    

`
const Child = styled.h3`
    

`
const InputContainer = styled.input`
    
padding: 10px 10px 10px 10px;
width: 500px;
font-size: 28px;


`

const Button = styled.button`

padding: 10px 10px 10px 10px;
    


`
export default AdminPanel

//647ccb716968ab0e485203b6