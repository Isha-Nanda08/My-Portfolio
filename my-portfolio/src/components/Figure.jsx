import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Marquee.css'; // Using same CSS file as it contains both styles

const Figure = ({ img, name, username, body }) => {
  return (
    <figure className="dark">
      <div className="flex-row">
        <img src={img} alt={name} width="32" height="32" />
        <div className="flex-col">
          <span className="text-sm">{name}</span>
          <p className="text-xs">{username}</p>
        </div>
      </div>
      <blockquote>{body}</blockquote>
    </figure>
  );
};

Figure.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Figure;
