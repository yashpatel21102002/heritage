import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'


const AdminPanel = () => {
    const location = useLocation()
    const monumentId = location.pathname.split("/")[2]
    const [monumentDetail,setMonumentDetail] = useState()

    useEffect(()=>{
        const getMon = async ()=>{
            const ok = (await axios.get(`http://localhost:8000/api/monument/${monumentId}`)).data
            setMonumentDetail(ok)

        }
        getMon()

    },[])
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
                {/* <p>Indian adult price : <b> {!monumentDetail? ""}</b></p>
           
             <p>Indian child price : <b>{!monumentDetail? "": monumentDetail.state}</b></p>
            <p>foreigner adult price :  <b>{!monumentDetail? "": monumentDetail.state}</b></p>
            <p>foreigner adult price : <b>{!monumentDetail? "": monumentDetail.state}</b></p> */}


            </MonInfo2>
            <br>
            </br>

        </Info>
        <SearchOK>

        </SearchOK>
        <TicketInfo>


        </TicketInfo>
    </Container>
  )
}

const Container = styled.div`
    

`

const Info = styled.div`
    

`
const MonName = styled.h2`
    

`
const MonInfo = styled.h3`
    


`
const MonInfo2 = styled.h4`
    


`

const SearchOK = styled.div`
    


`

const TicketInfo = styled.div`
    


`

export default AdminPanel