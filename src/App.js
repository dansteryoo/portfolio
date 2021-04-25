import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./Main";
import Loading from "./static/loading.gif";

const App = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 3000);
    });

    if (loaded) {
        return (
            <Fragment>
                <Navbar />
                <Main />
            </Fragment>
        );
    } else {
        return (
            <div className="loading-container">
                <img className="loading-logo" src={Loading} alt="loading"></img>
            </div>
        );
    }
};

export default App;
