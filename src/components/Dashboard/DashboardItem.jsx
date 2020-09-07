import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { findComic } from '../../store/actions/comics';
import { deleteData } from '../../store/actions/protected-data';
import ModalCmp from '../Modal/ModalCmp';

const DashboardItem = React.memo(({ dispatch, item }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  // const [deleteSuccess, setDeleteSuccess] = useState(false);

  if (modalIsOpen) {
    return (
      <ModalCmp
        message="Are you sure you want to delete?"
        buttonText="Yes"
        modalState={modalIsOpen}
        modalFunction={setIsOpen}
        toDelete={true}
        deleteId={deleteId}
        deleteFunction={deleteData}
        // setDeleteSuccess={setDeleteSuccess}
      />
    );
  }

  // if (deleteSuccess === true) {
  //   return (
  //     <ModalCmp
  //       message="Your delete was successful."
  //       buttonText="Okay"
  //       modalState={deleteSuccess}
  //       modalFunction={setDeleteSuccess}
  //     />
  //   );
  // }

  return (
    <div className="read-history">
      <div className="comic-info">
        <img
          src={item.imgUrl.slice(5)}
          alt="comic"
          className="cover-image"
          onClick={() => dispatch(findComic(item.resourceURI))}
        />
        <button
          onClick={() => {
            setDeleteId(item._id);
            setIsOpen(true);
          }}
          className="remove-comic-btn"
        >
          <i className="fa fa-trash-o" aria-hidden="true"></i>
          Remove Comic
        </button>
        <div
          className="comic-text"
          onClick={() => dispatch(findComic(item.resourceURI))}
        >
          <Link className="title-link" to="/comic">
            {item.title}
          </Link>
          <br />
          <span className="item-read">{item.read}</span>
        </div>
      </div>
    </div>
  );
});

export default DashboardItem;
