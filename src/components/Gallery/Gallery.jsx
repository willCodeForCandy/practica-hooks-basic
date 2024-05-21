import Character from '../CharacterCard/Character';
import './Gallery.css';
import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character/');
      const response = await res.json();
      setCharacters(response.results);
    };
    getCharacters();
  }, []);

  return (
    <ul className="gallery">
      {characters.map(character => {
        return (
          <li key={character.id}>
            <Character name={character.name} image={character.image} />
          </li>
        );
      })}
    </ul>
  );
};

export default Gallery;
