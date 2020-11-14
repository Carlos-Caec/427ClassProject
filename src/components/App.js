import React from 'react';
import NavBar from './NavBar.js';
import SideMenu from './SideMenu.js';
import ModeBar from './ModeBar.js';
import LoginPage from './LoginPage.js';
import AppMode from "./../AppMode.js"
import HomePage from './HomePage.js';
import TWOFACTOR from './twoFactor.js';
import AboutBox from './AboutBox.js';
import twoFactor from './twoFactor.js';

const modeTitle = {};
modeTitle[AppMode.LOGIN] = "Network Authentication";
modeTitle[AppMode.HOMEPAGE] = "Access Granted";
modeTitle[AppMode.TWOFACTOR] = "SMS Authentication";

const modeToPage = {};
modeToPage[AppMode.LOGIN] = LoginPage;
modeToPage[AppMode.HOMEPAGE] = HomePage;
modeToPage[AppMode.TWOFACTOR] = twoFactor;

class App extends React.Component {

  constructor() {
    super();
    this.state = {mode: AppMode.LOGIN,
                  menuOpen: false,
                  mode1: AppMode.TWOFACTOR,
                  userId: "",
                  showAbout: false};
  }

  toggleAbout = () => {
    this.setState(prevState => ({showAbout: !prevState.showAbout}));
  }

  handleChangeMode = (newMode) => {
    this.setState({mode: newMode});
  }

  openMenu = () => {
    this.setState({menuOpen : true});
  }
  
  closeMenu = () => {
    this.setState({menuOpen : false});
  }

  toggleMenuOpen = () => {
    this.setState(prevState => ({menuOpen: !prevState.menuOpen}));
  }

  setUserId = (Id) => {
    this.setState({userId: Id});
  }

  render() {
    const ModePage = modeToPage[this.state.mode];
    return (
      <div>
        {this.state.showAbout ? <AboutBox hideAbout={this.toggleAbout}/> : null}
        <NavBar 
          title={modeTitle[this.state.mode]} 
          mode={this.state.mode}
          changeMode={this.handleChangeMode}
          menuOpen={this.state.menuOpen}
          toggleMenuOpen={this.toggleMenuOpen}/>
          <SideMenu 
            menuOpen = {this.state.menuOpen}
            mode={this.state.mode}
            toggleMenuOpen={this.toggleMenuOpen}
            userId={this.state.userId}
            showAbout={this.toggleAbout}
            logOut={() => this.handleChangeMode(AppMode.LOGIN)}
            />
          <ModeBar 
            mode={this.state.mode} 
            changeMode={this.handleChangeMode}
            menuOpen={this.state.menuOpen}/>
          <ModePage 
            menuOpen={this.state.menuOpen}
            mode={this.state.mode}
            changeMode={this.handleChangeMode}
            userId={this.state.userId}
            setUserId={this.setUserId}/>
      </div>
    );  
  }
}

export default App;