import React from 'react';
import AppMode from './../AppMode.js';

class twoFactor extends React.Component {
    constructor() {
        super();
        //Create a ref for the email input DOM element
        this.emailInputRef = React.createRef();
        this.state = {
        }
      }
    
 
    dummyFunction = () =>{

    }

    render() {
        return(
            
            <div className="padded-page">
            <center>
            <h1 >SMS Authentication</h1>
            <h2> (+1 XXX-XXX-8181)</h2>
            <img src="https://canestrinilex.com/assets/Uploads/blog-pics/f613404b87/Topsecretsidebar__ScaleWidthWzcwMF0.jpg" 
             height="200" width="200"/>
            <p>Enter Code</p>
            <p>Send Code</p>
            <p>option to not challenge after a given time.</p>
            </center>
            <a id="logOutBtn" className="logOut-Btn"
               onClick={this.props.logOut}>
              <span className="floatbtn-icon"></span>&nbsp;Verify</a>
        </div>
        )
    }
}

export default twoFactor;
