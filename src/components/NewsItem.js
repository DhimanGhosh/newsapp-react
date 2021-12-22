import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {
      imageUrl,
      title,
      description,
      newsUrl,
      newsDate,
      newsSource,
      newsAuthor,
      badgeColor,
    } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div id="badge">
            <span
              className={`badge rounded-pill bg-${badgeColor} text-${
                badgeColor === "light" ? "dark" : "light"
              }`}
            >
              {newsSource}
            </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By <strong>{newsAuthor}</strong> <br />
                On <strong>{newsDate}</strong>
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
