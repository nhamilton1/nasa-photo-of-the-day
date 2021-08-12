import React, { useState } from "react";
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";


const StyledDate = styled.div`
text-align: center;
`;

const DateInput = props => {
    const { changeDate, date } = props

    const [StartDate, setStartDate] = useState(new Date())

    console.log(date)

    return (
    <StyledDate>
        Select a Date:
        <DatePicker 
        selected={StartDate}
        value={moment(date).format('MMMM Do, YYYY')}
        onChange={date => changeDate(date)} 
        // placeholderText= 'Select A Date'
        popperPlacement='bottom'
        />
    </StyledDate>
      );
}



export default DateInput;