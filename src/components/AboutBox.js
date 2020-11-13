import React from 'react';

class AboutBox extends React.Component {

    render() {
        return (
          <div className="modal" role="dialog">
          <div className="modal-content">
           <div className="modal-header">
               <p className="modal-title">About Fantasy Football Scores</p>
                  <button id="modalClose" className="close" 
                   onClick={this.props.hideAbout}>
                      &times;</button>
          </div>
          <div className="modal-body">
            <center>
            <img src="https://factorydirectcraft.com/pimages/20160906095229-862068_med/small_foam_footballs_medium.jpg" height="200" width="200"/>
              <h4>Fantasy Football Scores</h4>
              <p>Version 2.0 &copy; 2020 Carlos Martinez WebApp For Fantasy Football Scores.
             </p>

              </center>
              <div className="modal-footer">
              <button className="btn btn-secondary"
                 onClick={this.props.hideAbout}>
                   OK</button>
              </div>
          </div>
       </div>
      </div>
      
                    );
    }   
}

export default AboutBox;