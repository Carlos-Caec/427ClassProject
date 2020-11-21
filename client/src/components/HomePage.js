import React from 'react';
import AppMode from "./../AppMode.js";

  /************************Dummy Data info web app***************************************************************************/
  class HomePage extends React.Component {

    info = () => {
        alert("clasified");
    }
    render(){
        return (
          <div className="padded-page">
          <center>
          <h1 >Classified</h1>
          <h2>Access to files.</h2>
          <img src="https://canestrinilex.com/assets/Uploads/blog-pics/f613404b87/Topsecretsidebar__ScaleWidthWzcwMF0.jpg" 
           height="200" width="200"/>
          <p style={{fontStyle: "italic"}}>Version 1.0 Class Project CPTS_427</p>
          </center>
          <a id="logOutBtn" className="logOut-Btn"
             onClick={this.props.logOut}>
            <span className="floatbtn-icon"></span>&nbsp;Log Out</a>
      </div>

        );

    }
  }
  export default HomePage;
  