import React from "react";
import styled from 'styled-components';


const Details = props => {
    const { nasa } = props


    const StyledDetails = styled.div`
        
    `;

    return (
        <StyledDetails>
            <h2>{nasa.title}</h2>
            <h4>{nasa.date}</h4>
            <p>{nasa.explanation}</p>
        </StyledDetails>
    )
}

export default Details;