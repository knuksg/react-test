import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, className, text, img }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={` cursor-pointer ${className}`}
    >
      {img && <img src={img} className="w-5"></img>}
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
};
export default Button;
