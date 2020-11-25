import React from 'react';
import AppMode from './../AppMode.js';

class twoFactor extends React.Component {
    constructor() {
        super();
        //Create a ref for the email input DOM element
       this.emailInputRef = React.createRef();
        this.state = {
            SMScode: "0",
        }
      }

  /*   handleChange = (event) => {
        const name = event.target.name;
    
        this.setState({[name]: event.target.value});
    
       
    } */
    handleSubmitCode = () => {
        console.log(this.state.SMScode);
        
    }
    handleSendCode = () => {
        alert("inside send code");
    }

    //try adding the actual number where i have the number number displayed.
    render() {
        return(
            
            <div className="padded-page">
            <center>
            <h1 >SMS Authentication</h1>
            
            <img src="https://image.freepik.com/free-vector/2fa-icon-password-secure-login-authentication-verification-sms-push-code-messages-symbol-smartphone-mobile-phone-flat-isolated-pictogram_101884-953.jpg" 
             height="300" width="400"/>

             <h2> (+1 XXX-XXX-8181)</h2>
             
              <form onSubmit={this.handleSubmitCode}>
            <label>
                Enter Code
                <input
                className="form-control form-text form-center"
                name="SMSCode"
                type="SMSCode"
                size="35"
                placeholder="Enter Code Here"
                required={true}                
                onChange={this.handleChange}
                />
            </label>
            </form>
            <button type="submit" 
                className="btn btn-primary btn-color-theme modal-submit-btn"
                onClick={this.handleSendCode}>
                <span className="fa fa-user-plus"></span>&nbsp;Send Code
            </button>
            <p>option to not challenge after a given time.</p>

            </center>
            <a id="logOutBtn" className="logOut-Btn"
               onClick={this.props.logOut}>
              <span className="floatbtn-icon"></span>&nbsp;Cancel</a>
        </div>
        )
    }
}

export default twoFactor;
