import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {CardList} from './component/card-list/card-list.component'
import {SearchBox} from './component/search-box/search-box.component'



class App extends Component {

  constructor() {
    super();
    this.state = {
      searchText: '',
      monstors: [ ]
    };

    
  }

  searchEvents = (event) => this.setState({ searchText:event.target.value });
 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(json=>this.setState({monstors:json}));
  }

  render() {
    const filteredMonstors = this.state.monstors.filter(m=>m.name.toLowerCase().includes(this.state.searchText.toLowerCase()));

    console.log(this.state.searchText + " - " + filteredMonstors.length);

    return (<div className="App">
    <header className="App-header">Monsters Rolodox
    <h1>Monstor Rodolex</h1>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
      <SearchBox placeHolder="Search by name" handleChange={this.searchEvents}></SearchBox>
    </header>
    <h1>Hello World!!!</h1>
    <CardList users={filteredMonstors}></CardList>
  </div>)
  }
}

export default App;





