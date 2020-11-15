import React, { Component } from "react";
import axios from "axios";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { response: null };
  }

  componentDidMount() {
    axios
      .get("https://kitsu.io/api/edge/anime" + window.location.pathname)
      .then((response) => {
        console.log(response.data.data);
        this.setState({ response });
      });
  }

  render() {
    if (this.state.response == null) {
      return <div>Loading...</div>;
    } else {
      return (
        <main>
          <div>Title: {this.state.response.data.data.attributes.titles.en}</div>
          <div>
            Japanese Title:{" "}
            {this.state.response.data.data.attributes.titles.ja_jp}
          </div>
          <img
            src={this.state.response.data.data.attributes.posterImage.large}
            alt={this.state.response.data.data.attributes.titles.en}
          />
          <div>
            Synopsis: <br />
            {this.state.response.data.data.attributes.synopsis}
          </div>
        </main>
      );
    }
  }
}

export default Details;
