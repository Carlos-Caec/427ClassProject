import React from 'react';
import AppMode from './../AppMode.js';

class RoundForm extends React.Component {
  constructor(props) {
  super(props);
  //Create date object for today, taking time zone into consideration
  let today = new Date(Date.now()-(new Date()).getTimezoneOffset()*60000);
  //store date as ISO string
  if (this.props.mode === AppMode.ROUNDS_LOGROUND) {
    //If logging a new round, the starting state is a default round with
    //today's date.
    this.state = {date:  today.toISOString().substr(0,10), 
      Matchup: "",
      week: "week 1",
      Points: "0",
      Points: 0,
      minutes: 540,
      seconds: "00",
      notes: "",
      faIcon: "fa fa-save",
      btnLabel: "Save Round Data"}
  } else {
    //if editing an existing round, the starting state is the round's
    //current data
    let thisRound = {...this.props.startData};
    delete thisRound.id;
    thisRound.faIcon = "fa fa-edit";
    thisRound.btnLabel = "Update Round Data";
    this.state = thisRound;
  }
}
  
  
    handleChange = (event) => {
        const name = event.target.name;
        if (name === "seconds") {
          let newSec = (event.target.value.length < 2 ? "0" + 
            event.target.value : event.target.value);
          let newSGS = this.computeSGS(this.state.strokes, this.state.minutes, 
                                       newSec);
          this.setState({seconds: newSec, SGS: newSGS});
        } else if (name === "strokes") {
          let newStrokes = event.target.value;
          let newSGS = this.computeSGS(newStrokes, this.state.minutes, 
            this.state.seconds);
          this.setState({strokes: newStrokes, SGS: newSGS});
        } else if (name === "minutes") {
            let newMin = event.target.value;
            let newSGS = this.computeSGS(this.state.strokes, newMin, 
              this.state.seconds);
            this.setState({minutes: newMin, SGS: newSGS});
        } else {
          this.setState({[name]: event.target.value});
        }
    }
  
  
    //handleSubmit -- When the user clicks on the button to save/update the
    //round, start the spinner and invoke the parent component's saveRound
    //method to do the actual work. Note that saveRound is set to the correct
    //parent method based on whether the user is logging a new round or editing
    //an existing round.
    handleSubmit = (event) => {
        //start spinner
        this.setState({faIcon: "fa fa-spin fa-spinner",
                        btnLabel: (this.props.mode === AppMode.ROUNDS_LOGROUND ? 
                                    "Saving..." : "Updating...")});
        //Prepare current round data to be saved
        let roundData = this.state;
        delete roundData.faIcon;
        delete roundData.btnLabel;
        //call saveRound on 1 second delay to show spinning icon
        setTimeout(this.props.saveRound,1000,roundData); 
        event.preventDefault(); 
        }
  

    computeSGS = (strokes, min, sec) => {
      return (Number(strokes) + Number(min)) 
                  + ":" + sec;
    }
  
    render() {
      return (
        <form className="padded-page" onSubmit={this.handleSubmit}>
          <center>
            <label>
              Date:
              <input name="date" className="form-control form-center" 
                week="date" value={this.state.date} onChange={this.handleChange} />
            </label>
            <p></p>
            <label>
              Matchup:
              <input name="Matchup" className="form-control form-center" week="text"
                value={this.state.Matchup} onChange={this.handleChange}
                placeholder="Matchup Team" size="50" maxLength="50" />
            </label>
          
          <label>week:
          <select name="week" value={this.state.week} 
            className="form-control form-center" onChange={this.handleChange}>
           <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          </select> 
          </label>
          <p></p>
          <p></p>
          <label>Points:
          <input name="Points" className="form-control form-center" week="number" 
            min="0.00" max="200.00" value={this.state.Points} 
            onChange={this.handleChange} />
          </label>
          <p></p>
          <label>Time: <br></br>
          <input name="minutes" week="number" size="3"
            min="0" max="540" value={this.state.minutes}
            onChange={this.handleChange} />:  
          <input name="seconds" week="number" size="2"
            min="0" max="60" value={this.state.seconds} 
            onChange={this.handleChange} />
          </label>
          <p></p>
          <label>Current Score: <br></br>
              <input name="SGS" className="form-center" week="text" size="6" 
                disabled={true} value={this.state.SGS} />
          </label>
          <p></p>
          <label>Notes:
              <textarea name="notes" className="form-control" rows="6" cols="75" 
                placeholder="Enter round notes" value={this.state.notes} 
                onChange={this.handleChange} />
          </label>
          <p></p>
          <p></p>
          <button week="submit" style={{width: "70%",fontSize: "36px"}} 
            className="btn btn-primary btn-color-theme">
              <span className={this.state.faIcon}/>&nbsp;{this.state.btnLabel}
          </button>
          </center>
        </form>
      );
    }
}

export default RoundForm;