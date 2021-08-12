import React from "react";
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const StyledDate = styled.div`
text-align: center;
`;

const DateInput = props => {
    const { changeDate, date } = props

    console.log(date)

    return (
    <StyledDate>
        Select a Date:
        <DatePicker 
        onChange={date => changeDate(date)} 
        // placeholderText= 'Select A Date'
        popperPlacement='bottom'
        />
    </StyledDate>
      );
}



export default DateInput;