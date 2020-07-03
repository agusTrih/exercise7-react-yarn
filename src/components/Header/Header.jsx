import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyle = Styled.header`
height: 90px;
display: flex;
justify-content: center;
align-items: center;
`;
const NavStyle = Styled.nav`
padding:10px;
margin: 10px;
color: blue;
`;

function Header() {
    return (
        <div>
            <HeaderStyle>
                <NavStyle>
                    <Link to="/bmical">BMI Calculator</Link>
                </NavStyle>
                <NavStyle>
                    <Link to="/texttransform">Text Transform</Link>
                </NavStyle>

                <NavStyle>
                    <Link to="/catsage">Cat Age Conversion</Link>
                </NavStyle>
            </HeaderStyle>
        </div>
    );
}

export default Header;
