import React from "react";
import ReactDOM, { render } from "react-dom";
import SeasonDisplay from "./seasonDIsplay";
class App extends React.Component {
  state = { lat: null, errorMessage: null };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position?.coords?.latitude }),

      (err) => this.setState({ errorMessage: err?.message })
    );
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this?.state?.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      // return <div>Latitude:{this?.state?.lat}</div>;
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
