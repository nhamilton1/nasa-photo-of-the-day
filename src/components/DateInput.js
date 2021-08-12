import React from "react";
import styled from 'styled-components';


const DateInput = props => {
    const { changeDate } = props

    return (
        <form onSubmit={changeDate}>
            Pick a date (YYYY-MM-DD): 
            <input />
            <input type="submit"/>
        </form>
    )
}



export default DateInput;