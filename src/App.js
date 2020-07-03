import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import CatsAge from "./pages/CatsAge/CatsAge";
import TextTransform from "./pages/TextTransform/TextTransform";
import BmiCalculator from "./pages/BmiCalculator/BmiCalculator";
import Header from "./components/Header/Header";

import Styled from "styled-components";

const Flexible = Styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Flexible>
                    <Switch>
                        <Route exact path="/">
                            <BmiCalculator />
                        </Route>
                        <Route exact path="/catsage">
                            <CatsAge />
                        </Route>
                        <Route exact path="/texttransform">
                            <TextTransform />
                        </Route>
                        <Route path="*">
                            <BmiCalculator />
                        </Route>
                    </Switch>
                </Flexible>
            </Router>
        </div>
    );
}

export default App;
