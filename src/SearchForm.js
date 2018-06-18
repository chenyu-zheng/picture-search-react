import React, { Component } from 'react';

class SearchForm extends Component {
  state = {
    query: '',
    perPage: '10',
    orientation: ''
  };

  handleFormChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleSubmit = () => {
    const { query, perPage, orientation } = this.state;
    this.props.onSubmit({
      query,
      perPage,
      orientation
    });
  };

  render() {
    const { query, perPage, orientation } = this.state;

    return (
      <form className="search-form">
        <div className="search-bar">
          <input
            type="text"
            name="query"
            value={query}
            onChange={this.handleFormChange}
          />
          <i className="material-icons button" onClick={this.handleSubmit}>
            search
          </i>
        </div>
        <div className="select-bar">
          <select
            className="select-photos-per-page"
            name="perPage"
            value={perPage}
            onChange={this.handleFormChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <select
            className="select-orientation"
            name="orientation"
            value={orientation}
            onChange={this.handleFormChange}
          >
            <option value="">All</option>
            <option value="landscape">Landscape</option>
            <option value="portrait">Portrait</option>
            <option value="squarish ">Squarish</option>
          </select>
        </div>
      </form>
    );
  }
}

export default SearchForm;
