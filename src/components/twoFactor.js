//Rounds -- A parent component for the app's "rounds" mode.
//Manages the rounds data for the current user and conditionally renders the
//appropriate rounds mode page based on App's mode, which is passed in as a prop.

import React from 'react';
import AppMode from './../AppMode.js';

class twoFactor extends React.Component {
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
            <p>
                <i>Need help signing in?</i>
            </p>
            <p>
                <i>Version 2.0</i>
            </p>
            </form>
        </center>
        <div className="padded-page">
                <center>
                <h1 >Network Authentication</h1>
                <h2>This page is under construction.</h2>
                <h2>I need a modal box to input the SMS message for verificationn</h2>
                <img src="https://canestrinilex.com/assets/Uploads/blog-pics/f613404b87/Topsecretsidebar__ScaleWidthWzcwMF0.jpg"
                 height="200" width="200"/>
                <p style={{fontStyle: "italic"}}>Version 2.0</p>
                </center>
            </div>
        </div>
        )
    }
}

export default twoFactor;
