import React from "react";
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DateInput = props => {
    const { changeDate, date } = props

    return (
        <DatePicker 
        onChange={date => changeDate(date)} 
        placeholderText= 'Select A Date'
        />
      );
}



export default DateInput;