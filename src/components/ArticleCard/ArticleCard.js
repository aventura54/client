import React from "react";
import "./ArticleCard.scss";
const ArticleCard = ({ imgSrc, articleTitle, articleText }) => {
  return (
    <div className="card-holder">
      <img src={imgSrc} className="img-holder" />
      <div className="text-holder">
        <span className="text-title">{articleTitle}</span>
        <span className="text-body">{articleText}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
