import React, { Component } from "react";
import "./card.css";

export default class Card extends Component {
  render() {
    const { id, name, email } = this.props;
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${id}?set=set2 & size=100*100`}
          alt="monsters"
        />
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
    );
  }
}
