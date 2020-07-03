import React from "react";
import Styled from "styled-components";

function Header() {
    return (
        <div>
            <header>
                <Nav>
                    <Link to="/bmical">BMI Calculator</Link>
                </Nav>
                <Navitem>
                    <Link to="/texttransform">Text Transform</Link>
                </Navitem>

                <Navitem>
                    <Link to="/catage">Cat Age Conversion</Link>
                </Navitem>
            </header>
        </div>
    );
}

export default Header;
