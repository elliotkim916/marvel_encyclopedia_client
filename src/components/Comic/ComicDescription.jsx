import React from 'react';

const ComicDescription = React.memo(({ comicResult }) => {
  let imgUrl, urls;

  if (comicResult.thumbnail) {
    imgUrl =
      comicResult.thumbnail.path.slice(5) +
      '/portrait_uncanny.' +
      comicResult.thumbnail.extension;
  }

  if (comicResult.urls) {
    urls = comicResult.urls.map((link) => link.url);
  }

  return (
    <React.Fragment>
      <img src={imgUrl} alt="Comic book cover" className="cover-artwork" />
      <div className="comicIssueDetails">
        <h1 className="comicBookTitle">{comicResult.title}</h1>

        <h2 className="issueInformation">
          <span className="issue-number">ISSUE #{comicResult.issueNumber}</span>
          <span className="total-pages">{comicResult.pageCount} PAGES</span>
        </h2>

        <div
          dangerouslySetInnerHTML={{ __html: comicResult.description }}
          className="description-container"
        ></div>

        <div className="new-comic-link">
          <a
            href={urls[0]}
            target="_blank"
            className="new-link"
            rel="noopener noreferrer"
          >
            Purchase Comic<span className="arrows"> >></span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
});

export default ComicDescription;
