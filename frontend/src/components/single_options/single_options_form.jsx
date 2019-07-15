import React from 'react';

class SingleOptionsForm extends React.Component {
    render () {

        return(
            <div className="singleoptions__container">
                <div className="singleoptions__body">
                    <input className="singleoptions__input"
                            type="number"
                            min="10"
                            max="120"></input>
                    <input className="singleoptions_submit"
                            type="submit"
                            value="Start!"></input>
                </div>

            </div>
        )
    }
}

export default SingleOptionsForm; 