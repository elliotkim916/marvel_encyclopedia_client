import React from 'react';
import { Link } from 'react-router-dom';
import { findComic } from '../../../store/actions/comics';
import { addData } from '../../../store/actions/protected-data';
import './ComicsList.module.css';

const ComicListItem = ({ dispatch, comic, protectedData, username }) => {
  const onAdd = (e, comic, read, username) => {
    e.preventDefault();

    const { title, thumbnail, resourceURI } = comic;
    const imgUrl = `${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`;
    const comicsArray = protectedData.data;

    const comicFound = comicsArray.find((comic) => comic.title === title);

    if (comicFound) {
      window.alert(
        `The comic ${comic.title} has already been saved to Your Read & Unread Comics list.`
      );
    } else {
      dispatch(addData(title, read, imgUrl, resourceURI, username));
      window.alert(
        `The comic ${title} has been saved to Your Read & Unread Comics list.`
      );
    }
  };

  const imgUrl = `${comic.thumbnail.path.slice(5)}/portrait_fantastic.${
    comic.thumbnail.extension
  }`;

  return (
    <li className="comic-history">
      <div
        className="comic-container"
        onClick={() => dispatch(findComic(comic.resourceURI))}
      >
        <img src={imgUrl} alt="" className="comic-cover-img" />
        <br />
        <div className="comic-title-link">
          <Link className="comic-title-link" to="/comic">
            {comic.title}
          </Link>
        </div>
      </div>

      <div className="radio-btns">
        <button
          type="submit"
          className="already-read-input"
          onClick={(e) => onAdd(e, comic, 'ALREADY READ', username)}
        >
          ALREADY READ
        </button>

        <button
          type="submit"
          className="read-later-input"
          onClick={(e) => onAdd(e, comic, 'READ LATER', username)}
        >
          READ LATER
        </button>
      </div>
    </li>
  );
};

export default ComicListItem;
