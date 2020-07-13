import React from 'react';
import './stylesheet/right.scss'

class RightSide extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }



    render() {
        return (
            <div className="right-container">
                <a href="mailto:dansteryoo@gmail.com" className="email__StyledEmailLink-sc-2epoq-1 jxlTta">dansteryoo@gmail.com</a>
            </div>
        )
    }
}

export default RightSide;
