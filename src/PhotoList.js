import React, { Component } from 'react';

class PhotoList extends Component {
  render() {
    const { photos } = this.props;

    return (
      <ol>
        {photos.map(photo => (
          <li className="photo" key={photo.id}>
            <img src={photo.urls.thumb} alt={photo.id} />
          </li>
        ))}
      </ol>
    );
  }
}

export default PhotoList;
