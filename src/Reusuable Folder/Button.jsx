import React from 'react'

const Button = ({ label, className, onClick }) => {
  return (
    <button className={` ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};


export default Button