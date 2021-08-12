import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from "./constants/index"
import axios from "axios";
import DateInput from "./components/DateInput"
import Photo from "./components/Photo"
import styled from 'styled-components';
import moment from "moment";

const StyledMain = styled.div`
box-sizing: border-box;
margin: 20px;

h1 {
  font-size: ${pr => pr.theme.fontSize};
  padding: 10px;
  width: 100%;
  text-align: center;
}
`;

const StyledFooter = styled.footer`
     
color: lightgrey;
text-align: right;

`;


function App() {
  const [nasa, setNasa] = useState([])
  const [date, setDate] = useState([]);
 
  useEffect(() => {
    const fetchNasa = () => {
      axios.get(`${BASE_URL}/apod?api_key=${API_KEY}&date=${date}`)
      .then(res => {
        setNasa(res.data)
      })
      .catch(err => {
        debugger
      })
    }
    fetchNasa()
  }, [date])


  const changeDate = dateFromInput => {
    setDate(moment(dateFromInput).format("YYYY-MM-DD"))
  }

 
  return (
    <StyledMain>
        <h1>NASA's Astronomy Picture of the Day!</h1>
        <DateInput changeDate={changeDate} date={nasa.date}/>
        <Photo nasa={nasa} />
        <StyledFooter>
          <p>©{nasa.copyright}</p>
        </StyledFooter>
    </StyledMain>
  );
}

export default App;
