import React, { Component } from 'react';
import SearchForm from './SearchForm';
import PhotoList from './PhotoList';
import Unsplash from './Unsplash';
import './App.css';

class App extends Component {
  state = {
    photos: [],
    avatar: null
  };

  componentDidMount() {
    Unsplash.requestRandom().then(json =>
      this.setState({
        avatar: json.urls.thumb
      })
    );
  }

  searchPhotos = options => {
    Unsplash.requestPhotos(options).then(json =>
      this.setState({
        photos: json.results
      })
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.avatar && (
            <div className="avatar">
              <img src={this.state.avatar} alt="Avatar" />
            </div>
          )}
          <h1 className="App-title">Picture Search</h1>
        </header>
        <SearchForm onSubmit={this.searchPhotos} />
        <PhotoList photos={this.state.photos} />
      </div>
    );
  }
}

export default App;
