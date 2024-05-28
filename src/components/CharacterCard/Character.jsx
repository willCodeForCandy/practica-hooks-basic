import { useState } from 'react';
import './Character.css';

const Character = ({ name, image }) => {
  const [turned, setTurned] = useState(false);
  // const handleClick = e => {
  //   e.target.classList.toggle('rotated');
  // }; //!No modificar directamente el DOM!!
  return (
    <>
      <h2>{name}</h2>
      <img
        className={turned ? 'rotated' : ''}
        src={image}
        alt={name}
        onClick={() => setTurned(turned => !turned)}
      />
    </>
  );
};

export default Character;
