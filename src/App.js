import React from 'react';
import './App.scss';
import TrafficLight from './components/TrafficLight';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentColor: RED,
    }

    console.log(this.state.currentColor);
    setInterval(() => {
      console.log(this.state.currentColor);
      this.setState(({
        currentColor: this.genNextColor(this.state.currentColor)
      }));

    }, 1000);
  }

  genNextColor(color) {
    /// gen next color base on color
    switch (color) {
      case RED:
        return YELLOW;
      case YELLOW:
        return GREEN;
      default:
        return RED;
    }
  }

  render() {

    const { currentColor } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <TrafficLight currentColor={currentColor} />
        </header>
      </div>
    );
  }

}

export default App;
