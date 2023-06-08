import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { GiIndianPalace } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import SMonuments from '../components/SMonuments';
import axios from 'axios'

const Monuments = () => {

  const [main, setMain] = useState("REGION")  // main means like it is region,state or city
  const [minor, setMinor] = useState("all") // like which region or which state or which city
  const [searchTerm,setSearchTerm] = useState("")

  const [monuments, setMonuments] = useState([]);
  const [searchMonuments,setSearchMonuments] = useState([])
  useEffect(() => {
    
    const getMonuments = async () => {
      const res = axios.get("http://localhost:8000/api/monuments");
      setMonuments((await res).data);
    };

    getMonuments();
  },[]);

  useEffect(()=>{
    
    const getMonuments = async()=>{
      const res = await axios.get(`http://localhost:8000/api/searchMonuments/${searchTerm}`);
      setSearchMonuments(res.data)
      
    }
    searchTerm !== "" &&
    getMonuments()
  },[searchTerm])



  var State = [];
  
  for (let i = 0; i < monuments.length; i++){
    State.push(monuments[i].state);
  }

  const uniqueState = [...new Set(State)];

  uniqueState.sort();



  

  return (
    <Container>
      <Navbar>
        <Left>
          <Logo>
            <GiIndianPalace />
          </Logo>
          <Desc>Top monuments of India</Desc>
        </Left>
        <Right>
          <SearchContainer>
            <Search placeholder="Search city , place or monument" onChange={(e)=>
              {setSearchTerm(e.target.value);setMain("");setMinor("")}}/>
            <Searchlogo />
          </SearchContainer>
        </Right>
      </Navbar>

      <Navbar2>
        <Left2>
          <All
            value="REGION"
            name="all"
            onClick={(e) => {
              setMain(e.target.value);
              setMinor(e.target.name);
              setSearchTerm("");
              setSearchMonuments([])
            }}
          >
            ALL
          </All>
          <North
            value="REGION"
            name="north"
            onClick={(e) => {
              setMain(e.target.value);
              setMinor(e.target.name);
              setSearchTerm("");
              setSearchMonuments([])
            }}
          >
            NORTH
          </North>
          <South
            value="REGION"
            name="south"
            onClick={(e) => {
              setMain(e.target.value);
              setMinor(e.target.name);
              setSearchTerm("");
              setSearchMonuments([])
            }}
          >
            SOUTH
          </South>
          <East
            value="REGION"
            name="east"
            onClick={(e) => {
              setMain(e.target.value);
              setMinor(e.target.name);
              setSearchTerm("");
              setSearchMonuments([])
            }}
          >
            EAST
          </East>
          <West
            value="REGION"
            name="west"
            onClick={(e) => {
              setMain(e.target.value);
              setMinor(e.target.name);
              setSearchTerm("");
              setSearchMonuments([])
            }}
          >
            WEST
          </West>
          <Central
            value="REGION"
            name="central"
            onClick={(e) => {
              setMain(e.target.value);
              setMinor(e.target.name);
              setSearchTerm("");
              setSearchMonuments([])
            }}
          >
            CENTRAL
          </Central>
        </Left2>

        <Right2>
          <Filter>
            <FilterState
              onChange={(e) => {
                setMain("STATE");
                setMinor(e.currentTarget.value);
                setSearchTerm("");
                setSearchMonuments([])
              }}
            >
              <FilterStateOption selected disabled>
                Select State
              </FilterStateOption>
              {uniqueState.map((s) => (
                <FilterStateOption key={s} value={s}>
                  {s}
                </FilterStateOption>
              ))}
            </FilterState>
          </Filter>

          <Filter>
            <FilterCity>
              <FilterStateOption selected disabled hidden>
                Select Tourist Type
              </FilterStateOption>
              <FilterStateOption>Indian</FilterStateOption>
              <FilterStateOption>Foreigner</FilterStateOption>
            </FilterCity>
          </Filter>
        </Right2>
      </Navbar2>

      <SMonuments serType={main} serSrc={minor} searchMonuments={searchMonuments} searchTerm={searchTerm}/>
    </Container>
  );
}

export default Monuments

const Container = styled.div`
  /* position: relative; */
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-image: linear-gradient(#5c469c, #d4adfc);
  
`;
const Navbar = styled.div`
  /* Rectangle 8 */

  /* position: absolute; */
  width: 100vw;
  height: 50px;
  left: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  background-color: #d9d9d9;
  position: sticky;
  z-index: 999;
  
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
const Logo = styled(GiIndianPalace)`
  width: 10%;
  height: 50px;
  margin-left:15%;
  display:flex;
`;
const Desc = styled.text`
   margin-left:5%;
   margin-right:20%;
   font-size:25px;
   align-items: center;
`;
const Right = styled.div`
  
  display: flex;
  flex: 1;
  width:100%;
  height: 100%;
  align-items: center;
`;
const Search = styled.input`
  outline: none;
  border: none;
  padding-left: 20px;
  padding-right: 10px;
  font-size: 20px;
  width: 430px;
  height: 40px;
  border-radius: 20px;

  ::placeholder {
    padding-left: 00px;
    padding-right: 30px;
    align-items: center;
    font-size: medium;
    justify-content: center;
  }
`;
const SearchContainer = styled.div`
  margin-left: 250px;
  width: 488px;
  height: 40px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;
const Searchlogo = styled(BsSearch)`
 margin-left:0px;
`;
const Navbar2 = styled.div`
  width: 100vw;
  height: 71px;
  left: 0px;
  top: 50px;
  background: #ffffff;
  display: flex;
  position: sticky;
  z-index: 999;
  /* align-items: center; */
`;
const Left2 = styled.div`

display: flex;
  height: 100%;
  width:100%;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  /* gap:20px; */
  margin-left: 20px;
`;
const Right2 = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  width: 100%;
  /* justify-content: space-between; */
`;
const All = styled.button`
  border: none;
  background: #ffffff;
  margin-left: 50px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:focus {
    text-decoration: underline;
    color: red;
  }
`;
const North = styled.button`
  border: none;
  background: #ffffff;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:focus {
    text-decoration: underline;
    color: red;
  }
`;
const South = styled.button`
  border: none;
  background: #ffffff;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:focus {
    text-decoration: underline;
    color: red;
  }
`;
const Central = styled.button`
  border: none;
  background: #ffffff;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:focus {
    text-decoration: underline;
    color: red;
  }
`;
const East = styled.button`
  border: none;
  background: #ffffff;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:focus {
    text-decoration: underline;
    color: red;
  }
`;
const West = styled.button`
  border: none;
  background: #ffffff;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:focus {
    text-decoration: underline;
    color: red;
  }
`;
const Filter = styled.div`
    align-items: center;
    display: flex;
`;
const FilterState = styled.select`
  margin-left: 270px;
  padding-left: 15px;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  font-size: medium;
  color: #beb8b8;
`;
const FilterCity = styled.select`
  margin-left: 40px;
  padding-left: 15px;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  font-size: medium;
  color: #beb8b8;
`;
const FilterStateOption = styled.option``;
