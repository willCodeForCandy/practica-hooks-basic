import './Character.css';

const Character = ({ name, image }) => {
  const handleClick = e => {
    e.target.classList.toggle('rotated');
  };
  return (
    <>
      <h2>{name}</h2>
      <img src={image} alt={name} onClick={handleClick} />
    </>
  );
};

export default Character;
