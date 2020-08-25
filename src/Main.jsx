import React from 'react';
import LeftNav from './LeftNav'
import RightSide from './RightSide'
import Middle from './Middle'
import './stylesheet/main.scss'


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }



    render() {
        return (
            <div>
                <div className="main-container">
                    <LeftNav></LeftNav>
                    <Middle ></Middle>
                    <RightSide></RightSide>
                </div>
                <div className="credits">Design inspired by https://brittanychiang.com, built by Danny Yoo</div>
            </div>
        )
    }
}

export default Main;
