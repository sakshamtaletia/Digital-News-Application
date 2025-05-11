import React from "react";
import  ReactDom from 'react-dom/client'
// import App from "./ClassComponents/App";
import App from "./FunctionComponent/App"
// import App from "./FunctionComponent2/App"

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
    <>
    <App/>
    </>
)