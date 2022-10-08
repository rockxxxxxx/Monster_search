import React, { Component } from "react";
import Card from "../card/Card";
import "./card-list.css";

export default class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.monsters.map((monster) => {
          return (
            <div className="item" key={monster.id}>
              <Card id={monster.id} name={monster.name} email={monster.email} />
            </div>
          );
        })}
      </div>
    );
  }
}
