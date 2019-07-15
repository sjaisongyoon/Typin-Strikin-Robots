import React from 'react';
import SingleOptionsForm from './single_options_form';
import LeaderboardSingleContainer from '../leaderboard/leaderboard_single_container'

class SingleOptions extends React.Component {
    render () {
        return (
            <div className="single__container">
                <div className="singleoptions__title">
                    Single Player MODE 
                </div>
                <div className="single__leaderboard">
                    {/* <LeaderboardSingleContainer /> */}
                </div>
                <div className="single__options">
                    {/* <SingleOptionsForm /> */}
                </div>
            </div>
        )
    }
}

export default SingleOptions; 
