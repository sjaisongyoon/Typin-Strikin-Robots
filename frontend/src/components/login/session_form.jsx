import React from 'react';
import {withRouter, Link} from 'react-router-dom';



class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username:"", password:"", errors:{}, isDemo: false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleSignupLogin = this.handleSignupLogin.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
        this.handleDemoButtons = this.handleDemoButtons.bind(this);
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
        if (this.props.otherRoute === "login") {
            this.props.formProcess(user)
                .then(() => this.handleSignupLogin() );
        } else {
        this.props.formProcess(user)
            .then(() => this.props.history.push(`/select`));
        }
    }

    handleSignupLogin() {
        let user = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.login(user)
            .then(() => this.props.history.push(`/select`));
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


    handleDemoSubmit(e){
        e.preventDefault();
        let demoUsername = e.target.id.split('');
        let demoPassword = 'password'.split(''); 
        this.setState({
            username: "",
            password: ""
        }, () => this.demoUser(demoUsername, demoPassword))
    } 

    demoUser(demoUsername, demoPassword){
        let rate = 50;
        if (demoUsername.length > 0) {
            this.setState({
                username: this.state.username += demoUsername.shift()
            }, () => window.setTimeout(() => this.demoUser(demoUsername, demoPassword), rate))
        } else if (demoPassword.length > 0) {
            this.setState({
                password: this.state.password += demoPassword.shift()
            }, () => window.setTimeout(() => this.demoUser(demoUsername, demoPassword), rate))

        } else if (demoPassword.length === 0) {
            this.props.formProcess({
                username: this.state.username,
                password: this.state.password
            })
                .then(() => this.props.history.push('/select'))        } 
          
    }

    handleDemoButtons(e){
        e.preventDefault();
        this.setState({
            isDemo: true
        })
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

                        {this.props.formType === "Sign Up" ? null :
                            (this.props.formType === "Log In" && this.state.isDemo) ? 
                                <div className="demobuttons__container">
                                    <input type="submit" value="Demo Player 1" 
                                        className="submitdemo__button" 
                                        onClick={this.handleDemoSubmit} id="Player 1" />
                                    <input type="submit" value="Demo Player 2" 
                                        className="submitdemo__button" 
                                        onClick={this.handleDemoSubmit} id="Player 2"/>
                                </div> : 
                                <p className="sessionform__message">
                                    <button className={`sessionform__button ${this.state.isDemo ? 'hidden' : ''}`} 
                                    onClick={this.handleDemoButtons}>
                                        Continue As Guest
                                    </button>
                                </p> }

                        {/* <p className="sessionform__message"> 
                            <button className={`sessionform__button ${this.state.isDemo ? '' : 'hidden'}`} onSubmit={this.handleDemoButtons}>Continue As Guest</button> 
                        </p> */}
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SessionForm);