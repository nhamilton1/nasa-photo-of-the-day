import React from "react";

const DateInput = props => {
    const { changeDate } = props

    return (
        <form onSubmit={changeDate}>
            Pick a date(YYYY-MM-DD):
            <input />
            <input type="submit"/>
        </form>
    )
}



export default DateInput;