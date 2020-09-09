import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProtectedData } from '../../../store/actions/protected-data';
import { findComic } from '../../../store/actions/comics';
import { addData } from '../../../store/actions/protected-data';
import ModalCmp from '../../Modal/ModalCmp';
import './ComicsList.module.css';

const ComicListItem = ({ comic, username }) => {
  const dispatch = useDispatch();
  const savedComics = useSelector(
    (state) => state.protectedDataReducer.data.data
  );
  const [saveData, setSaveData] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [duplicateSaved, setDuplicateSaved] = useState(false);

  useEffect(() => {
    if (saveData) {
      const { title, read, imgUrl, resourceURI, username } = saveData;
      const duplicateComic = savedComics.find((comic) => comic.title === title);

      if (duplicateComic) {
        setDuplicateSaved(true);
      } else {
        dispatch(addData(title, read, imgUrl, resourceURI, username)).then(() =>
          dispatch(fetchProtectedData())
        );
      }
    }
  }, [saveData]);

  const onAdd = (e, comic, read, username) => {
    e.preventDefault();
    const { title, thumbnail, resourceURI } = comic;
    const imgUrl = `${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`;
    setIsOpen(true);
    setSaveData({ title, read, imgUrl, resourceURI, username });
  };

  const duplicateSave = () => {
    if (modalIsOpen && duplicateSaved) {
      return (
        <ModalCmp
          modalState={modalIsOpen}
          modalFunction={setIsOpen}
          message="That comic has already been saved to Your Read & Unread Comics list."
          buttonText="Okay"
        />
      );
    } else {
      return null;
    }
  };

  const newSave = () => {
    if (modalIsOpen && !duplicateSaved) {
      return (
        <ModalCmp
          modalState={modalIsOpen}
          modalFunction={setIsOpen}
          message="The comic has been saved to Your Read & Unread Comics list."
          buttonText="Okay"
        />
      );
    } else {
      return null;
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

      {duplicateSave()}
      {newSave()}
    </li>
  );
};

export default ComicListItem;
