import React, { Component } from "react";
import TrafficLight from "./traffic-light";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light: ""
    };
  }
  componentDidMount() {
    this.interval = setInterval(this.changeLight, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  changeLight = () => {
    const { light } = this.state;
    if (light === "green") {
      this.setState({ light: "yellow" });
    } else if (light === "yellow") {
      this.setState({ light: "red" });
    } else {
      this.setState({ light: "green" });
    }
  };
  render() {
    const { light } = this.state;
    return <TrafficLight light={light} />;
  }
}

export default App;
