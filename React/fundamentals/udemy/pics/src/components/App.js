import React from "react";
import SearchBar from "./SearchBar";
class APP extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <div class="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
export default APP;
