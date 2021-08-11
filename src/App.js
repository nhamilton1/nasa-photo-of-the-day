import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from "./constants/index"
import axios from "axios";
import DateInput from "./components/DateInput"
import Photo from "./components/Photo"

function App() {
  const [nasa, setNasa] = useState([])
  const [date, setDate] = useState([]);

  // console.log(date)
  // &date=${date} 
 
  useEffect(() => {
    const fetchNasa = () => {
      axios.get(`${BASE_URL}/apod?api_key=${API_KEY}&date=${date}`)
      .then(res => {
        // console.log(res.data)
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
 

  return (
    <div className="App">
      <h1>NASA's Astronomy Picture of the Day!</h1>
      <DateInput changeDate={changeDate}/>
      <Photo nasa={nasa}/>
    </div>
  );
}

export default App;
