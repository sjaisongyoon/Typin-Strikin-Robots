import React from 'react';
import { withRouter } from 'react-router-dom';

class SingleOptionsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameSeconds: 30
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            gameSeconds: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.setGameTime(this.state.gameSeconds);
        this.props.history.push('/games/single');
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
                        value={this.state.gameSeconds}
                        onChange={this.handleChange}/>
                    <input 
                        type="submit" 
                        value="START GAME"
                        className="singleoptions__form-btn-submit" />
                </form>
            </div>
        )
    }
}

export default withRouter(SingleOptionsForm); 