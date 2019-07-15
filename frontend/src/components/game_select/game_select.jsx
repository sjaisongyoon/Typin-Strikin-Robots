import React from 'react';
import {Link} from 'react-router-dom';


class GameSelect extends React.Component {

    render() {
        return (
            <div className="gameselect__container">
                <div className="gameselect__box">
                    <div className="gameselect__box-flex">
                        <div className="gameselect__message">
                            SELECT GAME MODE
                        </div>
                    </div>
                    
                    <div className="gameselect__box-flex">
                        <div className="gameselect__button-container">
                            <Link to={`/single`} className="gameselect__button">
                            Single Play
                        </Link>
                        </div>
                    </div>
                    <div className="gameselect__box-flex">
                        <div className="gameselect__button-container">
                        <Link to={`/multi`} className="gameselect__button">
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