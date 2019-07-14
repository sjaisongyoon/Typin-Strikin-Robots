import React from 'react';
import {withRouter, Link} from 'react-router-dom';


class GameSelect extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="gameselect__container">
                <div className="gameselect__box">
                    <h2 className="gameselect__message">
                        Select the Mode
                    </h2>
                    <Link to={`/`} className="gameselect__single">
                        Single Play
                    </Link>
                    <Link to={`/`} className="gameselect__multi">
                        Multi Play
                    </Link>
                </div>
            </div>
        )
    }
}

export default GameSelect;