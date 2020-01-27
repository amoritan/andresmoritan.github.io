import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Badge.css';

function Badge(props) {
  const { data } = props;
  const {
    title,
    icon,
    color,
  } = data;

  return (
    <span className="Badge" style={{ background: color }}>
      <FontAwesomeIcon icon={icon} />
      {title}
    </span>
  );
}

Badge.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    color: PropTypes.string,
  }).isRequired,
};

// Badge.defaultProps = {
//   data: {
//     icon: '',
//     color: '',
//   },
// };

export default Badge;
