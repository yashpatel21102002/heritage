import React from 'react'
import styled from "styled-components";
import { GiIndianPalace } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import SMonuments from '../components/SMonuments';

const Monuments = () => {
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
            <Search placeholder="Search city , place or monument" />
            <Searchlogo />
          </SearchContainer>
        </Right>
      </Navbar>

      <Navbar2>
        <Left2>
          <All>ALL</All>
          <North>NORTH</North>
          <South>SOUTH</South>
          <East>EAST</East>
          <West>WEST</West>
          <Central>CENTRAL</Central>
        </Left2>

        <Right2>
          <Filter>
            <FilterState>
              <FilterStateOption selected disabled hidden>
                Select State
              </FilterStateOption>
              <FilterStateOption>Gujarat</FilterStateOption>
              <FilterStateOption>Gujarat</FilterStateOption>
              <FilterStateOption>Gujarat</FilterStateOption>
              <FilterStateOption>Gujarat</FilterStateOption>
              <FilterStateOption>Gujarat</FilterStateOption>
              <FilterStateOption>Gujarat</FilterStateOption>
              <FilterStateOption>Gujarat</FilterStateOption>
            </FilterState>
          </Filter>

          <Filter>
            <FilterCity>
              <FilterStateOption selected disabled hidden>
                Select City
              </FilterStateOption>
              <FilterStateOption>Patan</FilterStateOption>
              <FilterStateOption>Patan</FilterStateOption>
              <FilterStateOption>Patan</FilterStateOption>
              <FilterStateOption>Patan</FilterStateOption>
              <FilterStateOption>Gujarat</FilterStateOption>
              <FilterStateOption>Gujarat</FilterStateOption>
            </FilterCity>
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

      <SMonuments/>
    </Container>
  );
}

export default Monuments

const Container = styled.div`
  /* position: relative; */
  width: 100vw;
  height: 100%;

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
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
const Logo = styled(GiIndianPalace)`
  width: 10%;
  height: 50px;
  margin-left:20%;
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
  /* align-items: center; */
`;
const Left2 = styled.div`

display: flex;
  height: 100%;
  width:100%;
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;
const Right2 = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  width: 100%;
`;
const All = styled.button`
  border: none;
  background: #ffffff;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:active {
    text-decoration: underline;
  }
`;
const North = styled.button`
  border: none;
  background: #ffffff;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  &:active {
    text-decoration: underline;
  }
`;
const South = styled.button`
  border: none;
  background: #ffffff;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:active {
    text-decoration: underline;
  }
`;
const Central = styled.button`
  border: none;
  background: #ffffff;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:active {
    text-decoration: underline;
  }
`;
const East = styled.button`
  border: none;
  background: #ffffff;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:active {
    text-decoration: underline;
  }
`;
const West = styled.button`
  border: none;
  background: #ffffff;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:active {
    text-decoration: underline;
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
