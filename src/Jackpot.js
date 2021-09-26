
import './Jackpot.css';

import React from "react";

class Jackpot extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props)
    this.state = {lang: props.lang, jackpot: []}
    
  }

  

  //Loads the json data now that I switched to react
  componentDidMount() {
      fetch('https://api.rafflebox.ca/goldrush-service/ticker/salisburyfire')
      .then((response) => response.json())
      .then(jp => {
          //console.log(jp)
          this.setState({ jackpot: jp.data });            
          
      
      });
  }

  render() {
      
      return (
          <div>
              <div className="jackpot_title">This Weeks 50/50 Jackpot<br/>Draw #{this.state.jackpot.drawNum}</div>
              <div className="jackpot_amt_container"><div className="jackpot_amt">${this.state.jackpot.jackpotDollars}</div></div>
          </div>
      )
  }
}

export default Jackpot;
