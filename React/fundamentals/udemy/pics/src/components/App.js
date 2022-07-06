import React from "react";
import unsplash from "../api/unspalsh";
import SearchBar from "./SearchBar";

class APP extends React.Component {
  state = { images: [] };
  // async onSearchSubmit(term) {
  //   const response = await axios.get("https://api.unsplash.com/search/photos", {
  //     params: {
  //       query: term,
  //     },
  //     headers: {
  //       Authorization: "Client-ID mFEhpyG5U73dBaiWYFN544oeOdu0Iw0Hwta1YmUVt50",
  //     },
  //   });
  //   console.log(this);
  //   console.log(response.data.results);
  //   this.setState({ images: response.data.results });
  // }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          query: term,
        },
      }
    );
    console.log(this);
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div class="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found {this.state.images.length} Images
      </div>
    );
  }
}
export default APP;
