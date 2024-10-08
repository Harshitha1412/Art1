import React, { useState } from 'react';
import ArtworkService from './ArtworkService';

const CreateArtwork = () => {
  const [artwork, setArtwork] = useState({
    title: '',
    artist: '',
    description: '',
    price: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setArtwork({ ...artwork, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ArtworkService.createArtwork(artwork)
      .then(() => {
        alert('Artwork added successfully!');
      })
      .catch((error) => {
        console.error('Error creating artwork:', error);
      });
  };

  return (
    <div>
      <h2>Add New Artwork</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" name="title" value={artwork.title} onChange={handleInputChange} />
        </div>
        <div>
          <label>Artist</label>
          <input type="text" name="artist" value={artwork.artist} onChange={handleInputChange} />
        </div>
        <div>
          <label>Description</label>
          <textarea name="description" value={artwork.description} onChange={handleInputChange} />
        </div>
        <div>
          <label>Price</label>
          <input type="number" name="price" value={artwork.price} onChange={handleInputChange} />
        </div>
        <button type="submit">Add Artwork</button>
      </form>
    </div>
  );
};

export default CreateArtwork;
