import React from 'react';
import AppMode from '../AppMode.js';


class ModeBar extends React.Component {
    render() {
      return(
        <div className={"modebar" + (this.props.mode === AppMode.LOGIN ? 
          " invisible" :
           (this.props.menuOpen ? " ignore-click visible" : " visible" ))}>
        <a className={(this.props.mode === AppMode.HOMEPAGE ? " item-selected" : null)}
            onClick={()=>this.props.changeMode(AppMode.HOMEPAGE)}>
          <span className="modebaricon fa fa-th-list"></span>
          <span className="modebar-text">Home Page</span>
        </a>
       
        </div>
      );
    }
}

export default ModeBar;
