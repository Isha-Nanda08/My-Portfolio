import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Marquee.css'; // Correct CSS import

const Marquee = ({
  className = '',
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  children,
  style = {},
}) => {
  const marqueeClass = `marquee-container ${vertical ? 'vertical' : 'horizontal'} ${className}`;
  const itemClass = `marquee-item ${vertical ? 'vertical' : 'horizontal'} ${
    pauseOnHover ? 'pause-on-hover' : ''
  }`;

  return (
    <div className={marqueeClass} style={style}>
      <div
        className={itemClass}
        style={{
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {children}
      </div>
    </div>
  );
};

Marquee.propTypes = {
  className: PropTypes.string,
  reverse: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  vertical: PropTypes.bool,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default Marquee;
