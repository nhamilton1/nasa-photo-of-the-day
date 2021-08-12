import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,

    document.getElementById("root")
);
