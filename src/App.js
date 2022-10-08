import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState(
        () => {
          return { monsters: res.data };
        },
        () => {
          console.log(this.state); //call back function
        }
      );
    });
  }
  searchMonster(e) {
    const filteredMonster = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState(() => {
      return { monsters: filteredMonster };
    });
  }

  render() {
    return (
      <>
        <input
          className="input-search"
          type="search"
          placeholder="Search Monster"
          onChange={this.searchMonster.bind(this)}
        />
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </>
    );
  }
}
