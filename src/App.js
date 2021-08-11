import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from "./constants/index"
import axios from "axios";

function App() {
  const [nasa, setNasa] = useState([])

  useEffect(() => {
    const fetchNasa = () => {
      axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data)
        setNasa(res.data)
      })
      .catch(err => {
        debugger
      })
    }
    fetchNasa()
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
