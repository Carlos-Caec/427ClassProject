import React from 'react';
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
          <h2>Acess to files.</h2>
          <img src="https://canestrinilex.com/assets/Uploads/blog-pics/f613404b87/Topsecretsidebar__ScaleWidthWzcwMF0.jpg" 
           height="200" width="200"/>
          <p style={{fontStyle: "italic"}}>Version 1.0 Class Project CPTS_427</p>
          </center>
      </div>

        );

    }
  }
  export default HomePage;
  