import React from 'react';
import NavBar from './NavBar.js';
import SideMenu from './SideMenu.js';
import ModeBar from './ModeBar.js';
import FloatingButton from './FloatingButton.js';
import LoginPage from './LoginPage.js';
import AppMode from "./../AppMode.js"
import FeedPage from './FeedPage.js';
import Rounds from './Rounds.js';
import CoursesPage from './CoursesPage.js';
import AboutBox from './AboutBox.js';

const modeTitle = {};
modeTitle[AppMode.LOGIN] = "Welcome to Fantasy Football Scores";
modeTitle[AppMode.FEED] = "Home Page Feed";
modeTitle[AppMode.ROUNDS] = "SCOREBOARD";
modeTitle[AppMode.ROUNDS_LOGROUND] = "Log Points";
modeTitle[AppMode.ROUNDS_EDITROUND] = "Edit Points";
modeTitle[AppMode.COURSES] = "Teams";
modeTitle[AppMode.FLOATINGBUTTON] = "FloatingButton";

const modeToPage = {};
modeToPage[AppMode.LOGIN] = LoginPage;
modeToPage[AppMode.FEED] = FeedPage;
modeToPage[AppMode.ROUNDS] = Rounds;
modeToPage[AppMode.ROUNDS_LOGROUND] = Rounds;
modeToPage[AppMode.ROUNDS_EDITROUND] = Rounds;
modeToPage[AppMode.COURSES] = CoursesPage;
modeToPage[AppMode.FLOATINGBUTTON] = FloatingButton;

class App extends React.Component {

  constructor() {
    super();
    this.state = {mode: AppMode.LOGIN,
                  menuOpen: false,
                  mode1: AppMode.ROUNDS,
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
            logRound={() => this.handleChangeMode(AppMode.ROUNDS_LOGROUND)}
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