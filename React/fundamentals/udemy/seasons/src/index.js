import React from "react";
import ReactDOM, { render } from "react-dom";
import SeasonDisplay from "./seasonDIsplay";
import Spinner from "./spinner";
import "./style/App.css";
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
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this?.state?.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      // return <div>Latitude:{this?.state?.lat}</div>;
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  }
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
