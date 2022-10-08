import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import CardList from "./components/card-list/CardList";
import Search from "./components/search-box/Search";

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

  searchHandler = (event) => {
    const search = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { search };
    });
  };

  render() {
    const { monsters, search } = this.state;
    const { searchHandler } = this;

    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(search);
    });
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search onChangeHandler={searchHandler} />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}
