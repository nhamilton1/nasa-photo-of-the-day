import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from "./constants/index"
import axios from "axios";
import DateInput from "./components/DateInput"
import Photo from "./components/Photo"
// import Details from "./components/Details";
import styled from 'styled-components';



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


  const changeDate = e => {
    e.preventDefault()
    let dateFromInput = e.target[0].value
    setDate(dateFromInput)
  }
 
  const StyledMain = styled.div`
    text-align: center;
    box-sizing: border-box;
    margin: 20px;

    h1 {
      font-size: ${pr => pr.theme.fontSize};
      padding: 10px;
    }
  `;

  const StyledTopOfPage = styled.h1`

  `;

  return (
    <StyledMain>
        <h1>NASA's Astronomy Picture of the Day!</h1>
        <DateInput changeDate={changeDate}/>
      <Photo nasa={nasa}/>
    </StyledMain>
  );
}

export default App;
