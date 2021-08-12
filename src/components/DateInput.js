import React, { useState } from "react";
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";


const StyledDate = styled.div`
text-align: center;
font-weight: bold;
color: #0B3D91;

    input {
        text-align: center;
    }
`;

const DateInput = props => {
    const { changeDate, date } = props


    console.log(date)

    return (
    <StyledDate>
        Select a Date:
        <DatePicker 
        value={moment(date).format('MMMM Do, YYYY')}
        onChange={date => changeDate(date)} 
        popperPlacement='bottom'
        />
    </StyledDate>
      );
}



export default DateInput;