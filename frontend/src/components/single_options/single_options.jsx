import React from 'react';
import SingleOptionsFormContainer from './single_options_form_container';
import LeaderboardSingleContainer from '../leaderboard/leaderboard_single_container'

class SingleOptions extends React.Component {
    render () {
        return (
            <div className="single__container">
                <div className="single__title-wrapper">
                    <h2 className="singleoptions__title">
                        TIME ATTACK
                    </h2>
                </div>
                <div className="single__options">
                    <SingleOptionsFormContainer />
                </div>
            </div>
        )
    }
}

export default SingleOptions; 
