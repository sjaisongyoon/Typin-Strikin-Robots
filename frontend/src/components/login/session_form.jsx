import React from 'react';
import {withRouter} from 'react-router-dom';



class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username:"", password:"", errors:{}};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.formProcess(user)
            .then( () => this.props.history.push(`/`));
    }

    renderErrors() {
        return(
            <ul className="loginform__errors">
                {Object.keys(this.state.errors).map((error, i) => (
                <li className="loginform__errors-listitems" key={`error-${i}`}>
                    {this.state.errors[error]}
                </li>
                ))}
            </ul>
        );
    }


    render () {
        return (
            <div className="sessionform">
                <form onSubmit={this.handleSubmit}>
                    <div className="sessionform__input-container">
                        <input className="sessionform__input"
                                value={this.state.username}
                                onChange={this.update('username')}
                                placeholder="what is your username?"
                                />
                        <br />
                        <input className="sessionform__input"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="what is your password?"
                                />
                        <br />
                        <input className="sessionform__submit" type="submit" value={this.props.formType} onClick={this.handleSubmit}/>
                        {this.renderErrors()}
                    </div>

                </form>
            </div>
        )
    }
}

export default withRouter(SessionForm);