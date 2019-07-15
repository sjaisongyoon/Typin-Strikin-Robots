import React from 'react';
import SingleOptionsForm from './single_options_form'

class Single extends React.Component {
    render () {
        return(
            <div className="single__container">
                <div className="singleoptions__title">
                    Single Player MODE 
                </div>
                <div className="single__leaderboard">
                    <LeaderboardSingle />
                </div>
                <div className="single__options">
                    <SingleOptionsForm />
                </div>
            </div>
        )
    }
}

export default Single; 