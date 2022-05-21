import React from "react";
import ReactDOM, { render } from "react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: null };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        //!! WE CALLED setState
        this.setState({ lat: position?.coords?.latitude });
        //
      },
      (err) => {
        this.setState({ errorMessage: err?.message });
      }
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this?.state?.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude:{this?.state?.lat}</div>;
    }
    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
