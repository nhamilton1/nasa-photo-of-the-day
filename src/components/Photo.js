import React from "react";
import styled from 'styled-components';


const Photo = props => {
    const { nasa } = props


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
        }

    `;

    const StyledContent = styled.div`
        width: 50%;
        padding: 3%;

        h2 {
            font-size: 3rem;
            padding-bottom: 10px;
        }

        h6 {
            padding-bottom: 100px;
        }
    `;

    return (
        <StyledContainer>
                <img src={nasa.hdurl} alt={nasa.title} />
            <StyledContent>
                <h2>{nasa.title}</h2>
                <h6>{nasa.date}</h6>
                <p>{nasa.explanation}</p>
            </StyledContent>
        </StyledContainer>
    )
}

export default Photo;