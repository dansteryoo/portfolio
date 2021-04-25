import React from "react";
import LeftNav from "./LeftNav";
import RightSide from "./RightSide";
import Middle from "./Middle";
import "./stylesheet/main.scss";

const Main = () => {
    return (
        <div>
            <div className="main-container">
                <LeftNav/>
                <Middle/>
                <RightSide/>
            </div>
        </div>
    );
};

export default Main;
