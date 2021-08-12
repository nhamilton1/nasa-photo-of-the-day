import React from "react";
import styled from 'styled-components';
import moment from "moment";

const StyledContainer = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: center;
align-items: center;
padding-top: 2%;

img {
    width: 50%;
    height: 50%;
    border-radius: 2%;
    box-shadow: 3px 5px 5px 3px rgb(128, 127, 127);
}
`;

const StyledContent = styled.div`
width: 50%;
padding: 3%;

h2 {
    font-size: 3rem;
    padding-bottom: 10px;
    text-align: center;
}

h6 {
    padding-bottom: 2%;
}

`;

const Photo = props => {
    const { nasa } = props

    return (
        <StyledContainer>
                <img src={nasa.hdurl} alt={nasa.title} />
            <StyledContent>
                <h2>{nasa.title}</h2>
                <h6>{moment(nasa.date).format('MMMM Do, YYYY')}</h6>
                <p>{nasa.explanation}</p>
            </StyledContent>
        </StyledContainer>
    )
}

export default Photo;