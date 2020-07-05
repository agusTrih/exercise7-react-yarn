import React, { useState } from "react";
import Styled from "styled-components";
import Tittle from "../../components/Tittle/Tittle";

const FormStyle = Styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px
`;
const InputStyle = Styled.input`
padding: 10px;
background-color
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
            return `Kurus, Kekurangan banyak berat badan`;
        } else if (result >= 17 && result <= 18.4) {
            return `Kurus, Kekurangan sedikit berat badan`;
        } else if (result >= 18.5 && result <= 25) {
            return `Hore berat badan kamu Normal`;
        } else if (result >= 25.1 && result <= 27) {
            return `Gemuk, Kelebihan berat badan`;
        } else if (result > 27) {
            return `Gemuk, Kelebihan banyak berat badan`;
        }
    }

    return (
        <div>
            <FormStyle>
                <Tittle text="Bmi Calculator" />
                <InputStyle
                    type="number"
                    value={height}
                    placeholder="Height"
                    onChange={handleInput1}
                ></InputStyle>
                <InputStyle
                    type="number"
                    value={weight}
                    placeholder="Weight"
                    onChange={handleInput2}
                ></InputStyle>
                <ButtonStyle onClick={handleClick}>Click Me</ButtonStyle>
                <ParagraphStyle>{afterConverter}</ParagraphStyle>
            </FormStyle>
        </div>
    );
}

export default BmiCalculator;
