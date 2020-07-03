import React from "react";

import "./App.css";
import CatsAge from "./pages/CatsAge/CatsAge";
import TextTransform from "./pages/TextTransform/TextTransform";
import BmiCalculator from "./pages/BmiCalculator/BmiCalculator";

function App() {
    return (
        <div className="App">
            <CatsAge />
            <TextTransform />
            <BmiCalculator />
        </div>
    );
}

export default App;
