import React from 'react';
import { connect } from 'react-redux';
import Loading from '../../Loading/Loading';
import './Description.module.css';

const Description = ({ loading, data, event }) => {
  let imgUrl, urls;

  if (loading) {
    return <Loading loadingMessage="Loading.." />;
  }

  if (data) {
    if (data.thumbnail) {
      imgUrl =
        data.thumbnail.path.slice(5) +
        '/portrait_uncanny.' +
        data.thumbnail.extension;
    }

    if (data.urls) {
      urls = data.urls.map((link) => link.url);
    }

    return (
      <section className="character-info-section">
        <hr className="style10" />

        <img src={imgUrl} alt="" className="searched-img" />

        <div className="character-description">
          <h2 className="character-name">
            {event ? data.title : data.name.toUpperCase()}
          </h2>

          <p className="character-text">{data.description}</p>

          <div className="info-new-link">
            <a
              href={event ? urls[0] : urls[1]}
              target="_blank"
              className="new-link"
              rel="noopener noreferrer"
            >
              Read More<span className="character-arrows"> >></span>
            </a>
          </div>
        </div>
      </section>
    );
  }
};

const mapStateToProps = (state) => ({
  loading: state.characterReducer.loading,
});

export default connect(mapStateToProps)(Description);
