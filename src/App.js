import React from 'react';
import './App.css';
import CarBars from './Components/CarBars';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      blueProgress: 0,
      redProgress: 0,
      greenProgress: 0,
      yellowProgress: 0
    });
    this.advanceBlue = this.advanceBlue.bind(this);
  }

  advanceBlue = () => {
    this.setState({blueProgress: this.state.blueProgress + 1}, () => {
        console.log('Blue Progress');
        console.log(this.state.blueProgress);
    });
}
advanceRed = () => {
  this.setState({redProgress: this.state.redProgress + 1}, () => {
      console.log('Red Progress');
      console.log(this.state.redProgress);
  });
}
advanceGreen = () => {
  this.setState({greenProgress: this.state.greenProgress + 1}, () => {
      console.log('Green Progress');
      console.log(this.state.greenProgress);
  });
}

advanceYellow = () => {
  this.setState({yellowProgress: this.state.yellowProgress + 1}, () => {
      console.log('Yellow Progress');
      console.log(this.state.yellowProgress);
  });
}





  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Races</h1>
        <CarBars
        advanceBlue={this.advanceBlue}
        advanceRed={this.advanceRed}
        advanceGreen={this.advanceGreen}
        advanceYellow={this.advanceYellow} />
        <br></br>
        <h4>Blue Wins: {this.state.blueProgress} | Red Wins: {this.state.redProgress} | Green Wins: {this.state.greenProgress} | Yellow Wins: {this.state.yellowProgress}</h4>
      </header>
    </div>
  );
}}

export default App;
