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
const FormStyle = Styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px
`;

function TextTransform() {
    const [text, setText] = useState("");
    const [afterConverter, setAfterConverter] = useState("");

    const handleInput = (event) => {
        setText(event.target.value);
    };

    const handleClick = () => {
        let string = text;
        let regex = /[a-z]/;

        let arrayString = string.split("");
        let result = arrayString.map((value) => {
            if (regex.test(value)) {
                value = value.toUpperCase();
            } else {
                value = value.toLowerCase();
            }
            return value;
        });
        result = result.join("");
        setAfterConverter(result);
    };

    return (
        <div>
            <FormStyle as="div">
                <InputStyle
                    type="text"
                    value={text}
                    onChange={handleInput}
                    placeholder="Type here.."
                ></InputStyle>
                <ButtonStyle onClick={handleClick}>Click Me</ButtonStyle>
                <ParagraphStyle>{afterConverter}</ParagraphStyle>
            </FormStyle>
        </div>
    );
}

export default TextTransform;
