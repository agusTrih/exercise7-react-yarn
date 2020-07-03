import React, { useState } from "react";
import Styled from "styled-components";

// line di bawah adalah Styled-componen

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
function CatsAge() {
    const [ageCat, setAgeCat] = useState("");
    const [afterConverter, setAfterConverter] = useState("");

    const handleInput = (event) => {
        setAgeCat(event.target.value);
    };
    const handleClick = (e) => {
        e.preventDefault();
        setAfterConverter(agePlus(ageCat));
    };
    function agePlus(cat) {
        const after2Age = (cat - 2) * 4 + 24;
        if (cat === "1") {
            return `Kucing yang berusia 1 tahun, sebenarnya memiliki tubuh yang berusia 15 tahun dalam umur manusia`;
        } else if (cat === 2) {
            return `Kucing yang berusia 1 tahun, sebenarnya memiliki tubuh yang berusia 24 tahun dalam umur manusia`;
        } else if (cat >= 2) {
            return `Kucing yang berusia ${cat} tahun, sebenarnya memiliki tubuh yang berusia ${after2Age} tahun dalam umur manusia`;
        }
    }
    return (
        <div>
            <InputStyle
                type="number"
                value={ageCat}
                onChange={handleInput}
                placeholder="Input Here.."
            ></InputStyle>
            <ButtonStyle onClick={handleClick}>Click Me</ButtonStyle>
            <ParagraphStyle>{afterConverter}</ParagraphStyle>
        </div>
    );
}

export default CatsAge;
