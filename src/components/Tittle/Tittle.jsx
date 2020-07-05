import React from "react";
import Styled from "styled-components";

const Title = Styled.h1`
font-size: 36px;
font-family: 'Fondamento', cursive;
`;

function Tittle(props) {
    return <Title>{props.text}</Title>;
}

export default Tittle;
