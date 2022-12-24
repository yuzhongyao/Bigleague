import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from "./App";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);


//ReactDOM.render(<App/>, document.getElementById("root"));
root.render(<App name="Big League"/>);