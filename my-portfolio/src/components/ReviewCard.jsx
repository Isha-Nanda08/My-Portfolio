import React from 'react';
import PropTypes from 'prop-types';

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure className="review-card">
      <div className="flex-row">
        <img src={img} alt={name} width="32" height="32" className="rounded-full" />
        <div className="flex-col">
          <span className="text-sm">{name}</span>
          <p className="text-xs">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

ReviewCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default ReviewCard;
