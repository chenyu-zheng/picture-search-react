import React, { Component } from 'react';
import SearchForm from './SearchForm';
import PhotoList from './PhotoList';
import Unsplash from './Unsplash';
import './App.css';

class App extends Component {
  state = {
    photos: []
  };

  searchPhotos = options => {
    Unsplash.requestData(options).then(json => {
      console.log(json);
      this.setState({
        photos: json.results
      });
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Picture Search</h1>
        </header>
        <SearchForm onSubmit={this.searchPhotos} />
        <PhotoList photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
