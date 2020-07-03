import React, { useState } from "react";
import Styled from "styled-components";

const InputStyle = Styled.input`
padding: 10px;
`;
const ButtonStyle = Styled.button`
padding: 10px;
background-color: blue;
`;
const ParagraphStyle = Styled.p`
font-size: 24px;
color: blue;
`;

function BmiCalculator() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [afterConverter, setAfterConverter] = useState("");

    const handleInput1 = (event) => {
        setHeight(event.target.value);
    };
    const handleInput2 = (event) => {
        setWeight(event.target.value);
    };
    const handleClick = (e) => {
        e.preventDefault();
        setAfterConverter(bmiFunction(height, weight));
    };

    function bmiFunction(height, weight) {
        const result = weight / (height / 100) ** 2;

        if (result < 17) {
            return `To Skinny`;
        } else if (result >= 17 && result <= 18.4) {
            return `Skinny`;
        } else if (result >= 18.5 && result <= 25) {
            return `Normal`;
        } else if (result >= 25.1 && result <= 27) {
            return `Fat`;
        } else {
            return `Too Fat`;
        }
    }

    return (
        <div>
            <InputStyle
                type="number"
                value={height}
                onChange={handleInput1}
            ></InputStyle>
            <InputStyle
                type="number"
                value={weight}
                onChange={handleInput2}
            ></InputStyle>
            <ButtonStyle onClick={handleClick}>Click Me</ButtonStyle>
            <ParagraphStyle>{afterConverter}</ParagraphStyle>
        </div>
    );
}

export default BmiCalculator;
