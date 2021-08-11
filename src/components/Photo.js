import React from "react";

const Photo = props => {
    const { nasa } = props

    return (
        <div>
            <h2>{nasa.title}</h2>
            <img src={nasa.hdurl} alt={nasa.title}/>
            <p>{nasa.explanation}</p>
        </div>
    )
}




export default Photo;