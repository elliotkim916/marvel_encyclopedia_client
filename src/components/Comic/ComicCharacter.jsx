import React from 'react';
import { searchCharacter } from '../../actions/characters';
import { Link } from 'react-router-dom';

const ComicCharacter = React.memo(({ character, dispatch }) => {
  return (
    <li
      onClick={() => dispatch(searchCharacter(character.name))}
      className="marvelComicsCharacter"
    >
      <img
        src={`${character.thumbnail.path.slice(5)}/portrait_fantastic.${
          character.thumbnail.extension
        }`}
        alt=""
        className="cover-art"
      />
      <br />
      <Link className="character-name-link" to="/search-results">
        {character.name}
      </Link>
    </li>
  );
});

export default ComicCharacter;
