import React from 'react';
import AppMode from './../AppMode.js'

class SideMenu extends React.Component {

//renderModeItems -- Renders correct subset of mode menu items based on
//current mode, which is stored in this.prop.mode. Uses switch statement to
//determine mode.
renderModeMenuItems = () => {
  switch (this.props.mode) {
    case AppMode.HOMEPAGE:
      return(
        <div>
         <a className="sidemenu-item" >
            <span className="fa fa-plus"></span>&nbsp;Button</a>
        </div>
      );
    break;
    case AppMode.HOMEPAGE:
      return(
        <div>
          <a className="sidemenu-item" >
            <span className="fa fa-plus"></span>&nbsp;Button</a>
        </div>
      );
    break;
    default:
        return null;
    }
}

    render() {
       return (
        <div className={"sidemenu " + (this.props.menuOpen ? "sidemenu-open" : "sidemenu-closed")}
             onClick={this.props.toggleMenuOpen}>
          {/* SIDE MENU TITLE */}
          <div className="sidemenu-title">
              <img src='https://media-exp1.licdn.com/dms/image/C5603AQEWMnL0q7LblQ/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=11nEmz-HVGJXV1E-b-y043HwzWlR9Ey2R6WLSfgEtxg' height='50' width='50' />
              <span id="userID" className="sidemenu-userID">&nbsp;{this.props.userId}</span>
          </div>
          {/* MENU CONTENT */}
          {this.renderModeMenuItems()}
          {/* The following menu items are present regardless of mode */}
          <a id="aboutBtn" className="sidemenu-item"
              onClick={this.props.showAbout}>
            <span className="fa fa-info-circle"></span>&nbsp;About</a>
          <a id="logOutBtn" className="sidemenu-item"
             onClick={this.props.logOut}>
            <span className="fa fa-sign-out-alt"></span>&nbsp;Log Out</a>
            
        </div>
       );
    }
}

export default SideMenu;
