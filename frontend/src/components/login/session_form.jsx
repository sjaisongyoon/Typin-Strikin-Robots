import React from 'react';
import {withRouter, Link} from 'react-router-dom';



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
        // debugger;
        if (this.props.formRoute === "login") {
            this.props.formProcess(user)
            .then( (user) => this.props.login(user) )
                .then( () => this.props.history.push(`/games`));

        } else {
        this.props.formProcess(user)
            .then( () => this.props.history.push(`/games`));
        }
    }

    renderErrors() {
        return(
            <ul className="loginform__errors">
                {Object.keys(this.props.errors).map((error, i) => (
                <li className="loginform__errors-listitems" key={`error-${i}`}>
                    {this.props.errors[error]}
                </li>
                ))}
            </ul>
        );
    }


    render () {
        return (
            <div className="sessionform">

                <form onSubmit={this.handleSubmit}>
                    <h3 className="sessionform__title">{this.props.formType}</h3>
                    <div className="sessionform__input-container">
                        <input className="sessionform__input"
                                value={this.state.username}
                                onChange={this.update('username')}
                                placeholder="Username"
                                />
                        <br />
                        <input type="password"
                                className="sessionform__input"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                                />
                        <br />
                        <input className="sessionform__submit" type="submit" value='ENTER' onClick={this.handleSubmit}/>
                        {this.renderErrors()}

                        <p className="sessionform__message">{this.props.message} &nbsp;<Link to={`/${this.props.otherRoute}`} className="sessionform__button">
                            {this.props.otherForm}
                        </Link></p>
                        
                    </div>

                </form>
            </div>
        )
    }
}

export default withRouter(SessionForm);