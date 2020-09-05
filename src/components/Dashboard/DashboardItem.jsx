import React from 'react';
import { Link } from 'react-router-dom';
import { findComic } from '../../store/actions/comics';
import { deleteData } from '../../store/actions/protected-data';

const DashboardItem = React.memo(({ dispatch, item }) => {
  const onDelete = (id, e) => {
    e.preventDefault();
    const result = window.confirm(
      'Are you sure you want to delete?  If so, click OK.'
    );

    if (result) {
      dispatch(deleteData(id));
    }
  };

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
          onClick={(e) => onDelete(item._id, e)}
          className="remove-comic-btn"
        >
          <i className="fa fa-trash-o" aria-hidden="true"></i> Remove Comic
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
