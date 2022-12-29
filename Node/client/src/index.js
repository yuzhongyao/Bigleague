import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);


//ReactDOM.render(<App/>, document.getElementById("root"));

root.render(
    <Router>
        <App name="Big League"/>
    </Router>
);