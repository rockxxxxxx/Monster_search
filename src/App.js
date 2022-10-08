import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: "",
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

  render() {
    const filteredMonster = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.search);
    });
    return (
      <>
        <input
          className="input-search"
          type="search"
          placeholder="Search Monster"
          onChange={(event) => {
            const search = event.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { search };
            });
          }}
        />
        {filteredMonster.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </>
    );
  }
}
