import React, { Component } from "react";
import "./search.css";

export default class Search extends Component {
  render() {
    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder="Search Monster"
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}
