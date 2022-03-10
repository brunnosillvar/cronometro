import React, {Component} from 'react';
import './App.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      number: 0,
      buttonLabel: 'Go'
    };
    this.timer = null;
    this.play = this.play.bind(this);
    this.clean = this.clean.bind(this);
  }

  play(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.buttonLabel = 'Go';
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.number += 0.1;
        this.setState(state);
      },100);
      state.buttonLabel = 'Pause';
    }

    this.setState(state);
  }

  clean(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.number = 0;
    state.buttonLabel = 'Go';
    this.setState(state);

  }

  render(){
    return(
      <div className="container">
        <img src={require('./assets/cronometro.png')} className="img" />
        <a className="timer">{this.state.number.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="button" onClick={this.play}>{this.state.buttonLabel}</a>
          <a className="button" onClick={this.clean}>Clean</a>
        </div>
      </div>
    );
  }
}

export default App;