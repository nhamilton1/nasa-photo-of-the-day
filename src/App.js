import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from "./constants/index"
import axios from "axios";
import DateInput from "./components/DateInput"
import Photo from "./components/Photo"

function App() {
  const [nasa, setNasa] = useState([])
  const [data, setDate] =useState([])

  useEffect(() => {
    const fetchNasa = () => {
      axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
      .then(res => {
        // console.log(res.data)
        setNasa(res.data)
        setDate(res.data.date)
      })
      .catch(err => {
        debugger
      })
    }
    fetchNasa()
  }, [])

  const changeDate = evt => {
    evt.preventDefault()
    console.log(evt.target)
    // let dateFromInput = evt.target[0].value;
    // setDate({date: dateFromInput})
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
