import React from 'react';
import {Link} from 'react-router-dom';


class GameSelect extends React.Component {

    render() {
        return (
            <div className="gameselect__container">
                <div className="gameselect__box">
                    <h2 className="gameselect__message">
                        Select the Mode
                    </h2>
                    <Link to={`/single`} className="gameselect__single">
                        Single Play
                    </Link>
                    <Link to={`/multi`} className="gameselect__multi">
                        Multi Play
                    </Link>
                </div>
            </div>
        )
    }
}

export default GameSelect;