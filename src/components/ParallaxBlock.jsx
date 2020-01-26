import React from 'react';
import PropTypes from 'prop-types';
import './ParallaxBlock.css';

function ParallaxBlock(props) {
  const {
    children,
    elementType,
    elementClass,
    backgrounds,
  } = props;

  return React.createElement(
    elementType,
    { className: `ParallaxBlock ${elementClass}` },
    backgrounds.map((background, index) => (
      <div
        className={`ParallaxBlock-layer ParallaxBlock-layer--back_${index + 1}`}
        style={{ backgroundImage: `url('${background}')` }}
        key={`ParallaxBlock-layer--back_${index + 1}`}
      />
    )),
    <div className="ParallaxBlock-layer ParallaxBlock-layer--base">
      { children }
    </div>,
  );
}

ParallaxBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  elementType: PropTypes.oneOf(['section', 'header', 'footer']),
  elementClass: PropTypes.string,
  backgrounds: PropTypes.arrayOf(PropTypes.string),
};

ParallaxBlock.defaultProps = {
  elementType: 'section',
  elementClass: '',
  backgrounds: [],
};

export default ParallaxBlock;
