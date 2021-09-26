
import React from 'react';
import './App.css';
import Jackpot from './Jackpot';
import Apply from './Apply';



class App extends React.Component{
  constructor(props) {
    super(props);
    //console.log(props)
    this.state = {lang: props.lang}    
  }

  toggle() {
    
    let lang;
    (this.state.lang !== "en"?
      lang = "en"
    :
      lang = "fr"
    )
    console.log(lang)
    this.setState({lang: lang})
}



  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <div className="App-Logo"><img src={process.env.PUBLIC_URL + '/images/NBFD Logo.png'} className="App-Logo-img" alt="NBFF"/></div>
            <div className="App-title-container">
              <div className="App-Title">New Brunswick Firefighters 50/50</div>
              <div className="App-Menu">About - Jackpot - Past Winner - Rules - Apply - Language:<button id="App-Menu-Lang" onClick={this.toggle.bind(this)}>{this.state.lang}</button></div>          
            </div>
          </div>
        </header>
        <div className="App-container">
          
          <div className="App-Jackpot"><Jackpot lang={this.state.lang}/></div>
          <div className="App-Past-Winner"></div>
          <div className="App-Rules"></div>
          <div className="App-Apply"><Apply lang={this.state.lang}/></div>
          
        </div>
      </div>
    );
  }
}

// - Language:<button id="App-Menu-Lang" onClick={this.toggle.bind(this)}>{this.state.lang}</button>
// add this to the menu in the future


export default App;
