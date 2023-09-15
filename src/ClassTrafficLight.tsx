import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    trafficLightIndex: 0,
  };

  nextState = () => {
    const { trafficLightIndex } = this.state;
    if (trafficLightIndex < 2) {
      this.setState({ trafficLightIndex: trafficLightIndex + 1 });
    } else {
      this.setState({ trafficLightIndex: 0 });
    }
  };

  render() {
    const { trafficLightIndex } = this.state;
    const isRed = trafficLightIndex === 0 ? "red" : "black";
    const isYellow = trafficLightIndex === 1 ? "yellow" : "black";
    const isGreen = trafficLightIndex === 2 ? "green" : "black";

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={`circle ${isRed}`}></div>
          <div className={`circle ${isYellow}`}></div>
          <div className={`circle ${isGreen}`}></div>
        </div>
        <button className="next-state-button" onClick={this.nextState}>
          Next State
        </button>
      </div>
    );
  }
}
