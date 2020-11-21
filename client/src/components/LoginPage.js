import React from 'react';
import AppMode from "./../AppMode.js";

class LoginPage extends React.Component {

    constructor() {
        super();
        //Create a ref for the email input DOM element
        this.emailInputRef = React.createRef();
        this.state = {
            faIcon: "fa fa-sign-in",
            btnLabel: "Log In"
        }
      }
    
    //Focus cursor in email input field when mounted
    componentDidMount() {
        this.emailInputRef.current.focus();
    }  
    dummyFunction = () =>{

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({faIcon: "fa fa-spin fa-spinner", btnLabel: (this.props.mode === AppMode.LOGIN ? 
            "Loging In" : AppMode.HOMEPAGE)})
        setTimeout(this.props.changeMode(AppMode.HOMEPAGE),1000);
        this.props.setUserId(this.emailInputRef.current.value);
    }

    render() {
        return(
        <div id="login-mode-div" className="padded-page">
        <center>
            <h1 />
            <form id="loginInterface" onSubmit={this.handleSubmit}>
            <label htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                Email:
                <input
                ref={this.emailInputRef}
                className="form-control login-text"
                type="email"
                placeholder="Enter Email Address"
                id="emailInput"
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                required={true}
                />
            </label>
            <p />
            <label htmlFor="passwordInput" style={{ padding: 0, fontSize: 24 }}>
                Password:
                <input
                className="form-control login-text"
                type="password"
                placeholder="Enter Password"
                pattern="[A-Za-z0-9!@#$%^&*()_+\-]+"
                required={true}
                />
            </label>
            <p className="bg-danger" id="feedback" style={{ fontSize: 16 }} />
            <button
                type="submit"
                className="btn-color-theme btn btn-primary btn-block login-btn">
                <span id="login-btn-icon" className={this.state.faIcon}/>
                &nbsp;{this.state.btnLabel}
            </button>
            <br />
            <p>
                <i>Need help signing in?</i>
            </p>
            <p>
                <i>Version 2.0</i>
            </p>
            </form>
        </center>
        </div>
        )
    }
}

export default LoginPage;
