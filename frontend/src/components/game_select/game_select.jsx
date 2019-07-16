import React from 'react';
import {Link} from 'react-router-dom';
import {singlePlayer, multiPlayer} from './game_select_instructions';

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
                            <div className="gameselect__button-singlePlayer">
                                <Link 
                                    to={`/options/single`} className="gameselect__button gameselect__button-container">
                                    TIME ATTACK
                                </Link>
                                <div className="gameselect__instructions-container-singlePlayer arrow_box-left">
                                    <ul>
                                        {singlePlayer.map((instruction, i) => <li key={i}>{instruction}</li>)}
                                    </ul>
                                </div>
                            </div>
                            <div className="gameselect__button-multiPlayer">
                            <Link 
                                to={`/options/multi`} 
                                className="gameselect__button gameselect__button-container">
                                MULTIPLAYER
                            </Link>
                            <div className="gameselect__instructions-container-multiPlayer arrow_box-right">
                                <ul>
                                    {multiPlayer.map((instruction,i) => <li key={(i+1)*10}>{instruction}</li>)}
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameSelect;