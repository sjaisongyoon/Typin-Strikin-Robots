import React from 'react';
import {Link} from 'react-router-dom';


class GameSelect extends React.Component {

    render() {
        return (
            <div className="gameselect__container">
                <div className="gameselect__box">
                    <div className="gameselect__box-flex">
                        <div className="gameselect__message">
                            Select the Mode
                        </div>
                    </div>
                    
                    <div className="gameselect__box-flex">
                        <div className="gameselect__button"><Link to={`/single`}>
                            Single Play
                        </Link>
                        </div>
                    </div>
                    <div className="gameselect__box-flex">
                        <div className="gameselect__button">
                        <Link to={`/multi`}>
                            Multi Play
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameSelect;