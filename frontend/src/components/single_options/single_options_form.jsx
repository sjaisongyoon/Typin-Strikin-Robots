import React from 'react';

class SingleOptionsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameSeconds: 30
        }
    }
    
    render () {

        return(
            <div className="singleoptions__form-container">
                <h3 className="singleoptions__form-header">
                    ENTER GAME LENGTH<br />IN SECONDS
                </h3>
                <form className="singleoptions__form" onSubmit={this.handleSubmit} >
                    <input 
                        type="number" 
                        className="singleoptions__form-input"
                        min="20"
                        max="60"
                        defaultValue="30" />
                    <input 
                        type="submit" 
                        value="START GAME"
                        className="singleoptions__form-btn-submit" />
                </form>
            </div>
        )
    }
}

export default SingleOptionsForm; 