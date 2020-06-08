import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this);                //es5 style
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => this.setState({ searchField: e.target.value });
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value });                   //es5 style
  // }

  render() {

    const { monsters, searchField } = this.state;
    const filteredSeachFields = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <p>Search for monster</p>
        <SearchBox
          placeholder='search monster'
          handleChange={
            this.handleChange
          }>
        </SearchBox>

        <CardList monsters={filteredSeachFields}> </CardList>
      </div>
    )
  }
}

export default App;
